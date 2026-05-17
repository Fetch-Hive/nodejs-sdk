/**
 * @fetch-hive/sdk
 *
 * Official Node.js / TypeScript SDK for the Fetch Hive API.
 *
 * @example
 * ```typescript
 * import { FetchHive } from '@fetch-hive/sdk';
 *
 * const client = new FetchHive({ apiKey: process.env.FETCH_HIVE_API_KEY! });
 *
 * // Invoke a prompt (non-streaming)
 * const result = await client.invokePrompt({
 *   deployment: 'my-prompt',
 *   inputs: { name: 'Alice' },
 * });
 * console.log(result.response);
 *
 * // Invoke an agent with streaming
 * for await (const chunk of client.invokeAgentStream({
 *   agent: 'my-agent',
 *   message: 'Summarise the latest news',
 * })) {
 *   if (chunk.type === 'delta') process.stdout.write(chunk.content ?? '');
 * }
 * ```
 */

export { FetchHive } from './client.js';
export type {
  FetchHiveOptions,
  InvokePromptRequest,
  InvokePromptResponse,
  InvokeWorkflowRequest,
  InvokeWorkflowResponse,
  InvokeAgentRequest,
  InvokeAgentResponse,
} from './client.js';

export { parseSse, collectSse } from './streaming.js';
export type { SseChunk } from './streaming.js';
