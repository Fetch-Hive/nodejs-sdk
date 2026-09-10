# AgentsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelAgentDelegation**](AgentsApi.md#cancelagentdelegation) | **POST** /agent/delegations/{id}/cancel | Cancel an agent delegation |
| [**deletePublicWorkspacesAgents**](AgentsApi.md#deletepublicworkspacesagents) | **DELETE** /public/workspaces/{workspace_id}/agents/{id} | Delete an agent |
| [**getAgentDelegation**](AgentsApi.md#getagentdelegation) | **GET** /agent/delegations/{id} | Get an agent delegation |
| [**getPublicWorkspacesAgents**](AgentsApi.md#getpublicworkspacesagents) | **GET** /public/workspaces/{workspace_id}/agents/{id} | Get an agent |
| [**getPublicWorkspacesAgents2**](AgentsApi.md#getpublicworkspacesagents2) | **GET** /public/workspaces/{workspace_id}/agents | List public workspace agents |
| [**invokeAgent**](AgentsApi.md#invokeagentoperation) | **POST** /agent/invoke | Invoke an agent |
| [**listThreadAgentDelegations**](AgentsApi.md#listthreadagentdelegations) | **GET** /agent/threads/{thread_id}/delegations | List pending agent delegations for a thread |
| [**patchPublicWorkspacesAgents**](AgentsApi.md#patchpublicworkspacesagentsoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{id} | Update an agent |
| [**postPublicWorkspacesAgents**](AgentsApi.md#postpublicworkspacesagentsoperation) | **POST** /public/workspaces/{workspace_id}/agents | Create an agent |



## cancelAgentDelegation

> AgentDelegation cancelAgentDelegation(id)

Cancel an agent delegation

Cancels a pending or running background workflow that an agent started. Already finished delegations are returned unchanged. 

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { CancelAgentDelegationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CancelAgentDelegationRequest;

  try {
    const data = await api.cancelAgentDelegation(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AgentDelegation**](AgentDelegation.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delegation after cancel. |  -  |
| **401** | Missing or invalid API token. |  -  |
| **404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deletePublicWorkspacesAgents

> DeletePublicWorkspacesAgents200Response deletePublicWorkspacesAgents(workspaceId, id)

Delete an agent

Destroys the agent record.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { DeletePublicWorkspacesAgentsRequest } from '@fetch-hive/sdk';

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
  } satisfies DeletePublicWorkspacesAgentsRequest;

  try {
    const data = await api.deletePublicWorkspacesAgents(body);
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

[**DeletePublicWorkspacesAgents200Response**](DeletePublicWorkspacesAgents200Response.md)

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


## getAgentDelegation

> AgentDelegation getAgentDelegation(id)

Get an agent delegation

Returns the status and result of a background workflow started by an agent. Use this when you invoked an agent without a &#x60;thread_id&#x60; and without &#x60;async.callback_url&#x60;. 

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { GetAgentDelegationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetAgentDelegationRequest;

  try {
    const data = await api.getAgentDelegation(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AgentDelegation**](AgentDelegation.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Delegation status and result. |  -  |
| **401** | Missing or invalid API token. |  -  |
| **404** | The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesAgents

> GetPublicWorkspacesAgents200Response getPublicWorkspacesAgents(workspaceId, id)

Get an agent

Returns a single active agent belonging to the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesAgentsRequest } from '@fetch-hive/sdk';

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
  } satisfies GetPublicWorkspacesAgentsRequest;

  try {
    const data = await api.getPublicWorkspacesAgents(body);
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

[**GetPublicWorkspacesAgents200Response**](GetPublicWorkspacesAgents200Response.md)

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


## getPublicWorkspacesAgents2

> GetPublicWorkspacesAgents2200Response getPublicWorkspacesAgents2(workspaceId)

List public workspace agents

Returns standalone agents scoped to the requested public API workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesAgents2Request } from '@fetch-hive/sdk';

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
  } satisfies GetPublicWorkspacesAgents2Request;

  try {
    const data = await api.getPublicWorkspacesAgents2(body);
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

[**GetPublicWorkspacesAgents2200Response**](GetPublicWorkspacesAgents2200Response.md)

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


## listThreadAgentDelegations

> ListThreadAgentDelegations200Response listThreadAgentDelegations(threadId)

List pending agent delegations for a thread

Lists pending and running background workflows for a conversation thread. Pass the same &#x60;thread_id&#x60; you send to &#x60;POST /agent/invoke&#x60;. 

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { ListThreadAgentDelegationsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    threadId: threadId_example,
  } satisfies ListThreadAgentDelegationsRequest;

  try {
    const data = await api.listThreadAgentDelegations(body);
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
| **threadId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**ListThreadAgentDelegations200Response**](ListThreadAgentDelegations200Response.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Open delegations for the thread. |  -  |
| **401** | Missing or invalid API token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchPublicWorkspacesAgents

> PatchPublicWorkspacesAgents200Response patchPublicWorkspacesAgents(workspaceId, id, patchPublicWorkspacesAgentsRequest)

Update an agent

Updates an existing agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PatchPublicWorkspacesAgentsOperationRequest } from '@fetch-hive/sdk';

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
    // PatchPublicWorkspacesAgentsRequest
    patchPublicWorkspacesAgentsRequest: ...,
  } satisfies PatchPublicWorkspacesAgentsOperationRequest;

  try {
    const data = await api.patchPublicWorkspacesAgents(body);
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
| **patchPublicWorkspacesAgentsRequest** | [PatchPublicWorkspacesAgentsRequest](PatchPublicWorkspacesAgentsRequest.md) |  | |

### Return type

[**PatchPublicWorkspacesAgents200Response**](PatchPublicWorkspacesAgents200Response.md)

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


## postPublicWorkspacesAgents

> PostPublicWorkspacesAgents200Response postPublicWorkspacesAgents(workspaceId, postPublicWorkspacesAgentsRequest)

Create an agent

Creates a new agent in the requested workspace.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesAgentsOperationRequest } from '@fetch-hive/sdk';

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
    // PostPublicWorkspacesAgentsRequest
    postPublicWorkspacesAgentsRequest: ...,
  } satisfies PostPublicWorkspacesAgentsOperationRequest;

  try {
    const data = await api.postPublicWorkspacesAgents(body);
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
| **postPublicWorkspacesAgentsRequest** | [PostPublicWorkspacesAgentsRequest](PostPublicWorkspacesAgentsRequest.md) |  | |

### Return type

[**PostPublicWorkspacesAgents200Response**](PostPublicWorkspacesAgents200Response.md)

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

