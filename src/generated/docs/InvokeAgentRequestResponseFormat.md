
# InvokeAgentRequestResponseFormat

Per-call output format. Omit it, or send `{ \"type\": \"text\" }`, for text. `{ \"type\": \"json_schema\", \"json_schema\": { \"name\", \"schema\", \"strict\" } }` returns JSON that matches the schema. The schema root must be an object and the document must be at most 100000 bytes. The schema applies to the final answer; tool calls still run. A model that does not support JSON Schema returns `422 json_schema_unsupported`. An invalid schema returns `422 json_schema_invalid`. If the answer still does not match after one repair, the call returns `422 json_schema_output_invalid`. `is_json_schema_response_format` plus `json_schema` is the older shape. `response_format` wins when both are present. 

## Properties

Name | Type
------------ | -------------
`type` | string
`jsonSchema` | [InvokeAgentRequestResponseFormatJsonSchema](InvokeAgentRequestResponseFormatJsonSchema.md)

## Example

```typescript
import type { InvokeAgentRequestResponseFormat } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "jsonSchema": null,
} satisfies InvokeAgentRequestResponseFormat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvokeAgentRequestResponseFormat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


