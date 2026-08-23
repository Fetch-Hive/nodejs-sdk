
# AssetObjectTranscription

(value may be null)

## Properties

Name | Type
------------ | -------------
`status` | string
`errorCode` | string
`errorMessage` | string
`completedAt` | Date

## Example

```typescript
import type { AssetObjectTranscription } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "errorCode": null,
  "errorMessage": null,
  "completedAt": null,
} satisfies AssetObjectTranscription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetObjectTranscription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


