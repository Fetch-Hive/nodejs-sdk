
# InvokePromptResponse


## Properties

Name | Type
------------ | -------------
`requestId` | string
`response` | string
`model` | string
`usage` | [TokenUsage](TokenUsage.md)

## Example

```typescript
import type { InvokePromptResponse } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": req_01HXYZ,
  "response": null,
  "model": gpt-4o,
  "usage": null,
} satisfies InvokePromptResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokePromptResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


