# PublicDataSetsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1KnowledgeBasesIdDelete**](PublicDataSetsApi.md#v1knowledgebasesiddelete) | **DELETE** /v1/knowledge_bases/{id} | Delete a data set |
| [**v1KnowledgeBasesIdGet**](PublicDataSetsApi.md#v1knowledgebasesidget) | **GET** /v1/knowledge_bases/{id} | Get a data set |
| [**v1KnowledgeBasesIdPatch**](PublicDataSetsApi.md#v1knowledgebasesidpatchoperation) | **PATCH** /v1/knowledge_bases/{id} | Update a data set |
| [**v1KnowledgeBasesIdSearchPost**](PublicDataSetsApi.md#v1knowledgebasesidsearchpostoperation) | **POST** /v1/knowledge_bases/{id}/search | Search a data set |
| [**v1KnowledgeBasesPost**](PublicDataSetsApi.md#v1knowledgebasespostoperation) | **POST** /v1/knowledge_bases | Create a data set |



## v1KnowledgeBasesIdDelete

> V1KnowledgeBasesIdDelete200Response v1KnowledgeBasesIdDelete(id)

Delete a data set

Marks a data set for deletion and enqueues a background job to clean it up.

### Example

```ts
import {
  Configuration,
  PublicDataSetsApi,
} from '@fetch-hive/sdk';
import type { V1KnowledgeBasesIdDeleteRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicDataSetsApi(config);

  const body = {
    // string | Data set UUID
    id: id_example,
  } satisfies V1KnowledgeBasesIdDeleteRequest;

  try {
    const data = await api.v1KnowledgeBasesIdDelete(body);
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
| **id** | `string` | Data set UUID | [Defaults to `undefined`] |

### Return type

[**V1KnowledgeBasesIdDelete200Response**](V1KnowledgeBasesIdDelete200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | data set marked for deletion |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1KnowledgeBasesIdGet

> V1KnowledgeBasesIdGet200Response v1KnowledgeBasesIdGet(id)

Get a data set

Returns a single active data set belonging to the first workspace.

### Example

```ts
import {
  Configuration,
  PublicDataSetsApi,
} from '@fetch-hive/sdk';
import type { V1KnowledgeBasesIdGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicDataSetsApi(config);

  const body = {
    // string | Data set UUID
    id: id_example,
  } satisfies V1KnowledgeBasesIdGetRequest;

  try {
    const data = await api.v1KnowledgeBasesIdGet(body);
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
| **id** | `string` | Data set UUID | [Defaults to `undefined`] |

### Return type

[**V1KnowledgeBasesIdGet200Response**](V1KnowledgeBasesIdGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | data set returned |  -  |
| **401** | unauthorized |  -  |
| **422** | data set not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1KnowledgeBasesIdPatch

> V1KnowledgeBasesIdPatch200Response v1KnowledgeBasesIdPatch(id, v1KnowledgeBasesIdPatchRequest)

Update a data set

Updates name, description, or search settings of an existing data set.

### Example

```ts
import {
  Configuration,
  PublicDataSetsApi,
} from '@fetch-hive/sdk';
import type { V1KnowledgeBasesIdPatchOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicDataSetsApi(config);

  const body = {
    // string | Data set UUID
    id: id_example,
    // V1KnowledgeBasesIdPatchRequest
    v1KnowledgeBasesIdPatchRequest: ...,
  } satisfies V1KnowledgeBasesIdPatchOperationRequest;

  try {
    const data = await api.v1KnowledgeBasesIdPatch(body);
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
| **id** | `string` | Data set UUID | [Defaults to `undefined`] |
| **v1KnowledgeBasesIdPatchRequest** | [V1KnowledgeBasesIdPatchRequest](V1KnowledgeBasesIdPatchRequest.md) |  | |

### Return type

[**V1KnowledgeBasesIdPatch200Response**](V1KnowledgeBasesIdPatch200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | data set updated |  -  |
| **401** | unauthorized |  -  |
| **422** | data set not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1KnowledgeBasesIdSearchPost

> V1KnowledgeBasesIdSearchPost200Response v1KnowledgeBasesIdSearchPost(id, v1KnowledgeBasesIdSearchPostRequest)

Search a data set

Performs a vector, full-text, or hybrid search against the data set. Returns matching chunks above the configured score threshold. 

### Example

```ts
import {
  Configuration,
  PublicDataSetsApi,
} from '@fetch-hive/sdk';
import type { V1KnowledgeBasesIdSearchPostOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicDataSetsApi(config);

  const body = {
    // string | Data set UUID
    id: id_example,
    // V1KnowledgeBasesIdSearchPostRequest
    v1KnowledgeBasesIdSearchPostRequest: ...,
  } satisfies V1KnowledgeBasesIdSearchPostOperationRequest;

  try {
    const data = await api.v1KnowledgeBasesIdSearchPost(body);
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
| **id** | `string` | Data set UUID | [Defaults to `undefined`] |
| **v1KnowledgeBasesIdSearchPostRequest** | [V1KnowledgeBasesIdSearchPostRequest](V1KnowledgeBasesIdSearchPostRequest.md) |  | |

### Return type

[**V1KnowledgeBasesIdSearchPost200Response**](V1KnowledgeBasesIdSearchPost200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | search results returned |  -  |
| **401** | unauthorized |  -  |
| **422** | invalid search type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1KnowledgeBasesPost

> V1KnowledgeBasesPost200Response v1KnowledgeBasesPost(v1KnowledgeBasesPostRequest)

Create a data set

Creates a new data set in the first workspace of the account.

### Example

```ts
import {
  Configuration,
  PublicDataSetsApi,
} from '@fetch-hive/sdk';
import type { V1KnowledgeBasesPostOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicDataSetsApi(config);

  const body = {
    // V1KnowledgeBasesPostRequest
    v1KnowledgeBasesPostRequest: ...,
  } satisfies V1KnowledgeBasesPostOperationRequest;

  try {
    const data = await api.v1KnowledgeBasesPost(body);
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
| **v1KnowledgeBasesPostRequest** | [V1KnowledgeBasesPostRequest](V1KnowledgeBasesPostRequest.md) |  | |

### Return type

[**V1KnowledgeBasesPost200Response**](V1KnowledgeBasesPost200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | data set created |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

