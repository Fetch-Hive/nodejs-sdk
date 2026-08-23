
# PublicRequestsIdGet200Response


## Properties

Name | Type
------------ | -------------
`id` | string
`requestId` | string
`status` | string
`requestType` | string
`requestableType` | string
`requestableId` | string
`message` | string
`generatedAt` | Date
`startedAt` | Date
`endedAt` | Date
`metadata` | { [key: string]: any; }
`userMetadata` | { [key: string]: any; }
`data` | { [key: string]: any; }

## Example

```typescript
import type { PublicRequestsIdGet200Response } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "requestId": req_019b1ad1193763f2367afc4cda5ab9df,
  "status": completed,
  "requestType": prompt_completion,
  "requestableType": Completion,
  "requestableId": null,
  "message": null,
  "generatedAt": null,
  "startedAt": null,
  "endedAt": null,
  "metadata": null,
  "userMetadata": null,
  "data": null,
} satisfies PublicRequestsIdGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicRequestsIdGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


