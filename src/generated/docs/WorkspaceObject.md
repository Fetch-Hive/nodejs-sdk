
# WorkspaceObject


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`status` | string
`defaultChargeType` | string
`isActive` | boolean
`isArchived` | boolean
`isDefaultChargeTypeHosted` | boolean
`isDefaultChargeTypePersonal` | boolean
`activePromptsCount` | number
`archivedPromptsCount` | number
`activePromptEndpointsCount` | number
`archivedPromptEndpointsCount` | number
`sampleEvaluatorsCount` | number
`sampleInputsCount` | number
`sampleToolsCount` | number
`openaiEnabled` | boolean
`anthropicEnabled` | boolean
`deepseekEnabled` | boolean
`llamaEnabled` | boolean
`mistralEnabled` | boolean
`gemmaEnabled` | boolean
`geminiEnabled` | boolean
`xaiEnabled` | boolean
`exaEnabled` | boolean
`perplexityEnabled` | boolean
`qwenEnabled` | boolean
`minimaxEnabled` | boolean
`kimiEnabled` | boolean

## Example

```typescript
import type { WorkspaceObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": My Workspace,
  "status": active,
  "defaultChargeType": hosted,
  "isActive": true,
  "isArchived": false,
  "isDefaultChargeTypeHosted": true,
  "isDefaultChargeTypePersonal": false,
  "activePromptsCount": 0,
  "archivedPromptsCount": 0,
  "activePromptEndpointsCount": 0,
  "archivedPromptEndpointsCount": 0,
  "sampleEvaluatorsCount": 0,
  "sampleInputsCount": 0,
  "sampleToolsCount": 0,
  "openaiEnabled": false,
  "anthropicEnabled": false,
  "deepseekEnabled": false,
  "llamaEnabled": false,
  "mistralEnabled": false,
  "gemmaEnabled": false,
  "geminiEnabled": false,
  "xaiEnabled": false,
  "exaEnabled": false,
  "perplexityEnabled": false,
  "qwenEnabled": false,
  "minimaxEnabled": false,
  "kimiEnabled": false,
} satisfies WorkspaceObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


