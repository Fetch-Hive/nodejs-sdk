
# HiveAgentSources

Optional grounded context for the Hive Agent run.

## Properties

Name | Type
------------ | -------------
`websiteUrls` | Array&lt;string&gt;
`assetIds` | Array&lt;string&gt;
`knowledgeBaseIds` | Array&lt;string&gt;
`knowledgeBaseItemIds` | Array&lt;string&gt;

## Example

```typescript
import type { HiveAgentSources } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "websiteUrls": null,
  "assetIds": null,
  "knowledgeBaseIds": null,
  "knowledgeBaseItemIds": null,
} satisfies HiveAgentSources

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HiveAgentSources
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


