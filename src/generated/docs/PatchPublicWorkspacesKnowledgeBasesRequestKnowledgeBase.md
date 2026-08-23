
# PatchPublicWorkspacesKnowledgeBasesRequestKnowledgeBase


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`searchType` | string
`searchScoreThreshold` | number
`searchChunkLimit` | number

## Example

```typescript
import type { PatchPublicWorkspacesKnowledgeBasesRequestKnowledgeBase } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Updated Name,
  "description": null,
  "searchType": null,
  "searchScoreThreshold": null,
  "searchChunkLimit": null,
} satisfies PatchPublicWorkspacesKnowledgeBasesRequestKnowledgeBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PatchPublicWorkspacesKnowledgeBasesRequestKnowledgeBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


