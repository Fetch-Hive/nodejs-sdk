/**
 * Contract test suite for the FetchHive Node.js client.
 *
 * Covers the SDK test matrix (C1-C5, A1-A2, P1-P3, W1-W3, AG1-AG3, S1-S2, E1-E2).
 * Tests stub global `fetch` — no real network calls are made.
 */
import { FetchHive } from '../src/client.js';
import { parseSse } from '../src/streaming.js';

// ── Mock helpers ──────────────────────────────────────────────────────────────

function makeMockFetch(body: unknown, status = 200) {
  return jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: () => Promise.resolve(body),
    text: () => Promise.resolve(typeof body === 'string' ? body : JSON.stringify(body)),
    body: null,
  });
}

function makeSseResponse(text: string, status = 200): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
  return new Response(stream, { status, headers: { 'Content-Type': 'text/event-stream' } });
}

function mockFetchStream(response: Response) {
  return jest.fn().mockResolvedValue(response);
}

const DEFAULT_BASE = 'https://api.fetchhive.com/v1';

// ── C: Construction ───────────────────────────────────────────────────────────

describe('C: Construction', () => {
  const origEnv = process.env.FETCH_HIVE_API_KEY;
  afterEach(() => {
    if (origEnv === undefined) {
      delete process.env.FETCH_HIVE_API_KEY;
    } else {
      process.env.FETCH_HIVE_API_KEY = origEnv;
    }
  });

  test('C1 — missing apiKey and no env var throws', () => {
    delete process.env.FETCH_HIVE_API_KEY;
    expect(() => new FetchHive()).toThrow('apiKey is required');
  });

  test('C2 — FETCH_HIVE_API_KEY env var is used as fallback', () => {
    process.env.FETCH_HIVE_API_KEY = 'env-key';
    const client = new FetchHive();
    expect(client).toBeDefined();
  });

  test('C3 — custom baseURL is respected', async () => {
    const mockFetch = makeMockFetch({ request_id: 'r', response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k', baseURL: 'https://custom.example.com/api' });
    await client.invokePrompt({ deployment: 'd' });

    const [url] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('https://custom.example.com/api');
  });

  test('C4 — trailing slash on baseURL is stripped', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k', baseURL: 'https://custom.example.com/api/' });
    await client.invokePrompt({ deployment: 'd' });

    const [url] = mockFetch.mock.calls[0] as [string, RequestInit];
    // Path should not have double-slashes (the https:// prefix is fine)
    const path = url.replace(/^https?:\/\//, '');
    expect(path).not.toMatch(/\/\//);
    expect(url).toContain('https://custom.example.com/api/invoke');
  });

  test('C5 — default baseURL is https://api.fetchhive.com/v1', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokePrompt({ deployment: 'd' });

    const [url] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain(DEFAULT_BASE);
  });
});

// ── A: Auth headers ───────────────────────────────────────────────────────────

describe('A: Auth headers', () => {
  test('A1 — Authorization: Bearer <key> header is sent', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'my-secret-key' });
    await client.invokePrompt({ deployment: 'd' });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect((opts.headers as Record<string, string>)['Authorization']).toBe('Bearer my-secret-key');
  });

  test('A2 — Content-Type: application/json header is sent', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokePrompt({ deployment: 'd' });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect((opts.headers as Record<string, string>)['Content-Type']).toBe('application/json');
  });
});

// ── P: Prompt ─────────────────────────────────────────────────────────────────

describe('P: invokePrompt', () => {
  test('P1+P2 — POSTs to /invoke with streaming:false and returns body', async () => {
    const mockBody = { request_id: 'req_1', response: 'Hello', model: 'gpt-4o' };
    const mockFetch = makeMockFetch(mockBody);
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    const result = await client.invokePrompt({ deployment: 'my-prompt', inputs: { name: 'Alice' } });

    const [url, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/invoke');
    expect(opts.method).toBe('POST');
    const body = JSON.parse(opts.body as string);
    expect(body.streaming).toBe(false);
    expect(result.response).toBe('Hello');
  });

  test('P3 — optional fields omitted when not provided', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokePrompt({ deployment: 'd' });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.variant).toBeUndefined();
    expect(body.inputs).toBeUndefined();
    expect(body.user).toBeUndefined();
  });

  test('P3 — optional fields included when provided', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokePrompt({
      deployment: 'd',
      variant: 'v2',
      inputs: { x: 1 },
      user: 'u1',
      metadata: { customer_id: 'cus_123', trial: false, invoice_count: 12, region: null },
    });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.variant).toBe('v2');
    expect(body.inputs).toEqual({ x: 1 });
    expect(body.user).toBe('u1');
    expect(body.metadata).toEqual({ customer_id: 'cus_123', trial: false, invoice_count: 12, region: null });
  });
});

// ── W: Workflow ───────────────────────────────────────────────────────────────

describe('W: invokeWorkflow', () => {
  test('W1+W2 — POSTs to /workflow/invoke and returns body', async () => {
    const mockBody = { request_id: 'r', run_id: 'run_1', status: 'completed', output: 'done' };
    const mockFetch = makeMockFetch(mockBody);
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    const result = await client.invokeWorkflow({ deployment: 'my-wf' });

    const [url, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/workflow/invoke');
    expect(opts.method).toBe('POST');
    expect(result.status).toBe('completed');
  });

  test('W3 — async mode builds correct async block', async () => {
    const mockFetch = makeMockFetch({ status: 'queued' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokeWorkflow({
      deployment: 'my-wf',
      async: { enabled: true, callback_url: 'https://example.com/cb' },
    });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.async).toEqual({ enabled: true, callback_url: 'https://example.com/cb' });
  });

  test('W4 — passes metadata through', async () => {
    const mockFetch = makeMockFetch({ status: 'completed' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokeWorkflow({
      deployment: 'my-wf',
      metadata: { customer_id: 'cus_123', invoice_count: 12 },
    });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.metadata).toEqual({ customer_id: 'cus_123', invoice_count: 12 });
  });
});

// ── AG: Agent ─────────────────────────────────────────────────────────────────

describe('AG: invokeAgent', () => {
  test('AG1+AG2 — POSTs to /agent/invoke with streaming:false and returns body', async () => {
    const mockBody = { request_id: 'r', response: 'Hi there' };
    const mockFetch = makeMockFetch(mockBody);
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    const result = await client.invokeAgent({ agent: 'my-agent', message: 'Hi' });

    const [url, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    expect(url).toContain('/agent/invoke');
    const body = JSON.parse(opts.body as string);
    expect(body.streaming).toBe(false);
    expect(result.response).toBe('Hi there');
  });

  test('AG3 — optional fields omitted when not provided', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokeAgent({ agent: 'a', message: 'm' });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.thread_id).toBeUndefined();
    expect(body.user).toBeUndefined();
    expect(body.messages).toBeUndefined();
    expect(body.image_urls).toBeUndefined();
  });

  test('AG3 — optional fields included when provided', async () => {
    const mockFetch = makeMockFetch({ response: 'ok' });
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await client.invokeAgent({
      agent: 'a',
      message: 'm',
      thread_id: 'tid',
      user: 'u1',
      metadata: { customer_id: 'cus_123', trial: false },
      messages: [{ role: 'user', content: 'prev' }],
      image_urls: ['https://img.example.com/1.png'],
    });

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.thread_id).toBe('tid');
    expect(body.user).toBe('u1');
    expect(body.metadata).toEqual({ customer_id: 'cus_123', trial: false });
    expect(body.messages).toHaveLength(1);
    expect(body.image_urls).toHaveLength(1);
  });
});

// ── S: Streaming ──────────────────────────────────────────────────────────────

describe('S: Streaming endpoints', () => {
  test('S1 — invokePromptStream sends streaming:true and yields events', async () => {
    const sseText = 'data: {"type":"response","response":"Hello"}\n\ndata: [DONE]\n\n';
    const mockFetch = mockFetchStream(makeSseResponse(sseText));
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    const chunks: unknown[] = [];
    for await (const chunk of client.invokePromptStream({ deployment: 'd', metadata: { plan: 'enterprise' } })) {
      chunks.push(chunk);
    }

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.streaming).toBe(true);
    expect(body.metadata).toEqual({ plan: 'enterprise' });
    expect(chunks).toHaveLength(1);
    expect((chunks[0] as { response: string }).response).toBe('Hello');
  });

  test('S2 — invokeAgentStream sends streaming:true and yields events', async () => {
    const sseText = 'data: {"type":"response","response":"Hi"}\n\ndata: [DONE]\n\n';
    const mockFetch = mockFetchStream(makeSseResponse(sseText));
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    const chunks: unknown[] = [];
    for await (const chunk of client.invokeAgentStream({ agent: 'a', message: 'm', metadata: { plan: 'enterprise' } })) {
      chunks.push(chunk);
    }

    const [, opts] = mockFetch.mock.calls[0] as [string, RequestInit];
    const body = JSON.parse(opts.body as string);
    expect(body.streaming).toBe(true);
    expect(body.metadata).toEqual({ plan: 'enterprise' });
    expect(chunks).toHaveLength(1);
    expect((chunks[0] as { response: string }).response).toBe('Hi');
  });
});

// ── E: Error paths ────────────────────────────────────────────────────────────

describe('E: Error handling', () => {
  test('E1 — non-2xx response on non-streaming endpoint throws with status', async () => {
    const mockFetch = makeMockFetch('Internal Server Error', 500);
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    await expect(client.invokePrompt({ deployment: 'd' })).rejects.toThrow('500');
  });

  test('E2 — non-2xx response on streaming endpoint throws before yielding', async () => {
    const mockFetch = mockFetchStream(makeSseResponse('Unauthorized', 401));
    global.fetch = mockFetch as unknown as typeof fetch;

    const client = new FetchHive({ apiKey: 'k' });
    async function drain() {
      for await (const _ of client.invokePromptStream({ deployment: 'd' })) { /* consume */ }
    }
    await expect(drain()).rejects.toThrow('401');
  });
});
