
# KnowledgeBaseObject


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`dataItemCount` | number
`searchScoreThreshold` | string
`searchChunkLimit` | number
`generatedAt` | Date
`status` | string
`searchType` | string
`isActive` | boolean
`isArchived` | boolean
`isHybridSearch` | boolean
`isVectorSearch` | boolean
`isFullTextSearch` | boolean

## Example

```typescript
import type { KnowledgeBaseObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": My Knowledge Base,
  "description": null,
  "dataItemCount": 0,
  "searchScoreThreshold": 0.1,
  "searchChunkLimit": 8,
  "generatedAt": null,
  "status": active,
  "searchType": hybrid,
  "isActive": true,
  "isArchived": false,
  "isHybridSearch": true,
  "isVectorSearch": false,
  "isFullTextSearch": false,
} satisfies KnowledgeBaseObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KnowledgeBaseObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


