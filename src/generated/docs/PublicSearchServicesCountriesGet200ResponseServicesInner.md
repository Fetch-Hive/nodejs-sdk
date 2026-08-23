
# PublicSearchServicesCountriesGet200ResponseServicesInner


## Properties

Name | Type
------------ | -------------
`service` | string
`name` | string
`countryValueField` | string
`countryValueFormat` | string
`countries` | [Array&lt;PublicSearchServicesCountriesGet200ResponseServicesInnerCountriesInner&gt;](PublicSearchServicesCountriesGet200ResponseServicesInnerCountriesInner.md)

## Example

```typescript
import type { PublicSearchServicesCountriesGet200ResponseServicesInner } from '@fetch-hive/sdk'

// TODO: Update the object below with actual values
const example = {
  "service": google_ai_overview,
  "name": Google AI Overview,
  "countryValueField": google_location_name,
  "countryValueFormat": null,
  "countries": null,
} satisfies PublicSearchServicesCountriesGet200ResponseServicesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PublicSearchServicesCountriesGet200ResponseServicesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


