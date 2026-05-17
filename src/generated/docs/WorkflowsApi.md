# WorkflowsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**invokeWorkflow**](WorkflowsApi.md#invokeworkflowoperation) | **POST** /workflow/invoke | Invoke a workflow deployment |



## invokeWorkflow

> InvokeWorkflowResponse invokeWorkflow(invokeWorkflowRequest)

Invoke a workflow deployment

Runs a configured workflow deployment. Supports both synchronous and asynchronous execution via the &#x60;async&#x60; field.  When &#x60;async.enabled&#x60; is &#x60;false&#x60; (default), the request blocks until the workflow completes and returns the output directly.  When &#x60;async.enabled&#x60; is &#x60;true&#x60;, the server returns a &#x60;202&#x60; with a &#x60;run_id&#x60;. Poll &#x60;GET /v1/workflow_runs/{id}&#x60; on the management API to check status. 

### Example

```ts
import {
  Configuration,
  WorkflowsApi,
} from '@fetch-hive/sdk';
import type { InvokeWorkflowOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WorkflowsApi(config);

  const body = {
    // InvokeWorkflowRequest
    invokeWorkflowRequest: ...,
  } satisfies InvokeWorkflowOperationRequest;

  try {
    const data = await api.invokeWorkflow(body);
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
| **invokeWorkflowRequest** | [InvokeWorkflowRequest](InvokeWorkflowRequest.md) |  | |

### Return type

[**InvokeWorkflowResponse**](InvokeWorkflowResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Synchronous workflow result. |  -  |
| **202** | Async workflow accepted. Poll using the returned &#x60;run_id&#x60;. |  -  |
| **400** | Invalid request body or parameters. |  -  |
| **401** | Missing or invalid API token. |  -  |
| **500** | Unexpected server-side error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

