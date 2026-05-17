
# ToolInvocation

A single tool call made by the agent during execution.

## Properties

Name | Type
------------ | -------------
`toolName` | string
`toolInput` | string
`observation` | string

## Example

```typescript
import type { ToolInvocation } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "toolName": null,
  "toolInput": null,
  "observation": null,
} satisfies ToolInvocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolInvocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


