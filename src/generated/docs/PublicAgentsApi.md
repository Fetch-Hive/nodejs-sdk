# PublicAgentsApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AgentsIdDelete**](PublicAgentsApi.md#v1agentsiddelete) | **DELETE** /v1/agents/{id} | Delete an agent |
| [**v1AgentsIdGet**](PublicAgentsApi.md#v1agentsidget) | **GET** /v1/agents/{id} | Get an agent |
| [**v1AgentsPost**](PublicAgentsApi.md#v1agentspostoperation) | **POST** /v1/agents | Create an agent |



## v1AgentsIdDelete

> V1AgentsIdDelete200Response v1AgentsIdDelete(id)

Delete an agent

Destroys the agent record.

### Example

```ts
import {
  Configuration,
  PublicAgentsApi,
} from '@fetch-hive/sdk';
import type { V1AgentsIdDeleteRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAgentsApi(config);

  const body = {
    // string | Agent UUID
    id: id_example,
  } satisfies V1AgentsIdDeleteRequest;

  try {
    const data = await api.v1AgentsIdDelete(body);
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
| **id** | `string` | Agent UUID | [Defaults to `undefined`] |

### Return type

[**V1AgentsIdDelete200Response**](V1AgentsIdDelete200Response.md)

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


## v1AgentsIdGet

> V1AgentsIdGet200Response v1AgentsIdGet(id)

Get an agent

Returns a single active agent belonging to the authenticated account.

### Example

```ts
import {
  Configuration,
  PublicAgentsApi,
} from '@fetch-hive/sdk';
import type { V1AgentsIdGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAgentsApi(config);

  const body = {
    // string | Agent UUID
    id: id_example,
  } satisfies V1AgentsIdGetRequest;

  try {
    const data = await api.v1AgentsIdGet(body);
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
| **id** | `string` | Agent UUID | [Defaults to `undefined`] |

### Return type

[**V1AgentsIdGet200Response**](V1AgentsIdGet200Response.md)

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
| **422** | agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AgentsPost

> V1AgentsPost200Response v1AgentsPost(v1AgentsPostRequest)

Create an agent

Creates a new agent in the first workspace of the authenticated account.

### Example

```ts
import {
  Configuration,
  PublicAgentsApi,
} from '@fetch-hive/sdk';
import type { V1AgentsPostOperationRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PublicAgentsApi(config);

  const body = {
    // V1AgentsPostRequest
    v1AgentsPostRequest: ...,
  } satisfies V1AgentsPostOperationRequest;

  try {
    const data = await api.v1AgentsPost(body);
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
| **v1AgentsPostRequest** | [V1AgentsPostRequest](V1AgentsPostRequest.md) |  | |

### Return type

[**V1AgentsPost200Response**](V1AgentsPost200Response.md)

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

