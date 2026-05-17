
# InvokeAgentResponse

Agent response. All fields are optional because the shape differs slightly between streaming and non-streaming modes. 

## Properties

Name | Type
------------ | -------------
`requestId` | string
`response` | string
`threadId` | string
`model` | string
`usage` | [TokenUsage](TokenUsage.md)
`toolCalls` | [Array&lt;ToolInvocation&gt;](ToolInvocation.md)

## Example

```typescript
import type { InvokeAgentResponse } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": null,
  "response": null,
  "threadId": null,
  "model": null,
  "usage": null,
  "toolCalls": null,
} satisfies InvokeAgentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeAgentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


