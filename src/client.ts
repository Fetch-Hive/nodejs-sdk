/**
 * client.ts
 *
 * Idiomatic facade over the OpenAPI-generated code.
 *
 * Users interact with this class rather than the raw generated APIs:
 *
 *   const client = new FetchHive({ apiKey: process.env.FETCH_HIVE_API_KEY });
 *
 *   // Typed, auto-completed management APIs (generated)
 *   const agent = await client.agents.getV1AgentsId({ id: 'my-agent' });
 *
 *   // Hand-written streaming helpers
 *   for await (const chunk of client.invokeAgentStream({ agent: 'my-agent', message: 'Hello' })) {
 *     if (chunk.type === 'response') process.stdout.write(chunk.response ?? '');
 *     if (chunk.type === 'tool')     console.log(`\nCalling tool: ${chunk.tool}`);
 *     if (chunk.type === 'usage')    console.log('\nUsage:', chunk.usage);
 *   }
 */

import { parseSse, type SseChunk } from './streaming.js';

// These are imported from the generated code. The paths resolve after assembly.
// If the generator changes the class names, update the imports below.
// import { Configuration, PromptsApi, WorkflowsApi, AgentsApi } from './generated/index.js';

/** Options accepted by the FetchHive constructor */
export interface FetchHiveOptions {
  /**
   * API token from the Fetch Hive dashboard.
   * Defaults to the `FETCH_HIVE_API_KEY` environment variable.
   */
  apiKey?: string;
  /** Override the base URL (default: https://api.fetchhive.com/v1) */
  baseURL?: string;
}

// ── Request types (inline so the client file is self-contained) ───────────────

export interface InvokePromptRequest {
  deployment: string;
  variant?: string;
  inputs?: Record<string, unknown>;
  user?: string;
}

export interface InvokeWorkflowRequest {
  deployment: string;
  variant?: string;
  inputs?: Record<string, unknown>;
  async?: { enabled: boolean; callback_url?: string };
  user?: string;
}

export interface InvokeAgentRequest {
  message: string;
  agent: string;
  thread_id?: string;
  user?: string;
  messages?: Array<{ role: 'user' | 'assistant' | 'system'; content: string; image_urls?: string[] }>;
  image_urls?: string[];
}

// ── Response types ────────────────────────────────────────────────────────────

export interface InvokePromptResponse {
  request_id?: string;
  response?: string;
  model?: string;
  usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
}

export interface InvokeWorkflowResponse {
  request_id?: string;
  run_id?: string;
  status?: 'completed' | 'failed' | 'queued';
  output?: string;
  error?: string;
}

export interface InvokeAgentResponse {
  request_id?: string;
  response?: string;
  thread_id?: string;
  model?: string;
  usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
  tool_calls?: Array<{ tool_name?: string; tool_input?: string; observation?: string }>;
}

// ── Client ────────────────────────────────────────────────────────────────────

export class FetchHive {
  private readonly apiKey: string;
  private readonly baseURL: string;

  // Generated API namespaces will be added here once codegen output is
  // integrated. Uncomment and adjust to match generated class names.
  // readonly agents: AgentsApi;
  // readonly workflows: WorkflowsApi;
  // readonly knowledgeBases: KnowledgeBasesApi;

  constructor(opts: FetchHiveOptions = {}) {
    const key = opts.apiKey ?? process.env.FETCH_HIVE_API_KEY;
    if (!key) throw new Error('FetchHive: apiKey is required. Pass it explicitly or set FETCH_HIVE_API_KEY.');
    this.apiKey = key;
    this.baseURL = (opts.baseURL ?? 'https://api.fetchhive.com/v1').replace(/\/$/, '');

    // Uncomment after first codegen run:
    // const cfg = new Configuration({ accessToken: this.apiKey, basePath: this.baseURL });
    // this.agents = new AgentsApi(cfg);
    // this.workflows = new WorkflowsApi(cfg);
    // this.knowledgeBases = new KnowledgeBasesApi(cfg);
  }

  private get defaultHeaders(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };
  }

  private async post<T>(path: string, body: unknown): Promise<T> {
    const res = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`FetchHive API error ${res.status}: ${text}`);
    }
    return res.json() as Promise<T>;
  }

  private postStream(path: string, body: unknown): Promise<Response> {
    return fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: this.defaultHeaders,
      body: JSON.stringify(body),
    });
  }

  // ── Prompt ─────────────────────────────────────────────────────────────────

  /** Invoke a prompt deployment and return the full response. */
  invokePrompt(params: InvokePromptRequest): Promise<InvokePromptResponse> {
    return this.post('/invoke', { ...params, streaming: false });
  }

  /** Invoke a prompt deployment and stream SSE events. */
  async *invokePromptStream(params: InvokePromptRequest): AsyncIterable<SseChunk> {
    const res = await this.postStream('/invoke', { ...params, streaming: true });
    yield* parseSse<SseChunk>(res);
  }

  // ── Workflow ────────────────────────────────────────────────────────────────

  /** Invoke a workflow deployment and return the full response (sync). */
  invokeWorkflow(params: InvokeWorkflowRequest): Promise<InvokeWorkflowResponse> {
    return this.post('/workflow/invoke', params);
  }

  // ── Agent ───────────────────────────────────────────────────────────────────

  /** Send a message to an agent and return the full response. */
  invokeAgent(params: InvokeAgentRequest): Promise<InvokeAgentResponse> {
    return this.post('/agent/invoke', { ...params, streaming: false });
  }

  /** Send a message to an agent and stream SSE events. */
  async *invokeAgentStream(params: InvokeAgentRequest): AsyncIterable<SseChunk> {
    const res = await this.postStream('/agent/invoke', { ...params, streaming: true });
    yield* parseSse<SseChunk>(res);
  }
}
