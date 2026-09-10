
# InvokeHiveAgentRequest


## Properties

Name | Type
------------ | -------------
`hiveAgent` | string
`objective` | string
`unattended` | boolean
`budgetPolicy` | string
`sources` | [HiveAgentSources](HiveAgentSources.md)
`metadata` | [{ [key: string]: MetadataValue; }](MetadataValue.md)
`async` | [HiveAgentAsyncConfig](HiveAgentAsyncConfig.md)

## Example

```typescript
import type { InvokeHiveAgentRequest } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "hiveAgent": agent_task_uuid,
  "objective": Research competitors and summarize verified findings,
  "unattended": true,
  "budgetPolicy": stop,
  "sources": null,
  "metadata": {"customer_id":"cus_123","plan":"enterprise","trial":false,"invoice_count":12,"region":null},
  "async": null,
} satisfies InvokeHiveAgentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeHiveAgentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


