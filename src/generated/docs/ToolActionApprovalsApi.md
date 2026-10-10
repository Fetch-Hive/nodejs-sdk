# ToolActionApprovalsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPublicWorkspacesToolActionApprovals**](ToolActionApprovalsApi.md#getpublicworkspacestoolactionapprovals) | **GET** /public/workspaces/{workspace_id}/tool_action_approvals | List tool action approvals |
| [**getPublicWorkspacesToolActionApprovals2**](ToolActionApprovalsApi.md#getpublicworkspacestoolactionapprovals2) | **GET** /public/workspaces/{workspace_id}/tool_action_approvals/{id} | Show a tool action approval |
| [**postPublicWorkspacesToolActionApprovalsDecide**](ToolActionApprovalsApi.md#postpublicworkspacestoolactionapprovalsdecideoperation) | **POST** /public/workspaces/{workspace_id}/tool_action_approvals/{id}/decide | Decide a tool action approval |



## getPublicWorkspacesToolActionApprovals

> GetPublicWorkspacesToolActionApprovals200Response getPublicWorkspacesToolActionApprovals(workspaceId, status, agentId, runId, requestId, cursor, limit)

List tool action approvals

### Example

```ts
import {
  Configuration,
  ToolActionApprovalsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesToolActionApprovalsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ToolActionApprovalsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string (optional)
    status: status_example,
    // string (optional)
    agentId: agentId_example,
    // string (optional)
    runId: runId_example,
    // string (optional)
    requestId: requestId_example,
    // string (optional)
    cursor: cursor_example,
    // number (optional)
    limit: 56,
  } satisfies GetPublicWorkspacesToolActionApprovalsRequest;

  try {
    const data = await api.getPublicWorkspacesToolActionApprovals(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **agentId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **runId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **requestId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetPublicWorkspacesToolActionApprovals200Response**](GetPublicWorkspacesToolActionApprovals200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | pending approvals for this workspace |  -  |
| **404** | workspace is outside the API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPublicWorkspacesToolActionApprovals2

> GetPublicWorkspacesToolActionApprovals2200Response getPublicWorkspacesToolActionApprovals2(workspaceId, id)

Show a tool action approval

### Example

```ts
import {
  Configuration,
  ToolActionApprovalsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesToolActionApprovals2Request } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ToolActionApprovalsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesToolActionApprovals2Request;

  try {
    const data = await api.getPublicWorkspacesToolActionApprovals2(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**GetPublicWorkspacesToolActionApprovals2200Response**](GetPublicWorkspacesToolActionApprovals2200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | approval returned |  -  |
| **404** | approval is in another workspace |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesToolActionApprovalsDecide

> postPublicWorkspacesToolActionApprovalsDecide(workspaceId, id, postPublicWorkspacesToolActionApprovalsDecideRequest)

Decide a tool action approval

### Example

```ts
import {
  Configuration,
  ToolActionApprovalsApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesToolActionApprovalsDecideOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ToolActionApprovalsApi(config);

  const body = {
    // string
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PostPublicWorkspacesToolActionApprovalsDecideRequest (optional)
    postPublicWorkspacesToolActionApprovalsDecideRequest: ...,
  } satisfies PostPublicWorkspacesToolActionApprovalsDecideOperationRequest;

  try {
    const data = await api.postPublicWorkspacesToolActionApprovalsDecide(body);
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
| **workspaceId** | `string` |  | [Defaults to `undefined`] |
| **id** | `string` |  | [Defaults to `undefined`] |
| **postPublicWorkspacesToolActionApprovalsDecideRequest** | [PostPublicWorkspacesToolActionApprovalsDecideRequest](PostPublicWorkspacesToolActionApprovalsDecideRequest.md) |  | [Optional] |

### Return type

`void` (Empty response body)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | allow once records the API key |  -  |
| **409** | approval was already decided |  -  |
| **422** | a destructive action cannot be allowed for the whole run |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

