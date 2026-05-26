
# InvokePromptRequest


## Properties

Name | Type
------------ | -------------
`deployment` | string
`variant` | string
`inputs` | { [key: string]: any; }
`streaming` | boolean
`user` | string
`metadata` | [{ [key: string]: MetadataValue; }](MetadataValue.md)

## Example

```typescript
import type { InvokePromptRequest } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "deployment": my-prompt,
  "variant": ,
  "inputs": {"name":"Alice","topic":"machine learning"},
  "streaming": null,
  "user": null,
  "metadata": {"customer_id":"cus_123","plan":"enterprise","trial":false,"invoice_count":12,"region":null},
} satisfies InvokePromptRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokePromptRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


