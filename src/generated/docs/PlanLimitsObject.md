
# PlanLimitsObject

Per-plan caps (nil means unlimited). Read from account.effective_plan.

## Properties

Name | Type
------------ | -------------
`maxWorkflowSteps` | number
`maxIterationLimit` | number
`maxLogRangeDays` | number
`workspaceLimit` | number
`workspaceCount` | number
`workspaceLimitReached` | boolean

## Example

```typescript
import type { PlanLimitsObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "maxWorkflowSteps": 5,
  "maxIterationLimit": 10,
  "maxLogRangeDays": 7,
  "workspaceLimit": 5,
  "workspaceCount": 2,
  "workspaceLimitReached": false,
} satisfies PlanLimitsObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanLimitsObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


