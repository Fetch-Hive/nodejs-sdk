# AgentChatMessagesApi

All URIs are relative to *https://api.fetchhive.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet**](AgentChatMessagesApi.md#publicworkspacesworkspaceidagentsagentidchatschatidmessagesget) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{chat_id}/messages | List messages in a chat |



## publicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet

> PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200Response publicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet(workspaceId, agentId, chatId)

List messages in a chat

Returns messages in the chat ordered chronologically (oldest first).

### Example

```ts
import {
  Configuration,
  AgentChatMessagesApi,
} from '@fetch-hive/sdk';
import type { PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGetRequest } from '@fetch-hive/sdk';

async function example() {
  console.log("🚀 Testing @fetch-hive/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearer_auth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AgentChatMessagesApi(config);

  const body = {
    // string | Workspace UUID
    workspaceId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Agent UUID
    agentId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Chat UUID
    chatId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGetRequest;

  try {
    const data = await api.publicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet(body);
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
| **chatId** | `string` | Chat UUID | [Defaults to `undefined`] |

### Return type

[**PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200Response**](PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200Response.md)

### Authorization

[bearer_auth](../README.md#bearer_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | messages returned |  -  |
| **401** | unauthorized |  -  |
| **404** | workspace not found |  -  |
| **422** | agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

