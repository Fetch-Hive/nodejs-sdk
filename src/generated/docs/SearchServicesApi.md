# SearchServicesApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicSearchServicesCountriesGet**](SearchServicesApi.md#publicsearchservicescountriesget) | **GET** /public/search_services/countries | List public search-service country catalogs |
| [**publicSearchServicesServiceCountriesGet**](SearchServicesApi.md#publicsearchservicesservicecountriesget) | **GET** /public/search_services/{service}/countries | Retrieve public search-service country catalog |



## publicSearchServicesCountriesGet

> PublicSearchServicesCountriesGet200Response publicSearchServicesCountriesGet()

List public search-service country catalogs

Returns the country catalogs used by public search workflow services. This endpoint is unauthenticated and exposes the value each service expects for location/country configuration. 

### Example

```ts
import {
  Configuration,
  SearchServicesApi,
} from '@fetch-hive/sdk';
import type { PublicSearchServicesCountriesGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const api = new SearchServicesApi();

  try {
    const data = await api.publicSearchServicesCountriesGet();
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

[**PublicSearchServicesCountriesGet200Response**](PublicSearchServicesCountriesGet200Response.md)

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


## publicSearchServicesServiceCountriesGet

> PublicSearchServicesCountriesGet200ResponseServicesInner publicSearchServicesServiceCountriesGet(service)

Retrieve public search-service country catalog

Returns the country catalog for one supported search workflow service. Use each country object\&#39;s &#x60;value&#x60; field when configuring that service. 

### Example

```ts
import {
  Configuration,
  SearchServicesApi,
} from '@fetch-hive/sdk';
import type { PublicSearchServicesServiceCountriesGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const api = new SearchServicesApi();

  const body = {
    // 'google_search' | 'google_news' | 'google_ai_mode' | 'google_ai_overview' | 'bing_search' | Search workflow service key.
    service: service_example,
  } satisfies PublicSearchServicesServiceCountriesGetRequest;

  try {
    const data = await api.publicSearchServicesServiceCountriesGet(body);
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

[**PublicSearchServicesCountriesGet200ResponseServicesInner**](PublicSearchServicesCountriesGet200ResponseServicesInner.md)

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

