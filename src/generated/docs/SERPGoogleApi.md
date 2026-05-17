# SERPGoogleApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1SerpGoogleLanguagesGet**](SERPGoogleApi.md#v1serpgooglelanguagesget) | **GET** /v1/serp/google/languages | List Google SERP languages |
| [**v1SerpGoogleLocationsGet**](SERPGoogleApi.md#v1serpgooglelocationsget) | **GET** /v1/serp/google/locations | List Google SERP locations |



## v1SerpGoogleLanguagesGet

> Array&lt;object&gt; v1SerpGoogleLanguagesGet()

List Google SERP languages

Returns all available language codes for Google SERP queries.

### Example

```ts
import {
  Configuration,
  SERPGoogleApi,
} from '@fetch-hive/sdk';
import type { V1SerpGoogleLanguagesGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SERPGoogleApi(config);

  try {
    const data = await api.v1SerpGoogleLanguagesGet();
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

**Array<object>**

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | languages returned |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SerpGoogleLocationsGet

> Array&lt;object&gt; v1SerpGoogleLocationsGet()

List Google SERP locations

Returns all available geographic targeting locations for Google SERP queries.

### Example

```ts
import {
  Configuration,
  SERPGoogleApi,
} from '@fetch-hive/sdk';
import type { V1SerpGoogleLocationsGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SERPGoogleApi(config);

  try {
    const data = await api.v1SerpGoogleLocationsGet();
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

**Array<object>**

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | locations returned |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

