# AgentChatsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePublicWorkspacesAgentsChats**](AgentChatsApi.md#deletepublicworkspacesagentschats) | **DELETE** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Delete a chat |
| [**getPublicWorkspacesAgentsChats**](AgentChatsApi.md#getpublicworkspacesagentschats) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Get a chat |
| [**patchPublicWorkspacesAgentsChats**](AgentChatsApi.md#patchpublicworkspacesagentschatsoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Update a chat |
| [**patchPublicWorkspacesAgentsChatsClearMessages**](AgentChatsApi.md#patchpublicworkspacesagentschatsclearmessages) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id}/clear_messages | Clear all messages in a chat |
| [**postPublicWorkspacesAgentsChats**](AgentChatsApi.md#postpublicworkspacesagentschatsoperation) | **POST** /public/workspaces/{workspace_id}/agents/{agent_id}/chats | Create a chat |



## deletePublicWorkspacesAgentsChats

> DeletePublicWorkspacesAgentsChats200Response deletePublicWorkspacesAgentsChats(workspaceId, agentId, id)

Delete a chat

Permanently deletes a chat and all its messages.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { DeletePublicWorkspacesAgentsChatsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentChatsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    agentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Chat UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeletePublicWorkspacesAgentsChatsRequest;

  try {
    const data = await api.deletePublicWorkspacesAgentsChats(body);
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
| **agentId** | `string` | Agent UUID | [Defaults to `undefined`] |
| **id** | `string` | Chat UUID | [Defaults to `undefined`] |

### Return type

[**DeletePublicWorkspacesAgentsChats200Response**](DeletePublicWorkspacesAgentsChats200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | chat deleted |  -  |
| **401** | unauthorized |  -  |
| **404** | chat not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesAgentsChats

> GetPublicWorkspacesAgentsChats200Response getPublicWorkspacesAgentsChats(workspaceId, agentId, id)

Get a chat

Returns a single chat belonging to the agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesAgentsChatsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentChatsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    agentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Chat UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesAgentsChatsRequest;

  try {
    const data = await api.getPublicWorkspacesAgentsChats(body);
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
| **agentId** | `string` | Agent UUID | [Defaults to `undefined`] |
| **id** | `string` | Chat UUID | [Defaults to `undefined`] |

### Return type

[**GetPublicWorkspacesAgentsChats200Response**](GetPublicWorkspacesAgentsChats200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | chat returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchPublicWorkspacesAgentsChats

> PatchPublicWorkspacesAgentsChats200Response patchPublicWorkspacesAgentsChats(workspaceId, agentId, id, patchPublicWorkspacesAgentsChatsRequest)

Update a chat

Updates a chat name in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PatchPublicWorkspacesAgentsChatsOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentChatsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    agentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Chat UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchPublicWorkspacesAgentsChatsRequest
    patchPublicWorkspacesAgentsChatsRequest: ...,
  } satisfies PatchPublicWorkspacesAgentsChatsOperationRequest;

  try {
    const data = await api.patchPublicWorkspacesAgentsChats(body);
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
| **agentId** | `string` | Agent UUID | [Defaults to `undefined`] |
| **id** | `string` | Chat UUID | [Defaults to `undefined`] |
| **patchPublicWorkspacesAgentsChatsRequest** | [PatchPublicWorkspacesAgentsChatsRequest](PatchPublicWorkspacesAgentsChatsRequest.md) |  | |

### Return type

[**PatchPublicWorkspacesAgentsChats200Response**](PatchPublicWorkspacesAgentsChats200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | chat updated |  -  |
| **401** | unauthorized |  -  |
| **404** | chat not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchPublicWorkspacesAgentsChatsClearMessages

> PatchPublicWorkspacesAgentsChatsClearMessages200Response patchPublicWorkspacesAgentsChatsClearMessages(workspaceId, agentId, id)

Clear all messages in a chat

Destroys all messages in the chat and resets the last message content.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PatchPublicWorkspacesAgentsChatsClearMessagesRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentChatsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    agentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Chat UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PatchPublicWorkspacesAgentsChatsClearMessagesRequest;

  try {
    const data = await api.patchPublicWorkspacesAgentsChatsClearMessages(body);
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
| **agentId** | `string` | Agent UUID | [Defaults to `undefined`] |
| **id** | `string` | Chat UUID | [Defaults to `undefined`] |

### Return type

[**PatchPublicWorkspacesAgentsChatsClearMessages200Response**](PatchPublicWorkspacesAgentsChatsClearMessages200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | messages cleared |  -  |
| **401** | unauthorized |  -  |
| **404** | chat not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesAgentsChats

> PostPublicWorkspacesAgentsChats200Response postPublicWorkspacesAgentsChats(workspaceId, agentId, postPublicWorkspacesAgentsChatsRequest)

Create a chat

Creates a new chat session for the agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesAgentsChatsOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentChatsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    agentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PostPublicWorkspacesAgentsChatsRequest
    postPublicWorkspacesAgentsChatsRequest: ...,
  } satisfies PostPublicWorkspacesAgentsChatsOperationRequest;

  try {
    const data = await api.postPublicWorkspacesAgentsChats(body);
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
| **agentId** | `string` | Agent UUID | [Defaults to `undefined`] |
| **postPublicWorkspacesAgentsChatsRequest** | [PostPublicWorkspacesAgentsChatsRequest](PostPublicWorkspacesAgentsChatsRequest.md) |  | |

### Return type

[**PostPublicWorkspacesAgentsChats200Response**](PostPublicWorkspacesAgentsChats200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | chat created |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |
| **422** | validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

