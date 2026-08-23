# KnowledgeBaseItemsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePublicWorkspacesKnowledgeBasesItems**](KnowledgeBaseItemsApi.md#deletepublicworkspacesknowledgebasesitems) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Delete a knowledge base item |
| [**getPublicWorkspacesKnowledgeBasesItems**](KnowledgeBaseItemsApi.md#getpublicworkspacesknowledgebasesitems) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | List public workspace knowledge base items |
| [**getPublicWorkspacesKnowledgeBasesItems2**](KnowledgeBaseItemsApi.md#getpublicworkspacesknowledgebasesitems2) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Get a knowledge base item |
| [**patchPublicWorkspacesKnowledgeBasesItems**](KnowledgeBaseItemsApi.md#patchpublicworkspacesknowledgebasesitemsoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Update a knowledge base item |
| [**postPublicWorkspacesKnowledgeBasesItems**](KnowledgeBaseItemsApi.md#postpublicworkspacesknowledgebasesitemsoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | Create a knowledge base item |
| [**postPublicWorkspacesKnowledgeBasesItemsRegenerate**](KnowledgeBaseItemsApi.md#postpublicworkspacesknowledgebasesitemsregenerate) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id}/regenerate | Regenerate a knowledge base item |



## deletePublicWorkspacesKnowledgeBasesItems

> DeletePublicWorkspacesKnowledgeBasesItems200Response deletePublicWorkspacesKnowledgeBasesItems(workspaceId, knowledgeBaseId, id)

Delete a knowledge base item

Destroys a knowledge base item in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { DeletePublicWorkspacesKnowledgeBasesItemsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBaseItemsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    knowledgeBaseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base item UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeletePublicWorkspacesKnowledgeBasesItemsRequest;

  try {
    const data = await api.deletePublicWorkspacesKnowledgeBasesItems(body);
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
| **workspaceId** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **knowledgeBaseId** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **id** | `string` | Knowledge base item UUID | [Defaults to `undefined`] |

### Return type

[**DeletePublicWorkspacesKnowledgeBasesItems200Response**](DeletePublicWorkspacesKnowledgeBasesItems200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | item deleted |  -  |
| **401** | unauthorized |  -  |
| **422** | item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesKnowledgeBasesItems

> GetPublicWorkspacesKnowledgeBasesItems200Response getPublicWorkspacesKnowledgeBasesItems(workspaceId, knowledgeBaseId)

List public workspace knowledge base items

Returns items for a knowledge base in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesKnowledgeBasesItemsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBaseItemsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    knowledgeBaseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesKnowledgeBasesItemsRequest;

  try {
    const data = await api.getPublicWorkspacesKnowledgeBasesItems(body);
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
| **workspaceId** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **knowledgeBaseId** | `string` | Knowledge base UUID | [Defaults to `undefined`] |

### Return type

[**GetPublicWorkspacesKnowledgeBasesItems200Response**](GetPublicWorkspacesKnowledgeBasesItems200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | knowledge base items returned |  -  |
| **401** | unauthorized |  -  |
| **422** | knowledge base not found in workspace |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesKnowledgeBasesItems2

> GetPublicWorkspacesKnowledgeBasesItems2200Response getPublicWorkspacesKnowledgeBasesItems2(workspaceId, knowledgeBaseId, id)

Get a knowledge base item

Returns a single knowledge base item in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesKnowledgeBasesItems2Request } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBaseItemsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    knowledgeBaseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base item UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesKnowledgeBasesItems2Request;

  try {
    const data = await api.getPublicWorkspacesKnowledgeBasesItems2(body);
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
| **workspaceId** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **knowledgeBaseId** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **id** | `string` | Knowledge base item UUID | [Defaults to `undefined`] |

### Return type

[**GetPublicWorkspacesKnowledgeBasesItems2200Response**](GetPublicWorkspacesKnowledgeBasesItems2200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | item returned |  -  |
| **401** | unauthorized |  -  |
| **422** | item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchPublicWorkspacesKnowledgeBasesItems

> PatchPublicWorkspacesKnowledgeBasesItems200Response patchPublicWorkspacesKnowledgeBasesItems(workspaceId, knowledgeBaseId, id, patchPublicWorkspacesKnowledgeBasesItemsRequest)

Update a knowledge base item

Updates an existing knowledge base item in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PatchPublicWorkspacesKnowledgeBasesItemsOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBaseItemsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    knowledgeBaseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base item UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchPublicWorkspacesKnowledgeBasesItemsRequest
    patchPublicWorkspacesKnowledgeBasesItemsRequest: ...,
  } satisfies PatchPublicWorkspacesKnowledgeBasesItemsOperationRequest;

  try {
    const data = await api.patchPublicWorkspacesKnowledgeBasesItems(body);
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
| **workspaceId** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **knowledgeBaseId** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **id** | `string` | Knowledge base item UUID | [Defaults to `undefined`] |
| **patchPublicWorkspacesKnowledgeBasesItemsRequest** | [PatchPublicWorkspacesKnowledgeBasesItemsRequest](PatchPublicWorkspacesKnowledgeBasesItemsRequest.md) |  | |

### Return type

[**PatchPublicWorkspacesKnowledgeBasesItems200Response**](PatchPublicWorkspacesKnowledgeBasesItems200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | item updated |  -  |
| **401** | unauthorized |  -  |
| **422** | item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesKnowledgeBasesItems

> PostPublicWorkspacesKnowledgeBasesItems200Response postPublicWorkspacesKnowledgeBasesItems(workspaceId, knowledgeBaseId, postPublicWorkspacesKnowledgeBasesItemsRequest)

Create a knowledge base item

Creates a new item in a knowledge base in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesKnowledgeBasesItemsOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBaseItemsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    knowledgeBaseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PostPublicWorkspacesKnowledgeBasesItemsRequest
    postPublicWorkspacesKnowledgeBasesItemsRequest: ...,
  } satisfies PostPublicWorkspacesKnowledgeBasesItemsOperationRequest;

  try {
    const data = await api.postPublicWorkspacesKnowledgeBasesItems(body);
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
| **workspaceId** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **knowledgeBaseId** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **postPublicWorkspacesKnowledgeBasesItemsRequest** | [PostPublicWorkspacesKnowledgeBasesItemsRequest](PostPublicWorkspacesKnowledgeBasesItemsRequest.md) |  | |

### Return type

[**PostPublicWorkspacesKnowledgeBasesItems200Response**](PostPublicWorkspacesKnowledgeBasesItems200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | item created |  -  |
| **401** | unauthorized |  -  |
| **422** | validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesKnowledgeBasesItemsRegenerate

> PostPublicWorkspacesKnowledgeBasesItemsRegenerate200Response postPublicWorkspacesKnowledgeBasesItemsRegenerate(workspaceId, knowledgeBaseId, id)

Regenerate a knowledge base item

Enqueues a background job to re-fetch and re-embed the knowledge base item. Returns a request_id for async tracking.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesKnowledgeBasesItemsRegenerateRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBaseItemsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    knowledgeBaseId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base item UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PostPublicWorkspacesKnowledgeBasesItemsRegenerateRequest;

  try {
    const data = await api.postPublicWorkspacesKnowledgeBasesItemsRegenerate(body);
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
| **workspaceId** | `string` | Workspace UUID | [Defaults to `undefined`] |
| **knowledgeBaseId** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **id** | `string` | Knowledge base item UUID | [Defaults to `undefined`] |

### Return type

[**PostPublicWorkspacesKnowledgeBasesItemsRegenerate200Response**](PostPublicWorkspacesKnowledgeBasesItemsRegenerate200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | regeneration enqueued |  -  |
| **401** | unauthorized |  -  |
| **422** | item not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

