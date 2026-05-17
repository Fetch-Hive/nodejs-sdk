
# V1GlobalEmbeddingsPost200Response


## Properties

Name | Type
------------ | -------------
`embedding` | Array&lt;number&gt;
`model` | string
`usage` | [V1GlobalEmbeddingsPost200ResponseUsage](V1GlobalEmbeddingsPost200ResponseUsage.md)

## Example

```typescript
import type { V1GlobalEmbeddingsPost200Response } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "embedding": null,
  "model": text-embedding-3-small,
  "usage": null,
} satisfies V1GlobalEmbeddingsPost200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1GlobalEmbeddingsPost200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


