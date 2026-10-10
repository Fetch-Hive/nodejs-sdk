
# PendingToolApproval


## Properties

Name | Type
------------ | -------------
`approvalId` | string
`toolName` | string
`summary` | string
`arguments` | { [key: string]: any; }
`expiresAt` | Date
`reviewUrl` | string

## Example

```typescript
import type { PendingToolApproval } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "approvalId": null,
  "toolName": null,
  "summary": null,
  "arguments": null,
  "expiresAt": null,
  "reviewUrl": null,
} satisfies PendingToolApproval

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingToolApproval
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


