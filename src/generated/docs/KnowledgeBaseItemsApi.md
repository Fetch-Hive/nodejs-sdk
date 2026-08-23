# KnowledgeBaseItemsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet**](KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | List public workspace knowledge base items |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete**](KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsiddelete) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Delete a knowledge base item |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet**](KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsidget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Get a knowledge base item |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch**](KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Update a knowledge base item |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost**](KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsidregeneratepost) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id}/regenerate | Regenerate a knowledge base item |
| [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost**](KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemspostoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | Create a knowledge base item |



## publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet

> PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200Response publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet(workspaceId, knowledgeBaseId)

List public workspace knowledge base items

Returns items for a knowledge base in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGetRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete

> PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete200Response publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete(workspaceId, knowledgeBaseId, id)

Delete a knowledge base item

Destroys a knowledge base item in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDeleteRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDeleteRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet

> PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet200Response publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet(workspaceId, knowledgeBaseId, id)

Get a knowledge base item

Returns a single knowledge base item in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGetRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch

> PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch200Response publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch(workspaceId, knowledgeBaseId, id, publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest)

Update a knowledge base item

Updates an existing knowledge base item in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest
    publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch(body);
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
| **publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest** | [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost

> PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost200Response publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost(workspaceId, knowledgeBaseId, id)

Regenerate a knowledge base item

Enqueues a background job to re-fetch and re-embed the knowledge base item. Returns a request_id for async tracking.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePostRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePostRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost(body);
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

[**PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost200Response.md)

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


## publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost

> PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost200Response publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost(workspaceId, knowledgeBaseId, publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest)

Create a knowledge base item

Creates a new item in a knowledge base in the requested public API workspace.

### Example

```ts
import {
  Configuration,
  KnowledgeBaseItemsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest
    publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost(body);
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
| **publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest** | [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost200Response**](PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost200Response.md)

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

