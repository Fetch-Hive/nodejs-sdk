# ModelsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicModelsGet**](ModelsApi.md#publicmodelsget) | **GET** /public/models | List active models |



## publicModelsGet

> Array&lt;PublicModelsGet200ResponseInner&gt; publicModelsGet()

List active models

Returns all active (non-deprecated) LLM and image-generation models available in Fetch Hive as a flat array. Excludes embedding-only models.  &#x60;provider&#x60; identifies the underlying model maker (e.g. &#x60;openai&#x60;, &#x60;anthropic&#x60;, &#x60;minimaxai&#x60;).  &#x60;model_type&#x60; is &#x60;\&quot;llm\&quot;&#x60; for chat/text models and &#x60;\&quot;image_generation\&quot;&#x60; for models that generate images. &#x60;is_vision&#x60; means a model accepts image input; &#x60;is_image_generation&#x60; means a model generates images.  &#x60;is_reasoning&#x60; is &#x60;true&#x60; when the model supports reasoning capabilities. 

### Example

```ts
import {
  Configuration,
  ModelsApi,
} from '@fetch-hive/sdk';
import type { PublicModelsGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ModelsApi(config);

  try {
    const data = await api.publicModelsGet();
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

[**Array&lt;PublicModelsGet200ResponseInner&gt;**](PublicModelsGet200ResponseInner.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | models returned |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

