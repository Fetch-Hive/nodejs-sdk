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
  if (chunk.type === 'response') {
    process.stdout.write(chunk.response ?? '');
  } else if (chunk.type === 'tool') {
    process.stdout.write(`\n[Calling tool: ${chunk.tool}]\n`);
  } else if (chunk.type === 'usage') {
    process.stdout.write('\n\n[Done]');
    if (chunk.usage) console.log('\nUsage:', chunk.usage);
  }
}
