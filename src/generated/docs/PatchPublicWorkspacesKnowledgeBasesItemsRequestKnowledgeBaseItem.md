
# PatchPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`dataContent` | string
`dataQuery` | string
`deleteEmailData` | string
`deleteTelephoneData` | string
`chunkingStrategy` | string
`chunkOverlap` | number
`maximumChunkLength` | number

## Example

```typescript
import type { PatchPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "dataContent": null,
  "dataQuery": null,
  "deleteEmailData": null,
  "deleteTelephoneData": null,
  "chunkingStrategy": null,
  "chunkOverlap": null,
  "maximumChunkLength": null,
} satisfies PatchPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PatchPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


