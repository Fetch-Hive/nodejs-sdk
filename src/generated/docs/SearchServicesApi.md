# SearchServicesApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPublicSearchServicesCountries**](SearchServicesApi.md#getpublicsearchservicescountries) | **GET** /public/search_services/countries | List public search-service country catalogs |
| [**getPublicSearchServicesCountries2**](SearchServicesApi.md#getpublicsearchservicescountries2) | **GET** /public/search_services/{service}/countries | Retrieve public search-service country catalog |



## getPublicSearchServicesCountries

> GetPublicSearchServicesCountries200Response getPublicSearchServicesCountries()

List public search-service country catalogs

Returns the country catalogs used by public search workflow services. This endpoint is unauthenticated and exposes the value each service expects for location/country configuration. 

### Example

```ts
import {
  Configuration,
  SearchServicesApi,
} from '@fetch-hive/sdk';
import type { GetPublicSearchServicesCountriesRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const api = new SearchServicesApi();

  try {
    const data = await api.getPublicSearchServicesCountries();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetPublicSearchServicesCountries200Response**](GetPublicSearchServicesCountries200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | country catalogs returned |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicSearchServicesCountries2

> GetPublicSearchServicesCountries200ResponseServicesInner getPublicSearchServicesCountries2(service)

Retrieve public search-service country catalog

Returns the country catalog for one supported search workflow service. Use each country object\&#39;s &#x60;value&#x60; field when configuring that service. 

### Example

```ts
import {
  Configuration,
  SearchServicesApi,
} from '@fetch-hive/sdk';
import type { GetPublicSearchServicesCountries2Request } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const api = new SearchServicesApi();

  const body = {
    // 'google_search' | 'google_news' | 'google_ai_mode' | 'google_ai_overview' | 'bing_search' | Search workflow service key.
    service: service_example,
  } satisfies GetPublicSearchServicesCountries2Request;

  try {
    const data = await api.getPublicSearchServicesCountries2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **service** | `google_search`, `google_news`, `google_ai_mode`, `google_ai_overview`, `bing_search` | Search workflow service key. | [Defaults to `undefined`] [Enum: google_search, google_news, google_ai_mode, google_ai_overview, bing_search] |

### Return type

[**GetPublicSearchServicesCountries200ResponseServicesInner**](GetPublicSearchServicesCountries200ResponseServicesInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bing Search country catalog returned |  -  |
| **404** | unsupported service |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

