
# AgentDelegation


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`kind` | string
`target` | { [key: string]: any; }
`result` | { [key: string]: any; }
`expectedBy` | Date
`deliveredAt` | Date
`deliveryError` | string
`parentRequestId` | string
`toolCallId` | string
`workflowRunId` | string
`createdAt` | Date

## Example

```typescript
import type { AgentDelegation } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "kind": null,
  "target": null,
  "result": null,
  "expectedBy": null,
  "deliveredAt": null,
  "deliveryError": null,
  "parentRequestId": null,
  "toolCallId": null,
  "workflowRunId": null,
  "createdAt": null,
} satisfies AgentDelegation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentDelegation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


