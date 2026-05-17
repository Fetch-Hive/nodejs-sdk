# SERPBingApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1SerpBingLanguagesGet**](SERPBingApi.md#v1serpbinglanguagesget) | **GET** /v1/serp/bing/languages | List Bing SERP languages |
| [**v1SerpBingLocationsGet**](SERPBingApi.md#v1serpbinglocationsget) | **GET** /v1/serp/bing/locations | List Bing SERP locations |



## v1SerpBingLanguagesGet

> Array&lt;object&gt; v1SerpBingLanguagesGet()

List Bing SERP languages

Returns all available language codes for Bing SERP queries.

### Example

```ts
import {
  Configuration,
  SERPBingApi,
} from '@fetch-hive/sdk';
import type { V1SerpBingLanguagesGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SERPBingApi(config);

  try {
    const data = await api.v1SerpBingLanguagesGet();
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


## v1SerpBingLocationsGet

> Array&lt;object&gt; v1SerpBingLocationsGet()

List Bing SERP locations

Returns all available geographic targeting locations for Bing SERP queries.

### Example

```ts
import {
  Configuration,
  SERPBingApi,
} from '@fetch-hive/sdk';
import type { V1SerpBingLocationsGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SERPBingApi(config);

  try {
    const data = await api.v1SerpBingLocationsGet();
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

