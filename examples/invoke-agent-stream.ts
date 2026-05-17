/**
 * Example: Invoke an agent with streaming
 *
 * Run:
 *   FETCH_HIVE_API_KEY=fhk_... npx ts-node examples/invoke-agent-stream.ts
 */
import { FetchHive } from '../src/index.js';

const client = new FetchHive({ apiKey: process.env.FETCH_HIVE_API_KEY! });

console.log('Streaming agent response:\n');

for await (const chunk of client.invokeAgentStream({
  agent: 'my-agent',
  message: 'Tell me a short story',
})) {
  if (chunk.type === 'delta') {
    process.stdout.write(chunk.content ?? '');
  } else if (chunk.type === 'tool_start') {
    process.stdout.write(`\n[Calling tool: ${chunk.tool_name}]\n`);
  } else if (chunk.type === 'done') {
    process.stdout.write('\n\n[Done]');
    if (chunk.usage) console.log('\nUsage:', chunk.usage);
  }
}
