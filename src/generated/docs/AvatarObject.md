
# AvatarObject


## Properties

Name | Type
------------ | -------------
`thumb` | string
`medium` | string
`large` | string

## Example

```typescript
import type { AvatarObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "thumb": null,
  "medium": null,
  "large": null,
} satisfies AvatarObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AvatarObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


