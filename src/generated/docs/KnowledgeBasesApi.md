# KnowledgeBasesApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePublicWorkspacesKnowledgeBases**](KnowledgeBasesApi.md#deletepublicworkspacesknowledgebases) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Delete a knowledge base |
| [**getPublicWorkspacesKnowledgeBases**](KnowledgeBasesApi.md#getpublicworkspacesknowledgebases) | **GET** /public/workspaces/{workspace_id}/knowledge_bases | List public workspace knowledge bases |
| [**getPublicWorkspacesKnowledgeBases2**](KnowledgeBasesApi.md#getpublicworkspacesknowledgebases2) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Get a knowledge base |
| [**patchPublicWorkspacesKnowledgeBases**](KnowledgeBasesApi.md#patchpublicworkspacesknowledgebasesoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Update a knowledge base |
| [**postPublicWorkspacesKnowledgeBases**](KnowledgeBasesApi.md#postpublicworkspacesknowledgebasesoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases | Create a knowledge base |
| [**postPublicWorkspacesKnowledgeBasesSearch**](KnowledgeBasesApi.md#postpublicworkspacesknowledgebasessearchoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{id}/search | Search a knowledge base |



## deletePublicWorkspacesKnowledgeBases

> DeletePublicWorkspacesKnowledgeBases200Response deletePublicWorkspacesKnowledgeBases(workspaceId, id)

Delete a knowledge base

Marks a knowledge base for deletion. Cleanup continues asynchronously in the background.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { DeletePublicWorkspacesKnowledgeBasesRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeletePublicWorkspacesKnowledgeBasesRequest;

  try {
    const data = await api.deletePublicWorkspacesKnowledgeBases(body);
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
| **id** | `string` | Knowledge base UUID | [Defaults to `undefined`] |

### Return type

[**DeletePublicWorkspacesKnowledgeBases200Response**](DeletePublicWorkspacesKnowledgeBases200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | knowledge base marked for deletion |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesKnowledgeBases

> GetPublicWorkspacesKnowledgeBases200Response getPublicWorkspacesKnowledgeBases(workspaceId)

List public workspace knowledge bases

Returns knowledge bases scoped to the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesKnowledgeBasesRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesKnowledgeBasesRequest;

  try {
    const data = await api.getPublicWorkspacesKnowledgeBases(body);
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

### Return type

[**GetPublicWorkspacesKnowledgeBases200Response**](GetPublicWorkspacesKnowledgeBases200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | knowledge bases returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesKnowledgeBases2

> GetPublicWorkspacesKnowledgeBases2200Response getPublicWorkspacesKnowledgeBases2(workspaceId, id)

Get a knowledge base

Returns a single active knowledge base belonging to the requested workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesKnowledgeBases2Request } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesKnowledgeBases2Request;

  try {
    const data = await api.getPublicWorkspacesKnowledgeBases2(body);
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
| **id** | `string` | Knowledge base UUID | [Defaults to `undefined`] |

### Return type

[**GetPublicWorkspacesKnowledgeBases2200Response**](GetPublicWorkspacesKnowledgeBases2200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | knowledge base returned |  -  |
| **401** | unauthorized |  -  |
| **422** | knowledge base not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchPublicWorkspacesKnowledgeBases

> PatchPublicWorkspacesKnowledgeBases200Response patchPublicWorkspacesKnowledgeBases(workspaceId, id, patchPublicWorkspacesKnowledgeBasesRequest)

Update a knowledge base

Updates name, description, or search settings of an existing knowledge base.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PatchPublicWorkspacesKnowledgeBasesOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchPublicWorkspacesKnowledgeBasesRequest
    patchPublicWorkspacesKnowledgeBasesRequest: ...,
  } satisfies PatchPublicWorkspacesKnowledgeBasesOperationRequest;

  try {
    const data = await api.patchPublicWorkspacesKnowledgeBases(body);
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
| **id** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **patchPublicWorkspacesKnowledgeBasesRequest** | [PatchPublicWorkspacesKnowledgeBasesRequest](PatchPublicWorkspacesKnowledgeBasesRequest.md) |  | |

### Return type

[**PatchPublicWorkspacesKnowledgeBases200Response**](PatchPublicWorkspacesKnowledgeBases200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | knowledge base updated |  -  |
| **401** | unauthorized |  -  |
| **422** | knowledge base not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesKnowledgeBases

> PostPublicWorkspacesKnowledgeBases200Response postPublicWorkspacesKnowledgeBases(workspaceId, postPublicWorkspacesKnowledgeBasesRequest)

Create a knowledge base

Creates a new knowledge base in the requested workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesKnowledgeBasesOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PostPublicWorkspacesKnowledgeBasesRequest
    postPublicWorkspacesKnowledgeBasesRequest: ...,
  } satisfies PostPublicWorkspacesKnowledgeBasesOperationRequest;

  try {
    const data = await api.postPublicWorkspacesKnowledgeBases(body);
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
| **postPublicWorkspacesKnowledgeBasesRequest** | [PostPublicWorkspacesKnowledgeBasesRequest](PostPublicWorkspacesKnowledgeBasesRequest.md) |  | |

### Return type

[**PostPublicWorkspacesKnowledgeBases200Response**](PostPublicWorkspacesKnowledgeBases200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | knowledge base created |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesKnowledgeBasesSearch

> PostPublicWorkspacesKnowledgeBasesSearch200Response postPublicWorkspacesKnowledgeBasesSearch(workspaceId, id, postPublicWorkspacesKnowledgeBasesSearchRequest)

Search a knowledge base

Performs a vector, full-text, or hybrid search against the knowledge base. Returns matching chunks above the configured score threshold. 

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesKnowledgeBasesSearchOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new KnowledgeBasesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Knowledge base UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PostPublicWorkspacesKnowledgeBasesSearchRequest
    postPublicWorkspacesKnowledgeBasesSearchRequest: ...,
  } satisfies PostPublicWorkspacesKnowledgeBasesSearchOperationRequest;

  try {
    const data = await api.postPublicWorkspacesKnowledgeBasesSearch(body);
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
| **id** | `string` | Knowledge base UUID | [Defaults to `undefined`] |
| **postPublicWorkspacesKnowledgeBasesSearchRequest** | [PostPublicWorkspacesKnowledgeBasesSearchRequest](PostPublicWorkspacesKnowledgeBasesSearchRequest.md) |  | |

### Return type

[**PostPublicWorkspacesKnowledgeBasesSearch200Response**](PostPublicWorkspacesKnowledgeBasesSearch200Response.md)

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

