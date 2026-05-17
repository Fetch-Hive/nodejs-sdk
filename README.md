# @fetch-hive/sdk

Official Node.js / TypeScript SDK for [Fetch Hive](https://fetchhive.com) — invoke AI prompts, workflows, and agents from your application.

[![npm version](https://badge.fury.io/js/%40fetch-hive%2Fsdk.svg)](https://www.npmjs.com/package/@fetch-hive/sdk)

## Installation

```bash
npm install @fetch-hive/sdk
# or
yarn add @fetch-hive/sdk
# or
pnpm add @fetch-hive/sdk
```

## Quick start

```typescript
import { FetchHive } from '@fetch-hive/sdk';

const client = new FetchHive({ apiKey: process.env.FETCH_HIVE_API_KEY! });
```

Get your API key from the [Fetch Hive dashboard](https://app.fetchhive.com).

## Invoke a prompt

```typescript
const result = await client.invokePrompt({
  deployment: 'my-prompt',
  inputs: { name: 'Alice', topic: 'machine learning' },
});
console.log(result.response);
```

## Invoke a prompt (streaming)

```typescript
for await (const chunk of client.invokePromptStream({
  deployment: 'my-prompt',
  inputs: { name: 'Alice' },
})) {
  if (chunk.type === 'response') process.stdout.write(chunk.response ?? '');
  if (chunk.type === 'usage')    console.log('\nUsage:', chunk.usage);
}
```

## Invoke a workflow

```typescript
const run = await client.invokeWorkflow({
  deployment: 'my-workflow',
  inputs: { customer_id: '42' },
});
console.log(run.status, run.output);
```

## Invoke a workflow (async)

```typescript
const run = await client.invokeWorkflow({
  deployment: 'my-workflow',
  inputs: { customer_id: '42' },
  async: { enabled: true, callback_url: 'https://example.com/webhook' },
});
console.log('Queued:', run.run_id);
```

## Invoke an agent

```typescript
const reply = await client.invokeAgent({
  agent: 'my-agent',
  message: 'What is the weather in London?',
});
console.log(reply.response);
```

## Invoke an agent (streaming)

```typescript
for await (const chunk of client.invokeAgentStream({
  agent: 'my-agent',
  message: 'What is the weather in London?',
  thread_id: 'session-abc123',   // optional — persist conversation history
})) {
  if (chunk.type === 'response') process.stdout.write(chunk.response ?? '');
  if (chunk.type === 'tool')     console.log(`\nCalling tool: ${chunk.tool}`);
  if (chunk.type === 'usage')    console.log('\nUsage:', chunk.usage);
}
```

## Multimodal (image) inputs

```typescript
const result = await client.invokeAgent({
  agent: 'vision-agent',
  message: 'Describe this image',
  image_urls: ['https://example.com/photo.jpg'],
});
console.log(result.response);
```

## Authentication

Pass the API key to the constructor:

```typescript
const client = new FetchHive({ apiKey: 'fhk_...' });
```

Or set the environment variable and omit the explicit key:

```bash
export FETCH_HIVE_API_KEY=fhk_...
```

## Configuration

| Option | Default | Description |
|---|---|---|
| `apiKey` | `process.env.FETCH_HIVE_API_KEY` | Bearer token from the Fetch Hive dashboard |
| `baseURL` | `https://api.fetchhive.com/v1` | Override the API base URL |

## Links

- [Fetch Hive dashboard](https://app.fetchhive.com)
- [API documentation](https://docs.fetchhive.com)
- [GitHub](https://github.com/Fetch-Hive/nodejs-sdk)

## Version

0.2.4

## License

MIT — see [LICENSE](LICENSE).
