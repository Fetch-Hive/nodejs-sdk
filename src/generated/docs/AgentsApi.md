# AgentsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invokeAgent**](AgentsApi.md#invokeagentoperation) | **POST** /agent/invoke | Invoke an agent |



## invokeAgent

> InvokeAgentResponse invokeAgent(invokeAgentRequest)

Invoke an agent

Sends a message to a configured agent and returns its response. Agents can use tools, maintain conversation history via &#x60;thread_id&#x60;, or accept ephemeral history via the &#x60;messages&#x60; field.  Set &#x60;streaming: true&#x60; to receive a Server-Sent Events stream. Each &#x60;data:&#x60; line contains a JSON object of type &#x60;SseChunk&#x60;.  Image URLs can be supplied in &#x60;image_urls&#x60; for multimodal inputs (must be HTTPS). 

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { InvokeAgentOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // InvokeAgentRequest
    invokeAgentRequest: ...,
  } satisfies InvokeAgentOperationRequest;

  try {
    const data = await api.invokeAgent(body);
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
| **invokeAgentRequest** | [InvokeAgentRequest](InvokeAgentRequest.md) |  | |

### Return type

[**InvokeAgentResponse**](InvokeAgentResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent response. When &#x60;streaming&#x60; is &#x60;false&#x60; this is a single JSON object. When &#x60;streaming&#x60; is &#x60;true&#x60; the response is a &#x60;text/event-stream&#x60; where each &#x60;data:&#x60; line contains an &#x60;SseChunk&#x60;.  |  -  |
| **400** | Invalid request body or parameters. |  -  |
| **401** | Missing or invalid API token. |  -  |
| **500** | Unexpected server-side error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

