
# V1AgentsPostRequestAgent


## Properties

Name | Type
------------ | -------------
`name` | string
`llmModel` | string
`modelType` | string
`description` | string
`instructionPrompt` | string
`temperature` | number
`maxToken` | string

## Example

```typescript
import type { V1AgentsPostRequestAgent } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": My Agent,
  "llmModel": gpt-4.1-mini,
  "modelType": hosted,
  "description": A helpful assistant,
  "instructionPrompt": You are a helpful assistant,
  "temperature": 0.7,
  "maxToken": null,
} satisfies V1AgentsPostRequestAgent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1AgentsPostRequestAgent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


