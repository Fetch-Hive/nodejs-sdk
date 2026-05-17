# UsersProfileApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1UsersMeGet**](UsersProfileApi.md#v1usersmeget) | **GET** /v1/users/me | Retrieve the authenticated user |



## v1UsersMeGet

> V1UsersMeGet200Response v1UsersMeGet()

Retrieve the authenticated user

Returns the full user object for the currently authenticated user, including account and workspaces.

### Example

```ts
import {
  Configuration,
  UsersProfileApi,
} from '@fetch-hive/sdk';
import type { V1UsersMeGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsersProfileApi(config);

  try {
    const data = await api.v1UsersMeGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1UsersMeGet200Response**](V1UsersMeGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | user returned |  -  |
| **401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

