
# PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200ResponseChat


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`lastMessageContent` | string
`lastMessageSentAt` | Date
`messageCount` | number
`generatedAt` | Date
`status` | string
`agent` | object

## Example

```typescript
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200ResponseChat } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": Test Chat,
  "lastMessageContent": null,
  "lastMessageSentAt": null,
  "messageCount": null,
  "generatedAt": null,
  "status": active,
  "agent": null,
} satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200ResponseChat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200ResponseChat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


