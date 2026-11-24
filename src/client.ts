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

/** `policy` follows saved rules. `auto_approve` applies to this call only. */
export type ToolApprovalMode = 'policy' | 'auto_approve';

export type ToolApprovalDecision = 'allow_once' | 'deny';

export interface ListToolActionApprovalsParams {
  status?: string;
  agent_id?: string;
  run_id?: string;
  request_id?: string;
  cursor?: string;
  limit?: number;
}

export interface PendingToolApproval {
  approval_id: string;
  tool_name: string;
  summary: string;
  arguments?: Record<string, unknown>;
  expires_at?: string | null;
  review_url?: string;
}

export interface DeniedToolCall {
  tool_name: string;
  approval_id?: string;
  reason: 'policy_deny';
}

export interface AutoApprovedToolCall {
  summary: string;
  tool_name: string;
}

function withApprovalQuery(path: string, params: ListToolActionApprovalsParams = {}): string {
  const query = new URLSearchParams();
  const entries: Array<[string, string | number | undefined]> = [
    ['status', params.status],
    ['agent_id', params.agent_id],
    ['run_id', params.run_id],
    ['request_id', params.request_id],
    ['cursor', params.cursor],
    ['limit', params.limit],
  ];
  for (const [key, value] of entries) {
    if (value !== undefined) query.set(key, String(value));
  }
  const qs = query.toString();
  return qs ? `${path}?${qs}` : path;
}

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
  /**
   * `policy` follows the deployment's saved auto-approve switch. Omit the
   * field for the same behavior. `auto_approve` applies to this call only,
   * and only when the API key is allowed to auto-approve actions.
   */
  tool_approval?: ToolApprovalMode;
}

/**
 * Start a pipeline run. Pipelines can wait for a person at a checkpoint, so a
 * run is always asynchronous: the call returns at once and the result is sent
 * to `callback_url`, signed with the pipeline's webhook secret, or you follow it
 * with getPipelineRun when `poll` is true. Name a deployment (and optionally a
 * variant), or a pipeline id to run its default variant.
 */
export interface InvokePipelineRequest {
  deployment?: string;
  variant?: string;
  pipeline?: string;
  inputs?: Record<string, unknown>;
  /** Where the result is sent. Needed when a checkpoint would stop for a person, unless `poll` is true. */
  callback_url?: string;
  /** Follow the run with getPipelineRun and getPipelineCheckpoint instead of a callback. */
  poll?: boolean;
  /** false: checkpoints send no email or Telegram message, because your app shows them. */
  notify_checkpoints?: boolean;
  /** This run's spending cap in USD; without it the pipeline's own cap applies. */
  max_spend_usd?: number;
}

export interface PipelineDefinitionOptions {
  /** The deployment variant to describe; without it, the default one. */
  variant?: string;
}

export interface ListPipelineRunsParams {
  pipeline?: string;
  deployment?: string;
  /** One status or several, comma separated: queued, running, waiting, completed, failed, cancelled. */
  status?: string;
  page?: number;
  /** Up to 50; 20 by default. */
  per_page?: number;
}

function withQuery(path: string, entries: Array<[string, string | number | undefined]>): string {
  const query = new URLSearchParams();
  for (const [key, value] of entries) {
    if (value !== undefined && value !== '') query.set(key, String(value));
  }
  const qs = query.toString();
  return qs ? `${path}?${qs}` : path;
}

export interface AnswerPipelineCheckpointRequest {
  /** The answer in the checkpoint's answer shape (see getPipelineCheckpoint). */
  answer: Record<string, unknown>;
  /** The checkpoint you were answering (its `id`), so a late retry never lands on a later checkpoint. */
  request_id?: string;
  node_key?: string;
}

/** What to change for a re-run. Only stages affected by a change run again; the rest is reused. */
export interface PipelineRevisionChanges {
  /** New start input values. */
  start_inputs?: Record<string, unknown>;
  /** New checkpoint answers, by checkpoint node key, in that checkpoint's answer shape. */
  answers?: Record<string, Record<string, unknown>>;
  /** Stage keys to run again even when nothing they read changed (for example a failed stage). */
  rerun?: string[];
  [key: string]: unknown;
}

export interface CreatePipelineRevisionRequest {
  changes: PipelineRevisionChanges;
  /** true: start the re-run. Without it, a re-run that would run stages returns `needs_confirmation` and the plan. */
  confirmed?: boolean;
  callback_url?: string;
  max_spend_usd?: number;
}

/**
 * A non-2xx answer from the Fetch Hive API. `body` is the parsed JSON error
 * (`{ error, message, error_code, errors?, details? }`) when the API sent JSON.
 */
export class FetchHiveError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, text: string) {
    super(`FetchHive API error ${status}: ${text}`);
    this.name = 'FetchHiveError';
    this.status = status;
    let body: unknown = text;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      // not JSON; keep the text
    }
    this.body = body;
  }
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
  /**
   * `policy` follows workspace rules and any saved auto-approve switch. Omit
   * the field for the same behavior. `auto_approve` applies to this call only,
   * and only when the API key is allowed to auto-approve actions.
   * An API-key run resumes on the server after a decision. Do not send
   * `decided_tool_approvals`.
   */
  tool_approval?: ToolApprovalMode;
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
  thread_id?: string | null;
  status?: 'completed' | 'awaiting_approval';
  run_id?: string;
  pending_tool_approvals?: PendingToolApproval[];
  denied_tool_calls?: DeniedToolCall[];
  tool_approval?: ToolApprovalMode;
  auto_approved_tool_calls?: AutoApprovedToolCall[];
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
      throw new FetchHiveError(res.status, text);
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

  // ── Pipeline ────────────────────────────────────────────────────────────────

  /** Start a pipeline run (always asynchronous). Returns `{ pipeline_run }`. */
  invokePipeline(params: InvokePipelineRequest): Promise<{ pipeline_run: Record<string, unknown> }> {
    const { callback_url, poll, ...rest } = params;
    const asyncConfig: Record<string, unknown> = { enabled: true, callback_url };
    if (poll) asyncConfig.poll = true;
    return this.post('/pipeline/invoke', { ...rest, async: asyncConfig });
  }

  /**
   * Set a pipeline template up in this API key's workspace and deploy it. Safe to call before every run: when
   * the workspace has it already, the same pipeline and deployment come back with `installed: false`.
   */
  installPipelineTemplate(templateId: string, params: { deployment?: string } = {}): Promise<unknown> {
    return this.post(`/pipeline/templates/${encodeURIComponent(templateId)}/install`, params);
  }

  /** A deployed pipeline's start inputs, stages, checkpoints and estimated cost per run. */
  getPipeline(pipelineId: string, options: PipelineDefinitionOptions = {}): Promise<unknown> {
    return this.get(withQuery(`/pipeline/pipelines/${encodeURIComponent(pipelineId)}`, [['variant', options.variant]]));
  }

  /** The same as getPipeline, by deployment key. */
  getPipelineDeployment(deployment: string, options: PipelineDefinitionOptions = {}): Promise<unknown> {
    return this.get(withQuery(`/pipeline/deployments/${encodeURIComponent(deployment)}`, [['variant', options.variant]]));
  }

  /** Earlier pipeline runs, newest first, with their start inputs. */
  listPipelineRuns(params: ListPipelineRunsParams = {}): Promise<unknown> {
    return this.get(
      withQuery('/pipeline/runs', [
        ['pipeline', params.pipeline],
        ['deployment', params.deployment],
        ['status', params.status],
        ['page', params.page],
        ['per_page', params.per_page],
      ]),
    );
  }

  /** A pipeline run: status, each step, cost and the output once it has finished. */
  getPipelineRun(runId: string): Promise<unknown> {
    return this.get(`/pipeline/runs/${encodeURIComponent(runId)}`);
  }

  /** What the run is waiting for at a checkpoint, and the answer shape to send. */
  getPipelineCheckpoint(runId: string): Promise<unknown> {
    return this.get(`/pipeline/runs/${encodeURIComponent(runId)}/checkpoint`);
  }

  /** Answer the checkpoint a run is waiting at. */
  answerPipelineCheckpoint(runId: string, params: AnswerPipelineCheckpointRequest): Promise<unknown> {
    return this.post(`/pipeline/runs/${encodeURIComponent(runId)}/checkpoint/answer`, params);
  }

  cancelPipelineRun(runId: string): Promise<unknown> {
    return this.post(`/pipeline/runs/${encodeURIComponent(runId)}/cancel`, {});
  }

  /** What a re-run with these changes would reuse and run, and its cost. Starts nothing. Returns `{ plan }`. */
  planPipelineRevision(runId: string, changes: PipelineRevisionChanges): Promise<unknown> {
    return this.post(`/pipeline/runs/${encodeURIComponent(runId)}/revisions/plan`, { changes });
  }

  /** Re-run a finished run with changes. Send `confirmed: true` once the person has agreed to the plan's cost. */
  createPipelineRevision(runId: string, params: CreatePipelineRevisionRequest): Promise<unknown> {
    return this.post(`/pipeline/runs/${encodeURIComponent(runId)}/revisions`, params);
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

  /** List tool-action approvals for the API key's workspace. `status` defaults to pending on the server. */
  listToolActionApprovals(workspaceId: string, params: ListToolActionApprovalsParams = {}): Promise<unknown> {
    return this.get(withApprovalQuery(`/public/workspaces/${workspaceId}/tool_action_approvals`, params));
  }

  /** Fetch one tool-action approval. */
  getToolActionApproval(workspaceId: string, id: string): Promise<unknown> {
    return this.get(`/public/workspaces/${workspaceId}/tool_action_approvals/${id}`);
  }

  /**
   * Decide a tool-action approval. `allow_once` or `deny`.
   * An API-key run resumes on the server after this call.
   */
  decideToolActionApproval(workspaceId: string, id: string, decision: ToolApprovalDecision): Promise<unknown> {
    return this.post(`/public/workspaces/${workspaceId}/tool_action_approvals/${id}/decide`, { decision });
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
