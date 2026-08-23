
# InvokeHiveAgentResponse

Hive Agent run accepted response.

## Properties

Name | Type
------------ | -------------
`runId` | string
`requestId` | string
`status` | string
`webhookSecret` | string

## Example

```typescript
import type { InvokeHiveAgentResponse } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "runId": null,
  "requestId": null,
  "status": null,
  "webhookSecret": null,
} satisfies InvokeHiveAgentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeHiveAgentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


