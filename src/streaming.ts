/**
 * streaming.ts
 *
 * Lightweight Server-Sent Events (SSE) parser for streaming Fetch Hive responses.
 *
 * Usage:
 *   const res = await fetch('https://api.fetchhive.com/v1/agent/invoke', {
 *     method: 'POST',
 *     headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ agent: 'my-agent', message: 'Hello', streaming: true }),
 *   });
 *   for await (const chunk of parseSse<SseChunk>(res)) {
 *     if (chunk.type === 'delta') process.stdout.write(chunk.content ?? '');
 *   }
 */

export interface SseChunk {
  /** Event type: "delta" | "done" | "tool_start" | "tool_end" | "error" */
  type: string;
  /** Text delta (present for type "delta") */
  content?: string;
  /** Present on the final "done" event */
  request_id?: string;
  /** Present on the final "done" event */
  model?: string;
  /** Tool name (present for "tool_start" / "tool_end") */
  tool_name?: string;
  /** Serialised JSON tool input (present for "tool_start") */
  tool_input?: string;
  /** Serialised JSON tool result (present for "tool_end") */
  observation?: string;
  /** Error message (present for "error" events) */
  error?: string;
  usage?: {
    prompt_tokens?: number;
    completion_tokens?: number;
    total_tokens?: number;
  };
}

/**
 * Async generator that parses a `text/event-stream` HTTP response and
 * yields each parsed JSON event as `T`.
 *
 * Stops at `data: [DONE]`.
 */
export async function* parseSse<T = SseChunk>(res: Response): AsyncIterable<T> {
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status}: ${body}`);
  }

  if (!res.body) {
    throw new Error('Response body is null; cannot parse SSE stream.');
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;

    buf += decoder.decode(value, { stream: true });

    let i: number;
    while ((i = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, i).trimEnd();
      buf = buf.slice(i + 1);

      if (!line.startsWith('data: ')) continue;

      const payload = line.slice(6);
      if (payload === '[DONE]') return;

      try {
        yield JSON.parse(payload) as T;
      } catch {
        // Skip malformed lines
      }
    }
  }
}

/**
 * Collect all SSE events into an array (convenience helper for non-streaming
 * contexts or testing).
 */
export async function collectSse<T = SseChunk>(res: Response): Promise<T[]> {
  const result: T[] = [];
  for await (const chunk of parseSse<T>(res)) {
    result.push(chunk);
  }
  return result;
}
