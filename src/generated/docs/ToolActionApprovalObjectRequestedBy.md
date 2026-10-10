
# ToolActionApprovalObjectRequestedBy

(value may be null)

## Properties

Name | Type
------------ | -------------
`kind` | string
`name` | string
`workflowName` | string
`agentName` | string

## Example

```typescript
import type { ToolActionApprovalObjectRequestedBy } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "kind": null,
  "name": null,
  "workflowName": null,
  "agentName": null,
} satisfies ToolActionApprovalObjectRequestedBy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolActionApprovalObjectRequestedBy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


