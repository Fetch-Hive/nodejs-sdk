
# InvokeWorkflowResponse

Synchronous workflow result.

## Properties

Name | Type
------------ | -------------
`requestId` | string
`runId` | string
`status` | string
`output` | string
`error` | string

## Example

```typescript
import type { InvokeWorkflowResponse } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": null,
  "runId": null,
  "status": null,
  "output": null,
  "error": null,
} satisfies InvokeWorkflowResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeWorkflowResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


