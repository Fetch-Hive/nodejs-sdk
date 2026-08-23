# KnowledgeBasesApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicWorkspacesWorkspaceIdKnowledgeBasesGet**](KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases | List public workspace knowledge bases |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesIdDelete**](KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesiddelete) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Delete a knowledge base |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesIdGet**](KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesidget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Get a knowledge base |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesIdPatch**](KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Update a knowledge base |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost**](KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesidsearchpostoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{id}/search | Search a knowledge base |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesPost**](KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasespostoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases | Create a knowledge base |



## publicWorkspacesWorkspaceIdKnowledgeBasesGet

> PublicWorkspacesWorkspaceIdKnowledgeBasesGet200Response publicWorkspacesWorkspaceIdKnowledgeBasesGet(workspaceId)

List public workspace knowledge bases

Returns knowledge bases scoped to the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesGetRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesGet(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesGet200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesGet200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesIdDelete

> PublicWorkspacesWorkspaceIdKnowledgeBasesIdDelete200Response publicWorkspacesWorkspaceIdKnowledgeBasesIdDelete(workspaceId, id)

Delete a knowledge base

Marks a knowledge base for deletion. Cleanup continues asynchronously in the background.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesIdDeleteRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesIdDeleteRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesIdDelete(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesIdDelete200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesIdDelete200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesIdGet

> PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet200Response publicWorkspacesWorkspaceIdKnowledgeBasesIdGet(workspaceId, id)

Get a knowledge base

Returns a single active knowledge base belonging to the requested workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesIdGetRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesIdGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesIdGet(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesIdPatch

> PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatch200Response publicWorkspacesWorkspaceIdKnowledgeBasesIdPatch(workspaceId, id, publicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest)

Update a knowledge base

Updates name, description, or search settings of an existing knowledge base.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest
    publicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesIdPatch(body);
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
| **publicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest** | [PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest](PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatch200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatch200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost

> PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost200Response publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost(workspaceId, id, publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest)

Search a knowledge base

Performs a vector, full-text, or hybrid search against the knowledge base. Returns matching chunks above the configured score threshold. 

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest
    publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost(body);
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
| **publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest** | [PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest](PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesPost

> PublicWorkspacesWorkspaceIdKnowledgeBasesPost200Response publicWorkspacesWorkspaceIdKnowledgeBasesPost(workspaceId, publicWorkspacesWorkspaceIdKnowledgeBasesPostRequest)

Create a knowledge base

Creates a new knowledge base in the requested workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBasesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesPostOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequest
    publicWorkspacesWorkspaceIdKnowledgeBasesPostRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesPostOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesPost(body);
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
| **publicWorkspacesWorkspaceIdKnowledgeBasesPostRequest** | [PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequest](PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdKnowledgeBasesPost200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesPost200Response.md)

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

