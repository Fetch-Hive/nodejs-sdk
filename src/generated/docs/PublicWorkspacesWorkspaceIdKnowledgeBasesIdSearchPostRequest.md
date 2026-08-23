
# PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest


## Properties

Name | Type
------------ | -------------
`searchQuery` | string
`searchType` | string
`searchChunkLimit` | number
`searchScoreThreshold` | number

## Example

```typescript
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "searchQuery": How do I reset my password?,
  "searchType": hybrid,
  "searchChunkLimit": 5,
  "searchScoreThreshold": 0.5,
} satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


