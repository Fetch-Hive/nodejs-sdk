
# AgentInvokeAsyncConfig

Controls background workflow tools for this invoke. Defaults: `allow_background` is true when `thread_id` is present, or when `callback_url` is set; otherwise it is false so existing stateless integrators keep synchronous behaviour. 

## Properties

Name | Type
------------ | -------------
`callbackUrl` | string
`allowBackground` | boolean

## Example

```typescript
import type { AgentInvokeAsyncConfig } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "callbackUrl": https://example.com/agent-callback,
  "allowBackground": null,
} satisfies AgentInvokeAsyncConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentInvokeAsyncConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


