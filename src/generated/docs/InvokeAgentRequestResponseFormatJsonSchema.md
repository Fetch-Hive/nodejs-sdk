
# InvokeAgentRequestResponseFormatJsonSchema


## Properties

Name | Type
------------ | -------------
`name` | string
`strict` | boolean
`schema` | { [key: string]: any; }

## Example

```typescript
import type { InvokeAgentRequestResponseFormatJsonSchema } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "strict": null,
  "schema": null,
} satisfies InvokeAgentRequestResponseFormatJsonSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeAgentRequestResponseFormatJsonSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


