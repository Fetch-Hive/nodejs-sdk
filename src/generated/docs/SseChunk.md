
# SseChunk

A single event in a Server-Sent Events stream. The type field is a runtime discriminator. Known values: delta, done, tool_start, tool_end, error. 

## Properties

Name | Type
------------ | -------------
`type` | string
`content` | string
`requestId` | string
`model` | string
`toolName` | string
`toolInput` | string
`observation` | string
`error` | string
`usage` | [TokenUsage](TokenUsage.md)

## Example

```typescript
import type { SseChunk } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": delta,
  "content": null,
  "requestId": null,
  "model": null,
  "toolName": null,
  "toolInput": null,
  "observation": null,
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


