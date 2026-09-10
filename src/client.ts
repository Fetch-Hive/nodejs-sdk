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

export type Metadata = Record<string, string | number | boolean | null>;

export interface InvokePromptRequest {
  deployment: string;
  variant?: string;
  inputs?: Record<string, unknown>;
  user?: string;
  metadata?: Metadata;
}

export interface InvokeWorkflowRequest {
  deployment: string;
  variant?: string;
  inputs?: Record<string, unknown>;
  async?: { enabled: boolean; callback_url?: string };
  user?: string;
  metadata?: Metadata;
}

export interface InvokeAgentRequest {
  message: string;
  agent: string;
  thread_id?: string;
  user?: string;
  metadata?: Metadata;
  messages?: Array<{ role: 'user' | 'assistant' | 'system'; content: string; image_urls?: string[] }>;
  image_urls?: string[];
  attachments?: Array<string | Record<string, unknown>>;
  known_artifact_refs?: string[];
  artifact_refs?: string[];
}

export interface HiveAgentSources {
  website_urls?: string[];
  asset_ids?: string[];
  knowledge_base_ids?: string[];
  knowledge_base_item_ids?: string[];
}

export interface InvokeHiveAgentRequest {
  hive_agent: string;
  objective: string;
  callback_url: string;
  sources?: HiveAgentSources;
  metadata?: Metadata;
  unattended?: boolean;
  budget_policy?: "stop" | "proceed_to_cap";
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

export interface InvokeHiveAgentResponse {
  run_id?: string;
  request_id?: string;
  status?: 'pending';
  webhook_secret?: string;
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

  private async request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const res = await fetch(`${this.baseURL}${path}`, {
      method,
      headers: this.defaultHeaders,
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`FetchHive API error ${res.status}: ${text}`);
    }
    if (res.status === 204) return undefined as T;
    const text = await res.text();
    if (!text) return undefined as T;
    return JSON.parse(text) as T;
  }

  private post<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('POST', path, body);
  }

  private get<T>(path: string): Promise<T> {
    return this.request<T>('GET', path);
  }

  private patch<T>(path: string, body: unknown): Promise<T> {
    return this.request<T>('PATCH', path, body);
  }

  private delete<T>(path: string): Promise<T> {
    return this.request<T>('DELETE', path);
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
    return this.post('/prompt/invoke', { ...params, streaming: false });
  }

  /** Invoke a prompt deployment and stream SSE events. */
  async *invokePromptStream(params: InvokePromptRequest): AsyncIterable<SseChunk> {
    const res = await this.postStream('/prompt/invoke', { ...params, streaming: true });
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

  getAgentDelegation(id: string): Promise<unknown> {
    return this.get(`/agent/delegations/${id}`);
  }

  cancelAgentDelegation(id: string): Promise<unknown> {
    return this.post(`/agent/delegations/${id}/cancel`, {});
  }

  listThreadDelegations(threadId: string): Promise<unknown> {
    return this.get(`/agent/threads/${threadId}/delegations`);
  }

  // ── Hive Agent ──────────────────────────────────────────────────────────────

  /** Start a Hive Agent run asynchronously. Requires a callback URL. */
  invokeHiveAgent(params: InvokeHiveAgentRequest): Promise<InvokeHiveAgentResponse> {
    if (!params.callback_url) {
      throw new Error('FetchHive: callback_url is required for Hive Agent invocation.');
    }
    const { callback_url, ...rest } = params;
    return this.post('/hive-agent/invoke', {
      ...rest,
      async: { enabled: true, callback_url },
    });
  }

  // ── Public resources ────────────────────────────────────────────────────────

  getRequest(id: string): Promise<unknown> {
    return this.get(`/public/requests/${id}`);
  }

  listKnowledgeBases(workspaceId: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/knowledge_bases`);
  }

  getKnowledgeBase(workspaceId: string, id: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/knowledge_bases/${id}`);
  }

  createKnowledgeBase(workspaceId: string, knowledgeBase: Record<string, unknown>): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/knowledge_bases`, { knowledge_base: knowledgeBase });
  }

  updateKnowledgeBase(workspaceId: string, id: string, knowledgeBase: Record<string, unknown>): Promise<unknown> {
    return this.patch(`/public/workspaces/${workspaceId}/knowledge_bases/${id}`, { knowledge_base: knowledgeBase });
  }

  deleteKnowledgeBase(workspaceId: string, id: string): Promise<unknown> {
    return this.delete(`/public/workspaces/${workspaceId}/knowledge_bases/${id}`);
  }

  searchKnowledgeBase(workspaceId: string, id: string, params: Record<string, unknown>): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/knowledge_bases/${id}/search`, params);
  }

  listKnowledgeBaseItems(workspaceId: string, knowledgeBaseId: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/knowledge_bases/${knowledgeBaseId}/items`);
  }

  getKnowledgeBaseItem(workspaceId: string, knowledgeBaseId: string, id: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/knowledge_bases/${knowledgeBaseId}/items/${id}`);
  }

  createKnowledgeBaseItem(workspaceId: string, knowledgeBaseId: string, item: Record<string, unknown>): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/knowledge_bases/${knowledgeBaseId}/items`, {
      knowledge_base_item: item,
    });
  }

  updateKnowledgeBaseItem(
    workspaceId: string,
    knowledgeBaseId: string,
    id: string,
    item: Record<string, unknown>,
  ): Promise<unknown> {
    return this.patch(`/public/workspaces/${workspaceId}/knowledge_bases/${knowledgeBaseId}/items/${id}`, {
      knowledge_base_item: item,
    });
  }

  deleteKnowledgeBaseItem(workspaceId: string, knowledgeBaseId: string, id: string): Promise<unknown> {
    return this.delete(`/public/workspaces/${workspaceId}/knowledge_bases/${knowledgeBaseId}/items/${id}`);
  }

  regenerateKnowledgeBaseItem(workspaceId: string, knowledgeBaseId: string, id: string): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/knowledge_bases/${knowledgeBaseId}/items/${id}/regenerate`, {});
  }

  listAgents(workspaceId: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/agents`);
  }

  getAgent(workspaceId: string, id: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/agents/${id}`);
  }

  createAgent(workspaceId: string, agent: Record<string, unknown>): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/agents`, { agent });
  }

  updateAgent(workspaceId: string, id: string, agent: Record<string, unknown>): Promise<unknown> {
    return this.patch(`/public/workspaces/${workspaceId}/agents/${id}`, { agent });
  }

  deleteAgent(workspaceId: string, id: string): Promise<unknown> {
    return this.delete(`/public/workspaces/${workspaceId}/agents/${id}`);
  }

  getAgentChat(workspaceId: string, agentId: string, chatId: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/agents/${agentId}/chats/${chatId}`);
  }

  createAgentChat(workspaceId: string, agentId: string, chat: Record<string, unknown>): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/agents/${agentId}/chats`, { chat });
  }

  updateAgentChat(workspaceId: string, agentId: string, chatId: string, chat: Record<string, unknown>): Promise<unknown> {
    return this.patch(`/public/workspaces/${workspaceId}/agents/${agentId}/chats/${chatId}`, { chat });
  }

  deleteAgentChat(workspaceId: string, agentId: string, chatId: string): Promise<unknown> {
    return this.delete(`/public/workspaces/${workspaceId}/agents/${agentId}/chats/${chatId}`);
  }

  clearAgentChatMessages(workspaceId: string, agentId: string, chatId: string): Promise<unknown> {
    return this.patch(`/public/workspaces/${workspaceId}/agents/${agentId}/chats/${chatId}/clear_messages`, {});
  }

  listAgentChatMessages(workspaceId: string, agentId: string, chatId: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/agents/${agentId}/chats/${chatId}/messages`);
  }
}
