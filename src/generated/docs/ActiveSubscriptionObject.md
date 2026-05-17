
# ActiveSubscriptionObject


## Properties

Name | Type
------------ | -------------
`id` | string
`totalCreditsUsed` | number
`creditCap` | number
`topupCreditBalance` | number
`totalAvailableCredits` | number
`creditsUsedPercentage` | number
`trialDaysRemaining` | number
`nextRebillAt` | Date
`pendingCancelledAt` | Date
`trialEndAt` | Date
`status` | string
`subscriptionType` | string
`hasActiveTrial` | boolean
`hasPendingCancellation` | boolean
`hasDowngradeScheduled` | boolean
`downgradeScheduledAt` | Date
`plan` | [PlanObject](PlanObject.md)
`downgradePlan` | [PlanObject](PlanObject.md)
`hostedLlmCredits` | [ActiveSubscriptionObjectHostedLlmCredits](ActiveSubscriptionObjectHostedLlmCredits.md)

## Example

```typescript
import type { ActiveSubscriptionObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "totalCreditsUsed": 0,
  "creditCap": 1000,
  "topupCreditBalance": 0,
  "totalAvailableCredits": 1000,
  "creditsUsedPercentage": 0,
  "trialDaysRemaining": 14,
  "nextRebillAt": null,
  "pendingCancelledAt": null,
  "trialEndAt": null,
  "status": active,
  "subscriptionType": recurring,
  "hasActiveTrial": false,
  "hasPendingCancellation": false,
  "hasDowngradeScheduled": false,
  "downgradeScheduledAt": null,
  "plan": null,
  "downgradePlan": null,
  "hostedLlmCredits": null,
} satisfies ActiveSubscriptionObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActiveSubscriptionObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


