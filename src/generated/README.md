# @fetch-hive/sdk@{{VERSION}}

A TypeScript SDK client for the api.fetchhive.com API.

## Usage

First, install the SDK from npm.

```bash
npm install @fetch-hive/sdk --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *https://api.fetchhive.com/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AgentChatMessagesApi* | [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet**](docs/AgentChatMessagesApi.md#publicworkspacesworkspaceidagentsagentidchatschatidmessagesget) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{chat_id}/messages | List messages in a chat
*AgentChatsApi* | [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch**](docs/AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsidclearmessagespatch) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id}/clear_messages | Clear all messages in a chat
*AgentChatsApi* | [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete**](docs/AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsiddelete) | **DELETE** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Delete a chat
*AgentChatsApi* | [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet**](docs/AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsidget) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Get a chat
*AgentChatsApi* | [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch**](docs/AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatsidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Update a chat
*AgentChatsApi* | [**publicWorkspacesWorkspaceIdAgentsAgentIdChatsPost**](docs/AgentChatsApi.md#publicworkspacesworkspaceidagentsagentidchatspostoperation) | **POST** /public/workspaces/{workspace_id}/agents/{agent_id}/chats | Create a chat
*AgentsApi* | [**invokeAgent**](docs/AgentsApi.md#invokeagentoperation) | **POST** /agent/invoke | Invoke an agent
*AgentsApi* | [**publicWorkspacesWorkspaceIdAgentsGet**](docs/AgentsApi.md#publicworkspacesworkspaceidagentsget) | **GET** /public/workspaces/{workspace_id}/agents | List public workspace agents
*AgentsApi* | [**publicWorkspacesWorkspaceIdAgentsIdDelete**](docs/AgentsApi.md#publicworkspacesworkspaceidagentsiddelete) | **DELETE** /public/workspaces/{workspace_id}/agents/{id} | Delete an agent
*AgentsApi* | [**publicWorkspacesWorkspaceIdAgentsIdGet**](docs/AgentsApi.md#publicworkspacesworkspaceidagentsidget) | **GET** /public/workspaces/{workspace_id}/agents/{id} | Get an agent
*AgentsApi* | [**publicWorkspacesWorkspaceIdAgentsIdPatch**](docs/AgentsApi.md#publicworkspacesworkspaceidagentsidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{id} | Update an agent
*AgentsApi* | [**publicWorkspacesWorkspaceIdAgentsPost**](docs/AgentsApi.md#publicworkspacesworkspaceidagentspostoperation) | **POST** /public/workspaces/{workspace_id}/agents | Create an agent
*AssetsApi* | [**publicWorkspacesWorkspaceIdAssetsGet**](docs/AssetsApi.md#publicworkspacesworkspaceidassetsget) | **GET** /public/workspaces/{workspace_id}/assets | List public workspace assets
*AssetsApi* | [**publicWorkspacesWorkspaceIdAssetsPost**](docs/AssetsApi.md#publicworkspacesworkspaceidassetspost) | **POST** /public/workspaces/{workspace_id}/assets | Upload a public workspace asset
*HiveAgentsApi* | [**invokeHiveAgent**](docs/HiveAgentsApi.md#invokehiveagentoperation) | **POST** /hive-agent/invoke | Invoke a Hive Agent
*KnowledgeBaseItemsApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet**](docs/KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | List public workspace knowledge base items
*KnowledgeBaseItemsApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete**](docs/KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsiddelete) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Delete a knowledge base item
*KnowledgeBaseItemsApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet**](docs/KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsidget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Get a knowledge base item
*KnowledgeBaseItemsApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch**](docs/KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Update a knowledge base item
*KnowledgeBaseItemsApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost**](docs/KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemsidregeneratepost) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id}/regenerate | Regenerate a knowledge base item
*KnowledgeBaseItemsApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost**](docs/KnowledgeBaseItemsApi.md#publicworkspacesworkspaceidknowledgebasesknowledgebaseiditemspostoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | Create a knowledge base item
*KnowledgeBasesApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesGet**](docs/KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases | List public workspace knowledge bases
*KnowledgeBasesApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesIdDelete**](docs/KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesiddelete) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Delete a knowledge base
*KnowledgeBasesApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesIdGet**](docs/KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesidget) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Get a knowledge base
*KnowledgeBasesApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesIdPatch**](docs/KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesidpatchoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Update a knowledge base
*KnowledgeBasesApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost**](docs/KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasesidsearchpostoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{id}/search | Search a knowledge base
*KnowledgeBasesApi* | [**publicWorkspacesWorkspaceIdKnowledgeBasesPost**](docs/KnowledgeBasesApi.md#publicworkspacesworkspaceidknowledgebasespostoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases | Create a knowledge base
*ModelsApi* | [**publicModelsGet**](docs/ModelsApi.md#publicmodelsget) | **GET** /public/models | List active models
*PromptsApi* | [**invokePrompt**](docs/PromptsApi.md#invokepromptoperation) | **POST** /prompt/invoke | Invoke a prompt deployment
*RequestsApi* | [**publicRequestsIdGet**](docs/RequestsApi.md#publicrequestsidget) | **GET** /public/requests/{id} | Get a request
*SearchServicesApi* | [**publicSearchServicesCountriesGet**](docs/SearchServicesApi.md#publicsearchservicescountriesget) | **GET** /public/search_services/countries | List public search-service country catalogs
*SearchServicesApi* | [**publicSearchServicesServiceCountriesGet**](docs/SearchServicesApi.md#publicsearchservicesservicecountriesget) | **GET** /public/search_services/{service}/countries | Retrieve public search-service country catalog
*WorkflowsApi* | [**invokeWorkflow**](docs/WorkflowsApi.md#invokeworkflowoperation) | **POST** /workflow/invoke | Invoke a workflow deployment


### Models

- [AgentAttachment](docs/AgentAttachment.md)
- [AgentAttachmentOneOf](docs/AgentAttachmentOneOf.md)
- [AgentMessage](docs/AgentMessage.md)
- [AssetObject](docs/AssetObject.md)
- [AssetObjectTranscription](docs/AssetObjectTranscription.md)
- [AsyncConfig](docs/AsyncConfig.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [GeneratedArtifact](docs/GeneratedArtifact.md)
- [HiveAgentAsyncConfig](docs/HiveAgentAsyncConfig.md)
- [HiveAgentSources](docs/HiveAgentSources.md)
- [InvokeAgentRequest](docs/InvokeAgentRequest.md)
- [InvokeAgentResponse](docs/InvokeAgentResponse.md)
- [InvokeHiveAgentRequest](docs/InvokeHiveAgentRequest.md)
- [InvokeHiveAgentResponse](docs/InvokeHiveAgentResponse.md)
- [InvokePromptRequest](docs/InvokePromptRequest.md)
- [InvokePromptResponse](docs/InvokePromptResponse.md)
- [InvokeWorkflowAsyncResponse](docs/InvokeWorkflowAsyncResponse.md)
- [InvokeWorkflowRequest](docs/InvokeWorkflowRequest.md)
- [InvokeWorkflowResponse](docs/InvokeWorkflowResponse.md)
- [KnowledgeBaseObject](docs/KnowledgeBaseObject.md)
- [MetadataValue](docs/MetadataValue.md)
- [PublicModelsGet200ResponseInner](docs/PublicModelsGet200ResponseInner.md)
- [PublicRequestsIdGet200Response](docs/PublicRequestsIdGet200Response.md)
- [PublicRequestsIdGet404Response](docs/PublicRequestsIdGet404Response.md)
- [PublicSearchServicesCountriesGet200Response](docs/PublicSearchServicesCountriesGet200Response.md)
- [PublicSearchServicesCountriesGet200ResponseServicesInner](docs/PublicSearchServicesCountriesGet200ResponseServicesInner.md)
- [PublicSearchServicesCountriesGet200ResponseServicesInnerCountriesInner](docs/PublicSearchServicesCountriesGet200ResponseServicesInnerCountriesInner.md)
- [PublicSearchServicesServiceCountriesGet404Response](docs/PublicSearchServicesServiceCountriesGet404Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200ResponseMessagesInner](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet200ResponseMessagesInner.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet422Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsChatIdMessagesGet422Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch200Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdClearMessagesPatch200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete200Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete404Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdDelete404Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet200Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdGet200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch200Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatch200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequest.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequestChat](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsIdPatchRequestChat.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200ResponseChat](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost200ResponseChat.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost422Response](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPost422Response.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequest.md)
- [PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequestChat](docs/PublicWorkspacesWorkspaceIdAgentsAgentIdChatsPostRequestChat.md)
- [PublicWorkspacesWorkspaceIdAgentsGet200Response](docs/PublicWorkspacesWorkspaceIdAgentsGet200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsIdDelete200Response](docs/PublicWorkspacesWorkspaceIdAgentsIdDelete200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsIdGet200Response](docs/PublicWorkspacesWorkspaceIdAgentsIdGet200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsIdPatch200Response](docs/PublicWorkspacesWorkspaceIdAgentsIdPatch200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsIdPatchRequest](docs/PublicWorkspacesWorkspaceIdAgentsIdPatchRequest.md)
- [PublicWorkspacesWorkspaceIdAgentsIdPatchRequestAgent](docs/PublicWorkspacesWorkspaceIdAgentsIdPatchRequestAgent.md)
- [PublicWorkspacesWorkspaceIdAgentsPost200Response](docs/PublicWorkspacesWorkspaceIdAgentsPost200Response.md)
- [PublicWorkspacesWorkspaceIdAgentsPost422Response](docs/PublicWorkspacesWorkspaceIdAgentsPost422Response.md)
- [PublicWorkspacesWorkspaceIdAgentsPostRequest](docs/PublicWorkspacesWorkspaceIdAgentsPostRequest.md)
- [PublicWorkspacesWorkspaceIdAgentsPostRequestAgent](docs/PublicWorkspacesWorkspaceIdAgentsPostRequestAgent.md)
- [PublicWorkspacesWorkspaceIdAssetsGet200Response](docs/PublicWorkspacesWorkspaceIdAssetsGet200Response.md)
- [PublicWorkspacesWorkspaceIdAssetsPost200Response](docs/PublicWorkspacesWorkspaceIdAssetsPost200Response.md)
- [PublicWorkspacesWorkspaceIdAssetsPost422Response](docs/PublicWorkspacesWorkspaceIdAssetsPost422Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesGet200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesGet200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdDelete200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdDelete200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet422Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdGet422Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatch200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatch200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequest.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequestKnowledgeBase](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdPatchRequestKnowledgeBase.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost422Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPost422Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesIdSearchPostRequest.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200ResponseKnowledgeBaseItemsInner](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsGet200ResponseKnowledgeBaseItemsInner.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdDelete200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet422Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdGet422Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatch200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequest.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequestKnowledgeBaseItem](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdPatchRequestKnowledgeBaseItem.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsIdRegeneratePost200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost422Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPost422Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequest.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequestKnowledgeBaseItem](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesKnowledgeBaseIdItemsPostRequestKnowledgeBaseItem.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesPost200Response](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesPost200Response.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequest](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequest.md)
- [PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequestKnowledgeBase](docs/PublicWorkspacesWorkspaceIdKnowledgeBasesPostRequestKnowledgeBase.md)
- [SseChunk](docs/SseChunk.md)
- [TokenUsage](docs/TokenUsage.md)
- [ToolInvocation](docs/ToolInvocation.md)

### Authorization


Authentication schemes defined for the API:
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication
<a id="bearer_auth"></a>
#### bearer_auth


- **Type**: HTTP Bearer Token authentication (JWT)
<a id="global_api_key"></a>
#### global_api_key


- **Type**: HTTP Bearer Token authentication
<a id="internal_service_auth"></a>
#### internal_service_auth


- **Type**: HTTP Bearer Token authentication (JWT)

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.2.7`
- Package version: `{{VERSION}}`
- Generator version: `7.22.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://fetchhive.com](https://fetchhive.com)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[MIT](https://opensource.org/licenses/MIT)
