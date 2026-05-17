# PublicWorkflowRunsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1WorkflowRunsIdGet**](PublicWorkflowRunsApi.md#v1workflowrunsidget) | **GET** /v1/workflow_runs/{id} | Get a workflow run |



## v1WorkflowRunsIdGet

> V1WorkflowRunsIdGet200Response v1WorkflowRunsIdGet(id)

Get a workflow run

Returns the status and output of a prompt workflow run.

### Example

```ts
import {
  Configuration,
  PublicWorkflowRunsApi,
} from '@fetch-hive/sdk';
import type { V1WorkflowRunsIdGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicWorkflowRunsApi(config);

  const body = {
    // string | Workflow run UUID
    id: id_example,
  } satisfies V1WorkflowRunsIdGetRequest;

  try {
    const data = await api.v1WorkflowRunsIdGet(body);
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
| **id** | `string` | Workflow run UUID | [Defaults to `undefined`] |

### Return type

[**V1WorkflowRunsIdGet200Response**](V1WorkflowRunsIdGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | workflow run returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workflow run not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

