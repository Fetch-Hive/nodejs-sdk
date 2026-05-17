/**
 * Unit tests for the SSE parser (streaming.ts).
 *
 * Covers SSE1-SSE5 in the SDK test matrix.
 * No network calls — all tests construct Response objects from fixed strings.
 */
import { parseSse, collectSse } from '../src/streaming.js';

// ── Helper ────────────────────────────────────────────────────────────────────

/**
 * Build a `Response` whose body is composed of one or more string chunks.
 * Multiple chunks let us test mid-line reassembly (SSE2).
 */
function makeResponse(chunks: string[], status = 200): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  });
  return new Response(stream, {
    status,
    headers: { 'Content-Type': 'text/event-stream' },
  });
}

function makeSse(events: unknown[], done = true): string {
  const lines = events.map(e => `data: ${JSON.stringify(e)}\n\n`).join('');
  return lines + (done ? 'data: [DONE]\n\n' : '');
}

// ── SSE1: clean single-chunk stream ──────────────────────────────────────────

describe('SSE1 — parses a clean single-chunk stream', () => {
  test('yields each parsed event', async () => {
    const sseText = makeSse([
      { type: 'delta', content: 'Hello' },
      { type: 'delta', content: ' world' },
      { type: 'done', request_id: 'r1' },
    ]);
    const res = makeResponse([sseText]);
    const chunks = await collectSse(res);

    expect(chunks).toHaveLength(3);
    expect((chunks[0] as { content: string }).content).toBe('Hello');
    expect((chunks[1] as { content: string }).content).toBe(' world');
    expect((chunks[2] as { type: string }).type).toBe('done');
  });
});

// ── SSE2: chunks split mid-line ───────────────────────────────────────────────

describe('SSE2 — reassembles chunks split mid-line', () => {
  test('yields the event despite the split', async () => {
    // Split "data: {...}\n\n" into three separate network chunks
    const fullLine = 'data: {"type":"delta","content":"Hi"}\n\ndata: [DONE]\n\n';
    const part1 = fullLine.slice(0, 15);
    const part2 = fullLine.slice(15, 30);
    const part3 = fullLine.slice(30);

    const res = makeResponse([part1, part2, part3]);
    const chunks = await collectSse(res);

    expect(chunks).toHaveLength(1);
    expect((chunks[0] as { content: string }).content).toBe('Hi');
  });

  test('reassembles multiple events from a fragmented stream', async () => {
    const full = 'data: {"type":"delta","content":"A"}\n\ndata: {"type":"delta","content":"B"}\n\ndata: [DONE]\n\n';
    // Fragment into many tiny pieces
    const pieces = full.split('').reduce<string[]>((acc, ch, i) => {
      if (i % 5 === 0) acc.push('');
      acc[acc.length - 1] += ch;
      return acc;
    }, []);

    const res = makeResponse(pieces);
    const chunks = await collectSse(res);

    expect(chunks).toHaveLength(2);
    expect((chunks[0] as { content: string }).content).toBe('A');
    expect((chunks[1] as { content: string }).content).toBe('B');
  });
});

// ── SSE3: non-data lines are skipped ─────────────────────────────────────────

describe('SSE3 — skips non-data lines', () => {
  test('ignores comment lines starting with ":"', async () => {
    const sseText = ': this is a comment\ndata: {"type":"delta","content":"ok"}\n\ndata: [DONE]\n\n';
    const chunks = await collectSse(makeResponse([sseText]));

    expect(chunks).toHaveLength(1);
    expect((chunks[0] as { content: string }).content).toBe('ok');
  });

  test('ignores blank lines between events', async () => {
    const sseText = '\n\ndata: {"type":"delta","content":"ok"}\n\n\n\ndata: [DONE]\n\n';
    const chunks = await collectSse(makeResponse([sseText]));

    expect(chunks).toHaveLength(1);
  });

  test('ignores event: and id: fields', async () => {
    const sseText = 'event: message\nid: 42\ndata: {"type":"delta","content":"ok"}\n\ndata: [DONE]\n\n';
    const chunks = await collectSse(makeResponse([sseText]));

    expect(chunks).toHaveLength(1);
    expect((chunks[0] as { content: string }).content).toBe('ok');
  });
});

// ── SSE4: malformed JSON is skipped silently ──────────────────────────────────

describe('SSE4 — skips malformed JSON without throwing', () => {
  test('continues yielding valid events after a bad line', async () => {
    const sseText = [
      'data: {"type":"delta","content":"before"}\n\n',
      'data: {this is not json}\n\n',
      'data: {"type":"delta","content":"after"}\n\n',
      'data: [DONE]\n\n',
    ].join('');

    const chunks = await collectSse(makeResponse([sseText]));

    expect(chunks).toHaveLength(2);
    expect((chunks[0] as { content: string }).content).toBe('before');
    expect((chunks[1] as { content: string }).content).toBe('after');
  });
});

// ── SSE5: stops at [DONE] ─────────────────────────────────────────────────────

describe('SSE5 — stops at data: [DONE]', () => {
  test('does not yield events after [DONE]', async () => {
    const sseText = [
      'data: {"type":"delta","content":"keep"}\n\n',
      'data: [DONE]\n\n',
      'data: {"type":"delta","content":"drop"}\n\n',
    ].join('');

    const chunks = await collectSse(makeResponse([sseText]));

    expect(chunks).toHaveLength(1);
    expect((chunks[0] as { content: string }).content).toBe('keep');
  });

  test('parseSse completes without error when stream has no [DONE]', async () => {
    const sseText = 'data: {"type":"delta","content":"only"}\n\n';
    const chunks = await collectSse(makeResponse([sseText]));

    expect(chunks).toHaveLength(1);
  });

  test('non-2xx response throws before yielding any events', async () => {
    const res = makeResponse(['data: {"type":"delta"}\n\n'], 401);
    // Override text() for the error body
    Object.defineProperty(res, 'text', { value: () => Promise.resolve('Unauthorized') });

    await expect(collectSse(res)).rejects.toThrow('401');
  });
});
