
# InvokeWorkflowRequest


## Properties

Name | Type
------------ | -------------
`deployment` | string
`variant` | string
`inputs` | { [key: string]: any; }
`async` | [AsyncConfig](AsyncConfig.md)
`user` | string

## Example

```typescript
import type { InvokeWorkflowRequest } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "deployment": my-workflow,
  "variant": null,
  "inputs": {"customer_id":"42"},
  "async": null,
  "user": null,
} satisfies InvokeWorkflowRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeWorkflowRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


