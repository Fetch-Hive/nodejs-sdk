
# StorageObject


## Properties

Name | Type
------------ | -------------
`assetStorageUsed` | number
`assetStorageLimit` | number
`assetStoragePercentageUsed` | number
`assetStorageLimitReached` | boolean

## Example

```typescript
import type { StorageObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "assetStorageUsed": 0,
  "assetStorageLimit": null,
  "assetStoragePercentageUsed": 0,
  "assetStorageLimitReached": false,
} satisfies StorageObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StorageObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


