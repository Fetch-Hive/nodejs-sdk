
# PlanObject


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`amount` | number
`interval` | string
`creditCap` | number
`concurrencyCap` | number
`planType` | string
`isDeveloper` | boolean
`isGrowth` | boolean
`isPro` | boolean
`isEnterprise` | boolean
`isContactSales` | boolean
`stripePlanId` | string
`maxWorkflowSteps` | number
`maxIterationLimit` | number
`maxLogRangeDays` | number
`storageLimitBytes` | number
`rateLimitPerDay` | number
`planFeatures` | object

## Example

```typescript
import type { PlanObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": Pro,
  "description": null,
  "amount": 79,
  "interval": monthly,
  "creditCap": 100000,
  "concurrencyCap": 5,
  "planType": pro,
  "isDeveloper": false,
  "isGrowth": false,
  "isPro": true,
  "isEnterprise": false,
  "isContactSales": false,
  "stripePlanId": null,
  "maxWorkflowSteps": 20,
  "maxIterationLimit": 50,
  "maxLogRangeDays": 90,
  "storageLimitBytes": 5368709120,
  "rateLimitPerDay": 5000,
  "planFeatures": {"highlights":["100,000 tasks/month"]},
} satisfies PlanObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


