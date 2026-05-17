
# AgentMessage


## Properties

Name | Type
------------ | -------------
`role` | string
`content` | string
`imageUrls` | Array&lt;string&gt;

## Example

```typescript
import type { AgentMessage } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "role": null,
  "content": null,
  "imageUrls": null,
} satisfies AgentMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


