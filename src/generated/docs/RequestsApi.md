# RequestsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPublicRequests**](RequestsApi.md#getpublicrequests) | **GET** /public/requests/{id} | Get a request |



## getPublicRequests

> GetPublicRequests200Response getPublicRequests(id)

Get a request

Returns the status, type, and timing metadata for a run.  Pass the &#x60;request_id&#x60; returned when you invoked a prompt, workflow, agent, or Hive Agent. 

### Example

```ts
import {
  Configuration,
  RequestsApi,
} from '@fetch-hive/sdk';
import type { GetPublicRequestsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RequestsApi(config);

  const body = {
    // string | Request ID from a Fetch Hive API response (for example, `req_019b1ad1193763f2367afc4cda5ab9df`).
    id: id_example,
  } satisfies GetPublicRequestsRequest;

  try {
    const data = await api.getPublicRequests(body);
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
| **id** | `string` | Request ID from a Fetch Hive API response (for example, &#x60;req_019b1ad1193763f2367afc4cda5ab9df&#x60;). | [Defaults to `undefined`] |

### Return type

[**GetPublicRequests200Response**](GetPublicRequests200Response.md)

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

