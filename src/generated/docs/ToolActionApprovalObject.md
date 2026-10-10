
# ToolActionApprovalObject


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`decision` | string
`summary` | string
`providerType` | string
`actionSlug` | string
`actionLabel` | string
`confirmation` | string
`approvalsRequired` | number
`approvalVotes` | [Array&lt;ToolActionApprovalObjectApprovalVotesInner&gt;](ToolActionApprovalObjectApprovalVotesInner.md)
`providerLogin` | string
`gatewayName` | string
`tokenName` | string
`arguments` | object
`result` | object
`error` | string
`riskLevel` | string
`requestedByKind` | string
`requestedBy` | [ToolActionApprovalObjectRequestedBy](ToolActionApprovalObjectRequestedBy.md)
`promptWorkflowRunId` | string
`agentRunId` | string
`ephemeralExecutionId` | string
`copilotSessionId` | string
`integrationConnectionCount` | number
`createdAt` | Date
`expiresAt` | Date
`decidedAt` | Date
`decidedBy` | string
`decidedVia` | string
`decidedByApiKeyName` | string
`decidedByUser` | [ToolActionApprovalObjectDecidedByUser](ToolActionApprovalObjectDecidedByUser.md)
`autoAllowedBy` | string
`autoAllowedSourceId` | string
`autoAllowedSourceName` | string
`workspaceId` | string
`originalArguments` | object
`argumentsEditedAt` | Date
`argumentsEditedBy` | [ToolActionApprovalObjectArgumentsEditedBy](ToolActionApprovalObjectArgumentsEditedBy.md)
`changedFields` | Array&lt;string&gt;
`resolvedPolicyId` | string
`resolvedPolicyUser` | [ToolActionApprovalObjectArgumentsEditedBy](ToolActionApprovalObjectArgumentsEditedBy.md)
`lockedRuleEffect` | string
`audienceRole` | string
`integrationAuthorizationId` | string
`batchKey` | string
`batchPendingCount` | number
`batchItems` | [Array&lt;ToolActionApprovalObjectBatchItemsInner&gt;](ToolActionApprovalObjectBatchItemsInner.md)
`capabilities` | [ToolActionApprovalObjectCapabilities](ToolActionApprovalObjectCapabilities.md)

## Example

```typescript
import type { ToolActionApprovalObject } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "decision": null,
  "summary": null,
  "providerType": null,
  "actionSlug": null,
  "actionLabel": null,
  "confirmation": null,
  "approvalsRequired": null,
  "approvalVotes": null,
  "providerLogin": null,
  "gatewayName": null,
  "tokenName": null,
  "arguments": null,
  "result": null,
  "error": null,
  "riskLevel": null,
  "requestedByKind": null,
  "requestedBy": null,
  "promptWorkflowRunId": null,
  "agentRunId": null,
  "ephemeralExecutionId": null,
  "copilotSessionId": null,
  "integrationConnectionCount": null,
  "createdAt": null,
  "expiresAt": null,
  "decidedAt": null,
  "decidedBy": null,
  "decidedVia": null,
  "decidedByApiKeyName": null,
  "decidedByUser": null,
  "autoAllowedBy": null,
  "autoAllowedSourceId": null,
  "autoAllowedSourceName": null,
  "workspaceId": null,
  "originalArguments": null,
  "argumentsEditedAt": null,
  "argumentsEditedBy": null,
  "changedFields": null,
  "resolvedPolicyId": null,
  "resolvedPolicyUser": null,
  "lockedRuleEffect": null,
  "audienceRole": null,
  "integrationAuthorizationId": null,
  "batchKey": null,
  "batchPendingCount": null,
  "batchItems": null,
  "capabilities": null,
} satisfies ToolActionApprovalObject

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ToolActionApprovalObject
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


