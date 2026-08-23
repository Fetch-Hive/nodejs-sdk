
# PublicWorkspacesWorkspaceIdAgentsIdPatchRequestAgent


## Properties

Name | Type
------------ | -------------
`name` | string
`llmModel` | string
`modelType` | string
`description` | string
`instructionPrompt` | string
`temperature` | number
`maxToken` | number
`maxThinkingToken` | number
`anthropicPromptCacheTtl` | string
`reasoningEffort` | string
`toolChoice` | string
`maxToolCalls` | number

## Example

```typescript
import type { PublicWorkspacesWorkspaceIdAgentsIdPatchRequestAgent } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Updated Agent,
  "llmModel": gpt-4.1-mini,
  "modelType": hosted,
  "description": A helpful assistant,
  "instructionPrompt": You are a helpful assistant,
  "temperature": 0.7,
  "maxToken": 1000,
  "maxThinkingToken": 1024,
  "anthropicPromptCacheTtl": null,
  "reasoningEffort": null,
  "toolChoice": null,
  "maxToolCalls": 0,
} satisfies PublicWorkspacesWorkspaceIdAgentsIdPatchRequestAgent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicWorkspacesWorkspaceIdAgentsIdPatchRequestAgent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


