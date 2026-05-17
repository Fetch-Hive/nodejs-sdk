# PromptsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invokePrompt**](PromptsApi.md#invokepromptoperation) | **POST** /invoke | Invoke a prompt deployment |



## invokePrompt

> InvokePromptResponse invokePrompt(invokePromptRequest)

Invoke a prompt deployment

Runs a configured prompt deployment and returns the model response. Set &#x60;streaming: true&#x60; to receive a Server-Sent Events stream instead of a single JSON object. 

### Example

```ts
import {
  Configuration,
  PromptsApi,
} from '@fetch-hive/sdk';
import type { InvokePromptOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PromptsApi(config);

  const body = {
    // InvokePromptRequest
    invokePromptRequest: ...,
  } satisfies InvokePromptOperationRequest;

  try {
    const data = await api.invokePrompt(body);
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
| **invokePromptRequest** | [InvokePromptRequest](InvokePromptRequest.md) |  | |

### Return type

[**InvokePromptResponse**](InvokePromptResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response. When &#x60;streaming&#x60; is &#x60;false&#x60; (default) this is a single JSON object. When &#x60;streaming&#x60; is &#x60;true&#x60; the response is a &#x60;text/event-stream&#x60; where each &#x60;data:&#x60; line contains a JSON object of type &#x60;SseChunk&#x60;.  |  -  |
| **400** | Invalid request body or parameters. |  -  |
| **401** | Missing or invalid API token. |  -  |
| **500** | Unexpected server-side error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

