
# AccountObject


## Properties

Name | Type
------------ | -------------
`id` | string
`dateFormat` | string
`timezone` | string
`subscribed` | boolean
`subscriptionStatus` | string
`onboarded` | boolean
`onboardedAt` | Date
`marketingAttribution` | string
`usagePurpose` | string
`role` | string
`feedbackMessage` | string
`markedDeletionAt` | Date
`apiKey` | string
`accountStepsCompleted` | number
`accountStepPercentage` | number
`isAppAccessEnabled` | boolean
`isAppAccessDisabled` | boolean
`isTrialPlanEnabled` | boolean
`isTrialPlanDisabled` | boolean
`hasCappedMembers` | boolean
`hasPrompts` | boolean
`hasMembers` | boolean
`hasSubmittedFeedback` | boolean
`hasDiscordUsername` | boolean
`isMarkedForDeletion` | boolean
`activeSubscription` | [ActiveSubscriptionObject](ActiveSubscriptionObject.md)
`planLimits` | [PlanLimitsObject](PlanLimitsObject.md)
`storage` | [StorageObject](StorageObject.md)
`welcomeBonus` | [AccountObjectWelcomeBonus](AccountObjectWelcomeBonus.md)

## Example

```typescript
import type { AccountObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "dateFormat": MM/DD/YYYY,
  "timezone": UTC,
  "subscribed": false,
  "subscriptionStatus": active,
  "onboarded": false,
  "onboardedAt": null,
  "marketingAttribution": null,
  "usagePurpose": null,
  "role": null,
  "feedbackMessage": null,
  "markedDeletionAt": null,
  "apiKey": null,
  "accountStepsCompleted": 0,
  "accountStepPercentage": 0,
  "isAppAccessEnabled": false,
  "isAppAccessDisabled": true,
  "isTrialPlanEnabled": true,
  "isTrialPlanDisabled": false,
  "hasCappedMembers": false,
  "hasPrompts": false,
  "hasMembers": false,
  "hasSubmittedFeedback": false,
  "hasDiscordUsername": false,
  "isMarkedForDeletion": false,
  "activeSubscription": null,
  "planLimits": null,
  "storage": null,
  "welcomeBonus": null,
} satisfies AccountObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


