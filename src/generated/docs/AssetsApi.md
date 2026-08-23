# AssetsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getPublicWorkspacesAssets**](AssetsApi.md#getpublicworkspacesassets) | **GET** /public/workspaces/{workspace_id}/assets | List public workspace assets |
| [**postPublicWorkspacesAssets**](AssetsApi.md#postpublicworkspacesassets) | **POST** /public/workspaces/{workspace_id}/assets | Upload a public workspace asset |



## getPublicWorkspacesAssets

> GetPublicWorkspacesAssets200Response getPublicWorkspacesAssets(workspaceId)

List public workspace assets

Returns assets scoped to the workspace attached to the public API key.

### Example

```ts
import {
  Configuration,
  AssetsApi,
} from '@fetch-hive/sdk';
import type { GetPublicWorkspacesAssetsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetPublicWorkspacesAssetsRequest;

  try {
    const data = await api.getPublicWorkspacesAssets(body);
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

[**GetPublicWorkspacesAssets200Response**](GetPublicWorkspacesAssets200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | assets returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found for API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postPublicWorkspacesAssets

> PostPublicWorkspacesAssets200Response postPublicWorkspacesAssets(workspaceId)

Upload a public workspace asset

Uploads a file and creates a workspace-scoped Asset that can be used as a Hive Agent source.

### Example

```ts
import {
  Configuration,
  AssetsApi,
} from '@fetch-hive/sdk';
import type { PostPublicWorkspacesAssetsRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AssetsApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PostPublicWorkspacesAssetsRequest;

  try {
    const data = await api.postPublicWorkspacesAssets(body);
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

[**PostPublicWorkspacesAssets200Response**](PostPublicWorkspacesAssets200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | asset uploaded |  -  |
| **422** | no file provided |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

