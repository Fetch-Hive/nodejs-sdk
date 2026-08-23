
# PostPublicWorkspacesAssets200Response


## Properties

Name | Type
------------ | -------------
`message` | string
`asset` | [AssetObject](AssetObject.md)

## Example

```typescript
import type { PostPublicWorkspacesAssets200Response } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Asset uploaded successfully.,
  "asset": null,
} satisfies PostPublicWorkspacesAssets200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostPublicWorkspacesAssets200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


