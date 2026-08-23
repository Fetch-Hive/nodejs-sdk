
# PublicSearchServicesServiceCountriesGet404Response


## Properties

Name | Type
------------ | -------------
`error` | string
`supportedServices` | Array&lt;string&gt;

## Example

```typescript
import type { PublicSearchServicesServiceCountriesGet404Response } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "error": unsupported_service,
  "supportedServices": ["google_search","google_news","google_ai_mode","google_ai_overview","bing_search"],
} satisfies PublicSearchServicesServiceCountriesGet404Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicSearchServicesServiceCountriesGet404Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


