
# AccountObjectWelcomeBonus

One-time hosted LLM credit bonus. $2 for Developer (free) plan, $5 for any paid plan. Granted on first subscription activation. (value may be null)

## Properties

Name | Type
------------ | -------------
`amountUsd` | number
`granted` | boolean
`grantedAt` | Date

## Example

```typescript
import type { AccountObjectWelcomeBonus } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "amountUsd": 5,
  "granted": false,
  "grantedAt": null,
} satisfies AccountObjectWelcomeBonus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountObjectWelcomeBonus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


