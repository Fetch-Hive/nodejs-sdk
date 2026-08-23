# HiveAgentsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invokeHiveAgent**](HiveAgentsApi.md#invokehiveagentoperation) | **POST** /hive-agent/invoke | Invoke a Hive Agent |



## invokeHiveAgent

> InvokeHiveAgentResponse invokeHiveAgent(invokeHiveAgentRequest)

Invoke a Hive Agent

Starts a Hive Agent run asynchronously and returns identifiers immediately. Hive Agent invocation does not stream and does not wait for the final answer in the HTTP response. A signed callback is sent to &#x60;async.callback_url&#x60; when the run completes, fails, or is cancelled.  &#x60;async.enabled&#x60; must be &#x60;true&#x60; and &#x60;async.callback_url&#x60; is required. 

### Example

```ts
import {
  Configuration,
  HiveAgentsApi,
} from '@fetch-hive/sdk';
import type { InvokeHiveAgentOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new HiveAgentsApi(config);

  const body = {
    // InvokeHiveAgentRequest
    invokeHiveAgentRequest: ...,
  } satisfies InvokeHiveAgentOperationRequest;

  try {
    const data = await api.invokeHiveAgent(body);
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
| **invokeHiveAgentRequest** | [InvokeHiveAgentRequest](InvokeHiveAgentRequest.md) |  | |

### Return type

[**InvokeHiveAgentResponse**](InvokeHiveAgentResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Hive Agent run queued for execution. |  -  |
| **400** | Invalid request body or parameters. |  -  |
| **401** | Missing or invalid API token. |  -  |
| **500** | Unexpected server-side error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

