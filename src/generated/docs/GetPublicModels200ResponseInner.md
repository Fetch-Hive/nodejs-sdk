
# GetPublicModels200ResponseInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`provider` | string
`providerName` | string
`contextLimit` | number
`modelType` | string
`isImageGeneration` | boolean
`isVision` | boolean
`isReasoning` | boolean
`isToolCalling` | boolean
`isJsonSchema` | boolean

## Example

```typescript
import type { GetPublicModels200ResponseInner } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": gpt-4.1,
  "name": GPT 4.1,
  "slug": gpt-4-1,
  "provider": openai,
  "providerName": OpenAI,
  "contextLimit": 1047576,
  "modelType": llm,
  "isImageGeneration": false,
  "isVision": true,
  "isReasoning": false,
  "isToolCalling": true,
  "isJsonSchema": true,
} satisfies GetPublicModels200ResponseInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetPublicModels200ResponseInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


