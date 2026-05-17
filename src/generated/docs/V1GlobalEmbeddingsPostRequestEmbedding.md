
# V1GlobalEmbeddingsPostRequestEmbedding


## Properties

Name | Type
------------ | -------------
`text` | string
`model` | string

## Example

```typescript
import type { V1GlobalEmbeddingsPostRequestEmbedding } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "text": Hello, world!,
  "model": text-embedding-3-small,
} satisfies V1GlobalEmbeddingsPostRequestEmbedding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1GlobalEmbeddingsPostRequestEmbedding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


