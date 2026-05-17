
# UserMembershipObject


## Properties

Name | Type
------------ | -------------
`id` | string
`role` | string
`isOwner` | boolean
`isAdmin` | boolean
`isMember` | boolean

## Example

```typescript
import type { UserMembershipObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "role": owner,
  "isOwner": true,
  "isAdmin": false,
  "isMember": false,
} satisfies UserMembershipObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserMembershipObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


