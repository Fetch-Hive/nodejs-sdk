
# InvokeAgentRequest


## Properties

Name | Type
------------ | -------------
`message` | string
`agent` | string
`threadId` | string
`streaming` | boolean
`user` | string
`messages` | [Array&lt;AgentMessage&gt;](AgentMessage.md)
`imageUrls` | Array&lt;string&gt;

## Example

```typescript
import type { InvokeAgentRequest } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": What is the weather in London?,
  "agent": my-agent,
  "threadId": null,
  "streaming": null,
  "user": null,
  "messages": null,
  "imageUrls": null,
} satisfies InvokeAgentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeAgentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


