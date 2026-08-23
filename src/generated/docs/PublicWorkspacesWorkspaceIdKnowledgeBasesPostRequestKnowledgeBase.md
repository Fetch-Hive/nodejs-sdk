
# PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequestKnowledgeBase


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`searchType` | string
`searchScoreThreshold` | number
`searchChunkLimit` | string

## Example

```typescript
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequestKnowledgeBase } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Product Catalog,
  "description": Searchable product data,
  "searchType": hybrid,
  "searchScoreThreshold": 0.5,
  "searchChunkLimit": null,
} satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequestKnowledgeBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequestKnowledgeBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


