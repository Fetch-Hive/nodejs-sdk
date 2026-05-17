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
 *     if (chunk.type === 'response') process.stdout.write(chunk.response ?? '');
 *     if (chunk.type === 'usage')    console.log('\nUsage:', chunk.usage);
 *   }
 */

export interface SseChunk {
  /**
   * Event type discriminator. Known values:
   * - "reasoning" — thinking/reasoning chunk (prompt and agent streams)
   * - "response"  — text output chunk (prompt and agent streams)
   * - "tool"      — tool invocation and result (agent stream only)
   * - "usage"     — final token usage; signals end of meaningful stream content
   * - "summary"   — conversation history summarization (agent stream only)
   * - "error"     — server-side streaming error
   */
  type: string;
  /** Text content of the chunk. Present for "response" and "reasoning" events. */
  response?: string;
  /** Unique request identifier. Present on most events; always present on "usage". */
  request_id?: string;
  /** Model identifier. Present on "response" and "reasoning" events (prompt stream). */
  model?: string;
  /**
   * Per-chunk boolean flag on "response" and "reasoning" events (agent stream).
   * Not a terminal event type — use the "usage" event to detect end of stream.
   */
  done?: boolean;
  /** Unique tool invocation identifier. Present for "tool" events. */
  tool_id?: string;
  /** Tool name. Present for "tool" events (e.g. "google_search"). */
  tool?: string;
  /** Internal tool type identifier. Present for "tool" events. */
  tool_type?: string;
  /** Parsed tool input arguments. Present for "tool" events. */
  tool_input?: Record<string, unknown>;
  /** Serialised JSON tool result. Present for "tool" events. */
  observation?: string;
  /** Reason the stream ended. Present on "usage" events (e.g. "completed"). */
  stop_reason?: string;
  /** Compressed summary of the prior conversation. Present for "summary" events. */
  summary_text?: string;
  /** Token count before summarization. Present for "summary" events. */
  original_token_count?: number;
  /** Model context window size. Present for "summary" events. */
  context_limit?: number;
  /** LLM provider used for summarization. Present for "summary" events. */
  provider?: string;
  /** Error message. Present for "error" events. */
  error?: string;
  /** Token usage breakdown. Present on "usage" events. */
  usage?: Record<string, unknown>;
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
