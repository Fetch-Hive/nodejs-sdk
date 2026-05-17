
# ActiveSubscriptionObjectHostedLlmCredits


## Properties

Name | Type
------------ | -------------
`balanceUsd` | number
`totalPurchasedUsd` | number
`totalUsedUsd` | number
`enabled` | boolean

## Example

```typescript
import type { ActiveSubscriptionObjectHostedLlmCredits } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "balanceUsd": 26.95,
  "totalPurchasedUsd": 30,
  "totalUsedUsd": 3.05,
  "enabled": false,
} satisfies ActiveSubscriptionObjectHostedLlmCredits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActiveSubscriptionObjectHostedLlmCredits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


