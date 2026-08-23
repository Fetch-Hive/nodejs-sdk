# AgentsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invokeAgent**](AgentsApi.md#invokeagentoperation) | **POST** /agent/invoke | Invoke an agent |
| [**publicWorkspacesWorkspaceIdAgentsGet**](AgentsApi.md#publicworkspacesworkspaceidagentsget) | **GET** /public/workspaces/{workspace_id}/agents | List public workspace agents |
| [**publicWorkspacesWorkspaceIdAgentsIdDelete**](AgentsApi.md#publicworkspacesworkspaceidagentsiddelete) | **DELETE** /public/workspaces/{workspace_id}/agents/{id} | Delete an agent |
| [**publicWorkspacesWorkspaceIdAgentsIdGet**](AgentsApi.md#publicworkspacesworkspaceidagentsidget) | **GET** /public/workspaces/{workspace_id}/agents/{id} | Get an agent |
| [**publicWorkspacesWorkspaceIdAgentsIdPatch**](AgentsApi.md#publicworkspacesworkspaceidagentsidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{id} | Update an agent |
| [**publicWorkspacesWorkspaceIdAgentsPost**](AgentsApi.md#publicworkspacesworkspaceidagentspostoperation) | **POST** /public/workspaces/{workspace_id}/agents | Create an agent |



## invokeAgent

> InvokeAgentResponse invokeAgent(invokeAgentRequest)

Invoke an agent

Sends a message to a configured agent and returns its response. Agents can use tools, maintain conversation history via &#x60;thread_id&#x60;, or accept ephemeral history via the &#x60;messages&#x60; field.  Set &#x60;streaming: true&#x60; to receive a Server-Sent Events stream. Each &#x60;data:&#x60; line contains a JSON object of type &#x60;SseChunk&#x60;.  Documents and image URLs can be supplied in &#x60;attachments&#x60;. Existing account Assets can be discovered through &#x60;known_artifact_refs&#x60; and explicitly selected through &#x60;artifact_refs&#x60;. 

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


## publicWorkspacesWorkspaceIdAgentsGet

> PublicWorkspacesWorkspaceIdAgentsGet200Response publicWorkspacesWorkspaceIdAgentsGet(workspaceId)

List public workspace agents

Returns standalone agents scoped to the requested public API workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PublicWorkspacesWorkspaceIdAgentsGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsGet(body);
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

[**PublicWorkspacesWorkspaceIdAgentsGet200Response**](PublicWorkspacesWorkspaceIdAgentsGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | agents returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicWorkspacesWorkspaceIdAgentsIdDelete

> PublicWorkspacesWorkspaceIdAgentsIdDelete200Response publicWorkspacesWorkspaceIdAgentsIdDelete(workspaceId, id)

Delete an agent

Destroys the agent record.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsIdDeleteRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PublicWorkspacesWorkspaceIdAgentsIdDeleteRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsIdDelete(body);
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
| **id** | `string` | Agent UUID | [Defaults to `undefined`] |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsIdDelete200Response**](PublicWorkspacesWorkspaceIdAgentsIdDelete200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | agent deleted |  -  |
| **401** | unauthorized |  -  |
| **422** | agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicWorkspacesWorkspaceIdAgentsIdGet

> PublicWorkspacesWorkspaceIdAgentsIdGet200Response publicWorkspacesWorkspaceIdAgentsIdGet(workspaceId, id)

Get an agent

Returns a single active agent belonging to the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsIdGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PublicWorkspacesWorkspaceIdAgentsIdGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsIdGet(body);
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
| **id** | `string` | Agent UUID | [Defaults to `undefined`] |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsIdGet200Response**](PublicWorkspacesWorkspaceIdAgentsIdGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | agent returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |
| **422** | agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicWorkspacesWorkspaceIdAgentsIdPatch

> PublicWorkspacesWorkspaceIdAgentsIdPatch200Response publicWorkspacesWorkspaceIdAgentsIdPatch(workspaceId, id, publicWorkspacesWorkspaceIdAgentsIdPatchRequest)

Update an agent

Updates an existing agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsIdPatchOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PublicWorkspacesWorkspaceIdAgentsIdPatchRequest
    publicWorkspacesWorkspaceIdAgentsIdPatchRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdAgentsIdPatchOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsIdPatch(body);
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
| **id** | `string` | Agent UUID | [Defaults to `undefined`] |
| **publicWorkspacesWorkspaceIdAgentsIdPatchRequest** | [PublicWorkspacesWorkspaceIdAgentsIdPatchRequest](PublicWorkspacesWorkspaceIdAgentsIdPatchRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsIdPatch200Response**](PublicWorkspacesWorkspaceIdAgentsIdPatch200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | agent updated |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |
| **422** | agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## publicWorkspacesWorkspaceIdAgentsPost

> PublicWorkspacesWorkspaceIdAgentsPost200Response publicWorkspacesWorkspaceIdAgentsPost(workspaceId, publicWorkspacesWorkspaceIdAgentsPostRequest)

Create an agent

Creates a new agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsPostOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PublicWorkspacesWorkspaceIdAgentsPostRequest
    publicWorkspacesWorkspaceIdAgentsPostRequest: ...,
  } satisfies PublicWorkspacesWorkspaceIdAgentsPostOperationRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsPost(body);
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
| **publicWorkspacesWorkspaceIdAgentsPostRequest** | [PublicWorkspacesWorkspaceIdAgentsPostRequest](PublicWorkspacesWorkspaceIdAgentsPostRequest.md) |  | |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsPost200Response**](PublicWorkspacesWorkspaceIdAgentsPost200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | agent created |  -  |
| **401** | unauthorized |  -  |
| **422** | invalid LLM model |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

