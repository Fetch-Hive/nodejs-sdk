
# PostPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`itemType` | string
`responseType` | string
`dataContent` | string
`dataQuery` | string
`deleteEmailData` | string
`deleteTelephoneData` | string
`chunkingStrategy` | string
`chunkOverlap` | number
`maximumChunkLength` | number
`assetId` | string

## Example

```typescript
import type { PostPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Product FAQ,
  "description": Frequently asked questions about our product,
  "itemType": custom,
  "responseType": text,
  "dataContent": Raw text content goes here.,
  "dataQuery": https://example.com/page,
  "deleteEmailData": disabled,
  "deleteTelephoneData": disabled,
  "chunkingStrategy": default,
  "chunkOverlap": null,
  "maximumChunkLength": null,
  "assetId": null,
} satisfies PostPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


