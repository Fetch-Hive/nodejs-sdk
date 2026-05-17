
# UserObject


## Properties

Name | Type
------------ | -------------
`id` | string
`firstName` | string
`lastName` | string
`fullName` | string
`nameInitial` | string
`email` | string
`username` | string
`status` | string
`isActive` | boolean
`isArchived` | boolean
`hasAvatar` | boolean
`backupScraperEnabled` | boolean
`unreadNotificationsCount` | number
`avatar` | [AvatarObject](AvatarObject.md)
`account` | [AccountObject](AccountObject.md)
`membership` | [UserMembershipObject](UserMembershipObject.md)
`workspaces` | [Array&lt;WorkspaceObject&gt;](WorkspaceObject.md)

## Example

```typescript
import type { UserObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "firstName": Jane,
  "lastName": Doe,
  "fullName": Jane Doe,
  "nameInitial": JD,
  "email": jane@example.com,
  "username": null,
  "status": active,
  "isActive": true,
  "isArchived": false,
  "hasAvatar": false,
  "backupScraperEnabled": false,
  "unreadNotificationsCount": 0,
  "avatar": null,
  "account": null,
  "membership": null,
  "workspaces": null,
} satisfies UserObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


