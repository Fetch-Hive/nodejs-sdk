# @fetch-hive/sdk

Official Node.js / TypeScript SDK for [Fetch Hive](https://fetchhive.com).

> This repository is **bot-managed**. Source is generated and assembled by
> [Fetch-Hive/sdk-generator](https://github.com/Fetch-Hive/sdk-generator).
> Do not open pull requests here — open them in the generator repo.

## Installation

```bash
npm install @fetch-hive/sdk
```

## Quick start

```typescript
import { FetchHive } from '@fetch-hive/sdk';

const client = new FetchHive({ apiKey: process.env.FETCH_HIVE_API_KEY! });

// Invoke a prompt
const result = await client.invokePrompt({ deployment: 'my-prompt' });
console.log(result.response);

// Stream an agent response
for await (const chunk of client.invokeAgentStream({ agent: 'my-agent', message: 'Hello' })) {
  if (chunk.type === 'delta') process.stdout.write(chunk.content ?? '');
}
```

See the [sdk-generator README](https://github.com/Fetch-Hive/sdk-generator) for full documentation.

## License

MIT
