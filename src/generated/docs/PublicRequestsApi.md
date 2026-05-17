# PublicRequestsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1RequestsIdGet**](PublicRequestsApi.md#v1requestsidget) | **GET** /v1/requests/{id} | Get a request |



## v1RequestsIdGet

> V1RequestsIdGet200Response v1RequestsIdGet(id)

Get a request

Returns a request record including its status, type, and timing metadata. The &#x60;id&#x60; must be a valid &#x60;request_id&#x60; in &#x60;req_[32 hex chars]&#x60; format. 

### Example

```ts
import {
  Configuration,
  PublicRequestsApi,
} from '@fetch-hive/sdk';
import type { V1RequestsIdGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicRequestsApi(config);

  const body = {
    // string | Request ID (format: req_[32 hex chars])
    id: id_example,
  } satisfies V1RequestsIdGetRequest;

  try {
    const data = await api.v1RequestsIdGet(body);
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
| **id** | `string` | Request ID (format: req_[32 hex chars]) | [Defaults to `undefined`] |

### Return type

[**V1RequestsIdGet200Response**](V1RequestsIdGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | request returned |  -  |
| **401** | unauthorized |  -  |
| **404** | request not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

