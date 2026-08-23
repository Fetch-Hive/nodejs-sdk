# AgentChatsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch**](AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsidclearmessagespatch) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id}/clear_messages | Clear all messages in a chat |
| [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete**](AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsiddelete) | **DELETE** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Delete a chat |
| [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet**](AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsidget) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Get a chat |
| [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch**](AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Update a chat |
| [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsPost**](AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatspostoperation) | **POST** /public/workspaces/{workspace_id}/agents/{agent_id}/chats | Create a chat |



## publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch

> PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch200Response publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch(workspaceId, agentId, id)

Clear all messages in a chat

Destroys all messages in the chat and resets the last message content.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatchRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatchRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch(body);
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

[**PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch200Response**](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch200Response.md)

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


## publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete

> PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete200Response publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete(workspaceId, agentId, id)

Delete a chat

Permanently deletes a chat and all its messages.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDeleteRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDeleteRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete(body);
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

[**PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete200Response**](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete200Response.md)

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


## publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet

> PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet200Response publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet(workspaceId, agentId, id)

Get a chat

Returns a single chat belonging to the agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGetRequest } from '@fetch-hive/sdk';

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
  } satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet(body);
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

[**PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet200Response**](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet200Response.md)

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


## publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch

> PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch200Response publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch(workspaceId, agentId, id, publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest)

Update a chat

Updates a chat name in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest
    publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch(body);
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
| **publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest** | [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch200Response**](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch200Response.md)

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


## publicWorkspacesWorkspaceIdAgentsAgentIdChatsPost

> PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200Response publicWorkspacesWorkspaceIdAgentsAgentIdChatsPost(workspaceId, agentId, publicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest)

Create a chat

Creates a new chat session for the agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentChatsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostOperationRequest } from '@fetch-hive/sdk';

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
    // PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest
    publicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsAgentIdChatsPost(body);
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
| **publicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest** | [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200Response**](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200Response.md)

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

