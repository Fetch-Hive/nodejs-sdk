
# SseChunk

A single event in a Server-Sent Events stream. The `type` field is a runtime discriminator. Known values:   - `reasoning` — a reasoning / thinking chunk (prompt and agent streams)   - `response`  — a text chunk (prompt and agent streams)   - `tool`      — a tool invocation result (agent stream only)   - `usage`     — final token usage event; signals end of meaningful stream content   - `summary`   — auto-summarization event emitted before reasoning when a thread                   history was compressed (agent stream only)   - `error`     — server-side error during streaming  The stream is terminated by `data: [DONE]`, which is handled by the SSE parser and never surfaced as a chunk. 

## Properties

Name | Type
------------ | -------------
`type` | string
`response` | string
`requestId` | string
`model` | string
`done` | boolean
`toolId` | string
`tool` | string
`toolType` | string
`toolInput` | { [key: string]: any; }
`observation` | string
`stopReason` | string
`summaryText` | string
`originalTokenCount` | number
`contextLimit` | number
`provider` | string
`error` | string
`usage` | [TokenUsage](TokenUsage.md)

## Example

```typescript
import type { SseChunk } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": response,
  "response": null,
  "requestId": null,
  "model": null,
  "done": null,
  "toolId": null,
  "tool": null,
  "toolType": null,
  "toolInput": null,
  "observation": null,
  "stopReason": null,
  "summaryText": null,
  "originalTokenCount": null,
  "contextLimit": null,
  "provider": null,
  "error": null,
  "usage": null,
} satisfies SseChunk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SseChunk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


