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
  if (chunk.type === 'delta') process.stdout.write(chunk.content ?? '');
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

## Invoke an agent (streaming)

```typescript
for await (const chunk of client.invokeAgentStream({
  agent: 'my-agent',
  message: 'What is the weather in London?',
  thread_id: 'session-abc123',   // optional — persist conversation history
})) {
  if (chunk.type === 'delta') process.stdout.write(chunk.content ?? '');
  if (chunk.type === 'tool_start') console.log(`\nCalling tool: ${chunk.tool_name}`);
}
```

## Multimodal (image) inputs

```typescript
const result = await client.invokeAgent({
  agent: 'vision-agent',
  message: 'Describe this image',
  image_urls: ['https://example.com/photo.jpg'],
});
```

## Authentication

All requests require a Bearer token. Pass it to the constructor:

```typescript
const client = new FetchHive({ apiKey: 'fhk_...' });
```

Or set the `FETCH_HIVE_API_KEY` environment variable and access it via `process.env`.

## Version

0.1.0

## License

MIT — see [LICENSE](LICENSE).
