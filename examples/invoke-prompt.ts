/**
 * Example: Invoke a prompt deployment
 *
 * Run:
 *   FETCH_HIVE_API_KEY=fhk_... npx ts-node examples/invoke-prompt.ts
 */
import { FetchHive } from '../src/index.js';

const client = new FetchHive({ apiKey: process.env.FETCH_HIVE_API_KEY! });

const result = await client.invokePrompt({
  deployment: 'my-prompt',
  inputs: { name: 'Alice', topic: 'machine learning' },
});

console.log('Response:', result.response);
console.log('Model:', result.model);
console.log('Usage:', result.usage);
