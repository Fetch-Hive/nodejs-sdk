# GlobalApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1GlobalEmbeddingsPost**](GlobalApi.md#v1globalembeddingspostoperation) | **POST** /v1/global/embeddings | Generate a text embedding |



## v1GlobalEmbeddingsPost

> V1GlobalEmbeddingsPost200Response v1GlobalEmbeddingsPost(v1GlobalEmbeddingsPostRequest)

Generate a text embedding

Generates a vector embedding for the provided text using OpenAI\&#39;s embeddings API. Authenticated via a shared global API key passed as a Bearer  or X-API-Key header. Intended for internal service-to-service use (e.g. Rust API calling Rails). 

### Example

```ts
import {
  Configuration,
  GlobalApi,
} from '@fetch-hive/sdk';
import type { V1GlobalEmbeddingsPostOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: global_api_key
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new GlobalApi(config);

  const body = {
    // V1GlobalEmbeddingsPostRequest (optional)
    v1GlobalEmbeddingsPostRequest: ...,
  } satisfies V1GlobalEmbeddingsPostOperationRequest;

  try {
    const data = await api.v1GlobalEmbeddingsPost(body);
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
| **v1GlobalEmbeddingsPostRequest** | [V1GlobalEmbeddingsPostRequest](V1GlobalEmbeddingsPostRequest.md) |  | [Optional] |

### Return type

[**V1GlobalEmbeddingsPost200Response**](V1GlobalEmbeddingsPost200Response.md)

### Authorization

[global_api_key](../README.md#global_api_key)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | embedding generated |  -  |
| **401** | invalid or missing API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

