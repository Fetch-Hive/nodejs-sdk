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
import type { GetPublicWorkspacesAgentsChatsMessagesRequest } from '@fetch-hive/sdk';

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
  } satisfies GetPublicWorkspacesAgentsChatsMessagesRequest;

  try {
    const data = await api.getPublicWorkspacesAgentsChatsMessages(body);
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
*AgentChatMessagesApi* | [**getPublicWorkspacesAgentsChatsMessages**](docs/AgentChatMessagesApi.md#getpublicworkspacesagentschatsmessages) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{chat_id}/messages | List messages in a chat
*AgentChatsApi* | [**deletePublicWorkspacesAgentsChats**](docs/AgentChatsApi.md#deletepublicworkspacesagentschats) | **DELETE** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Delete a chat
*AgentChatsApi* | [**getPublicWorkspacesAgentsChats**](docs/AgentChatsApi.md#getpublicworkspacesagentschats) | **GET** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Get a chat
*AgentChatsApi* | [**patchPublicWorkspacesAgentsChats**](docs/AgentChatsApi.md#patchpublicworkspacesagentschatsoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id} | Update a chat
*AgentChatsApi* | [**patchPublicWorkspacesAgentsChatsClearMessages**](docs/AgentChatsApi.md#patchpublicworkspacesagentschatsclearmessages) | **PATCH** /public/workspaces/{workspace_id}/agents/{agent_id}/chats/{id}/clear_messages | Clear all messages in a chat
*AgentChatsApi* | [**postPublicWorkspacesAgentsChats**](docs/AgentChatsApi.md#postpublicworkspacesagentschatsoperation) | **POST** /public/workspaces/{workspace_id}/agents/{agent_id}/chats | Create a chat
*AgentsApi* | [**deletePublicWorkspacesAgents**](docs/AgentsApi.md#deletepublicworkspacesagents) | **DELETE** /public/workspaces/{workspace_id}/agents/{id} | Delete an agent
*AgentsApi* | [**getPublicWorkspacesAgents**](docs/AgentsApi.md#getpublicworkspacesagents) | **GET** /public/workspaces/{workspace_id}/agents/{id} | Get an agent
*AgentsApi* | [**getPublicWorkspacesAgents2**](docs/AgentsApi.md#getpublicworkspacesagents2) | **GET** /public/workspaces/{workspace_id}/agents | List public workspace agents
*AgentsApi* | [**invokeAgent**](docs/AgentsApi.md#invokeagentoperation) | **POST** /agent/invoke | Invoke an agent
*AgentsApi* | [**patchPublicWorkspacesAgents**](docs/AgentsApi.md#patchpublicworkspacesagentsoperation) | **PATCH** /public/workspaces/{workspace_id}/agents/{id} | Update an agent
*AgentsApi* | [**postPublicWorkspacesAgents**](docs/AgentsApi.md#postpublicworkspacesagentsoperation) | **POST** /public/workspaces/{workspace_id}/agents | Create an agent
*AssetsApi* | [**getPublicWorkspacesAssets**](docs/AssetsApi.md#getpublicworkspacesassets) | **GET** /public/workspaces/{workspace_id}/assets | List public workspace assets
*AssetsApi* | [**postPublicWorkspacesAssets**](docs/AssetsApi.md#postpublicworkspacesassets) | **POST** /public/workspaces/{workspace_id}/assets | Upload a public workspace asset
*HiveAgentsApi* | [**invokeHiveAgent**](docs/HiveAgentsApi.md#invokehiveagentoperation) | **POST** /hive-agent/invoke | Invoke a Hive Agent
*KnowledgeBaseItemsApi* | [**deletePublicWorkspacesKnowledgeBasesItems**](docs/KnowledgeBaseItemsApi.md#deletepublicworkspacesknowledgebasesitems) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Delete a knowledge base item
*KnowledgeBaseItemsApi* | [**getPublicWorkspacesKnowledgeBasesItems**](docs/KnowledgeBaseItemsApi.md#getpublicworkspacesknowledgebasesitems) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | List public workspace knowledge base items
*KnowledgeBaseItemsApi* | [**getPublicWorkspacesKnowledgeBasesItems2**](docs/KnowledgeBaseItemsApi.md#getpublicworkspacesknowledgebasesitems2) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Get a knowledge base item
*KnowledgeBaseItemsApi* | [**patchPublicWorkspacesKnowledgeBasesItems**](docs/KnowledgeBaseItemsApi.md#patchpublicworkspacesknowledgebasesitemsoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id} | Update a knowledge base item
*KnowledgeBaseItemsApi* | [**postPublicWorkspacesKnowledgeBasesItems**](docs/KnowledgeBaseItemsApi.md#postpublicworkspacesknowledgebasesitemsoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items | Create a knowledge base item
*KnowledgeBaseItemsApi* | [**postPublicWorkspacesKnowledgeBasesItemsRegenerate**](docs/KnowledgeBaseItemsApi.md#postpublicworkspacesknowledgebasesitemsregenerate) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{knowledge_base_id}/items/{id}/regenerate | Regenerate a knowledge base item
*KnowledgeBasesApi* | [**deletePublicWorkspacesKnowledgeBases**](docs/KnowledgeBasesApi.md#deletepublicworkspacesknowledgebases) | **DELETE** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Delete a knowledge base
*KnowledgeBasesApi* | [**getPublicWorkspacesKnowledgeBases**](docs/KnowledgeBasesApi.md#getpublicworkspacesknowledgebases) | **GET** /public/workspaces/{workspace_id}/knowledge_bases | List public workspace knowledge bases
*KnowledgeBasesApi* | [**getPublicWorkspacesKnowledgeBases2**](docs/KnowledgeBasesApi.md#getpublicworkspacesknowledgebases2) | **GET** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Get a knowledge base
*KnowledgeBasesApi* | [**patchPublicWorkspacesKnowledgeBases**](docs/KnowledgeBasesApi.md#patchpublicworkspacesknowledgebasesoperation) | **PATCH** /public/workspaces/{workspace_id}/knowledge_bases/{id} | Update a knowledge base
*KnowledgeBasesApi* | [**postPublicWorkspacesKnowledgeBases**](docs/KnowledgeBasesApi.md#postpublicworkspacesknowledgebasesoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases | Create a knowledge base
*KnowledgeBasesApi* | [**postPublicWorkspacesKnowledgeBasesSearch**](docs/KnowledgeBasesApi.md#postpublicworkspacesknowledgebasessearchoperation) | **POST** /public/workspaces/{workspace_id}/knowledge_bases/{id}/search | Search a knowledge base
*ModelsApi* | [**getPublicModels**](docs/ModelsApi.md#getpublicmodels) | **GET** /public/models | List active models
*PromptsApi* | [**invokePrompt**](docs/PromptsApi.md#invokepromptoperation) | **POST** /prompt/invoke | Invoke a prompt deployment
*RequestsApi* | [**getPublicRequests**](docs/RequestsApi.md#getpublicrequests) | **GET** /public/requests/{id} | Get a request
*SearchServicesApi* | [**getPublicSearchServicesCountries**](docs/SearchServicesApi.md#getpublicsearchservicescountries) | **GET** /public/search_services/countries | List public search-service country catalogs
*SearchServicesApi* | [**getPublicSearchServicesCountries2**](docs/SearchServicesApi.md#getpublicsearchservicescountries2) | **GET** /public/search_services/{service}/countries | Retrieve public search-service country catalog
*WorkflowsApi* | [**invokeWorkflow**](docs/WorkflowsApi.md#invokeworkflowoperation) | **POST** /workflow/invoke | Invoke a workflow deployment


### Models

- [AgentAttachment](docs/AgentAttachment.md)
- [AgentAttachmentOneOf](docs/AgentAttachmentOneOf.md)
- [AgentMessage](docs/AgentMessage.md)
- [AssetObject](docs/AssetObject.md)
- [AssetObjectTranscription](docs/AssetObjectTranscription.md)
- [AsyncConfig](docs/AsyncConfig.md)
- [DeletePublicWorkspacesAgents200Response](docs/DeletePublicWorkspacesAgents200Response.md)
- [DeletePublicWorkspacesAgentsChats200Response](docs/DeletePublicWorkspacesAgentsChats200Response.md)
- [DeletePublicWorkspacesAgentsChats404Response](docs/DeletePublicWorkspacesAgentsChats404Response.md)
- [DeletePublicWorkspacesKnowledgeBases200Response](docs/DeletePublicWorkspacesKnowledgeBases200Response.md)
- [DeletePublicWorkspacesKnowledgeBasesItems200Response](docs/DeletePublicWorkspacesKnowledgeBasesItems200Response.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [GeneratedArtifact](docs/GeneratedArtifact.md)
- [GetPublicModels200ResponseInner](docs/GetPublicModels200ResponseInner.md)
- [GetPublicRequests200Response](docs/GetPublicRequests200Response.md)
- [GetPublicRequests404Response](docs/GetPublicRequests404Response.md)
- [GetPublicSearchServicesCountries200Response](docs/GetPublicSearchServicesCountries200Response.md)
- [GetPublicSearchServicesCountries200ResponseServicesInner](docs/GetPublicSearchServicesCountries200ResponseServicesInner.md)
- [GetPublicSearchServicesCountries200ResponseServicesInnerCountriesInner](docs/GetPublicSearchServicesCountries200ResponseServicesInnerCountriesInner.md)
- [GetPublicSearchServicesCountries2404Response](docs/GetPublicSearchServicesCountries2404Response.md)
- [GetPublicWorkspacesAgents200Response](docs/GetPublicWorkspacesAgents200Response.md)
- [GetPublicWorkspacesAgents2200Response](docs/GetPublicWorkspacesAgents2200Response.md)
- [GetPublicWorkspacesAgentsChats200Response](docs/GetPublicWorkspacesAgentsChats200Response.md)
- [GetPublicWorkspacesAgentsChatsMessages200Response](docs/GetPublicWorkspacesAgentsChatsMessages200Response.md)
- [GetPublicWorkspacesAgentsChatsMessages200ResponseMessagesInner](docs/GetPublicWorkspacesAgentsChatsMessages200ResponseMessagesInner.md)
- [GetPublicWorkspacesAgentsChatsMessages422Response](docs/GetPublicWorkspacesAgentsChatsMessages422Response.md)
- [GetPublicWorkspacesAssets200Response](docs/GetPublicWorkspacesAssets200Response.md)
- [GetPublicWorkspacesKnowledgeBases200Response](docs/GetPublicWorkspacesKnowledgeBases200Response.md)
- [GetPublicWorkspacesKnowledgeBases2200Response](docs/GetPublicWorkspacesKnowledgeBases2200Response.md)
- [GetPublicWorkspacesKnowledgeBases2422Response](docs/GetPublicWorkspacesKnowledgeBases2422Response.md)
- [GetPublicWorkspacesKnowledgeBasesItems200Response](docs/GetPublicWorkspacesKnowledgeBasesItems200Response.md)
- [GetPublicWorkspacesKnowledgeBasesItems200ResponseKnowledgeBaseItemsInner](docs/GetPublicWorkspacesKnowledgeBasesItems200ResponseKnowledgeBaseItemsInner.md)
- [GetPublicWorkspacesKnowledgeBasesItems2200Response](docs/GetPublicWorkspacesKnowledgeBasesItems2200Response.md)
- [GetPublicWorkspacesKnowledgeBasesItems2422Response](docs/GetPublicWorkspacesKnowledgeBasesItems2422Response.md)
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
- [PatchPublicWorkspacesAgents200Response](docs/PatchPublicWorkspacesAgents200Response.md)
- [PatchPublicWorkspacesAgentsChats200Response](docs/PatchPublicWorkspacesAgentsChats200Response.md)
- [PatchPublicWorkspacesAgentsChatsClearMessages200Response](docs/PatchPublicWorkspacesAgentsChatsClearMessages200Response.md)
- [PatchPublicWorkspacesAgentsChatsRequest](docs/PatchPublicWorkspacesAgentsChatsRequest.md)
- [PatchPublicWorkspacesAgentsChatsRequestChat](docs/PatchPublicWorkspacesAgentsChatsRequestChat.md)
- [PatchPublicWorkspacesAgentsRequest](docs/PatchPublicWorkspacesAgentsRequest.md)
- [PatchPublicWorkspacesAgentsRequestAgent](docs/PatchPublicWorkspacesAgentsRequestAgent.md)
- [PatchPublicWorkspacesKnowledgeBases200Response](docs/PatchPublicWorkspacesKnowledgeBases200Response.md)
- [PatchPublicWorkspacesKnowledgeBasesItems200Response](docs/PatchPublicWorkspacesKnowledgeBasesItems200Response.md)
- [PatchPublicWorkspacesKnowledgeBasesItemsRequest](docs/PatchPublicWorkspacesKnowledgeBasesItemsRequest.md)
- [PatchPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem](docs/PatchPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem.md)
- [PatchPublicWorkspacesKnowledgeBasesRequest](docs/PatchPublicWorkspacesKnowledgeBasesRequest.md)
- [PatchPublicWorkspacesKnowledgeBasesRequestKnowledgeBase](docs/PatchPublicWorkspacesKnowledgeBasesRequestKnowledgeBase.md)
- [PostPublicWorkspacesAgents200Response](docs/PostPublicWorkspacesAgents200Response.md)
- [PostPublicWorkspacesAgents422Response](docs/PostPublicWorkspacesAgents422Response.md)
- [PostPublicWorkspacesAgentsChats200Response](docs/PostPublicWorkspacesAgentsChats200Response.md)
- [PostPublicWorkspacesAgentsChats200ResponseChat](docs/PostPublicWorkspacesAgentsChats200ResponseChat.md)
- [PostPublicWorkspacesAgentsChats422Response](docs/PostPublicWorkspacesAgentsChats422Response.md)
- [PostPublicWorkspacesAgentsChatsRequest](docs/PostPublicWorkspacesAgentsChatsRequest.md)
- [PostPublicWorkspacesAgentsChatsRequestChat](docs/PostPublicWorkspacesAgentsChatsRequestChat.md)
- [PostPublicWorkspacesAgentsRequest](docs/PostPublicWorkspacesAgentsRequest.md)
- [PostPublicWorkspacesAgentsRequestAgent](docs/PostPublicWorkspacesAgentsRequestAgent.md)
- [PostPublicWorkspacesAssets200Response](docs/PostPublicWorkspacesAssets200Response.md)
- [PostPublicWorkspacesAssets422Response](docs/PostPublicWorkspacesAssets422Response.md)
- [PostPublicWorkspacesKnowledgeBases200Response](docs/PostPublicWorkspacesKnowledgeBases200Response.md)
- [PostPublicWorkspacesKnowledgeBasesItems200Response](docs/PostPublicWorkspacesKnowledgeBasesItems200Response.md)
- [PostPublicWorkspacesKnowledgeBasesItems422Response](docs/PostPublicWorkspacesKnowledgeBasesItems422Response.md)
- [PostPublicWorkspacesKnowledgeBasesItemsRegenerate200Response](docs/PostPublicWorkspacesKnowledgeBasesItemsRegenerate200Response.md)
- [PostPublicWorkspacesKnowledgeBasesItemsRequest](docs/PostPublicWorkspacesKnowledgeBasesItemsRequest.md)
- [PostPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem](docs/PostPublicWorkspacesKnowledgeBasesItemsRequestKnowledgeBaseItem.md)
- [PostPublicWorkspacesKnowledgeBasesRequest](docs/PostPublicWorkspacesKnowledgeBasesRequest.md)
- [PostPublicWorkspacesKnowledgeBasesRequestKnowledgeBase](docs/PostPublicWorkspacesKnowledgeBasesRequestKnowledgeBase.md)
- [PostPublicWorkspacesKnowledgeBasesSearch200Response](docs/PostPublicWorkspacesKnowledgeBasesSearch200Response.md)
- [PostPublicWorkspacesKnowledgeBasesSearch422Response](docs/PostPublicWorkspacesKnowledgeBasesSearch422Response.md)
- [PostPublicWorkspacesKnowledgeBasesSearchRequest](docs/PostPublicWorkspacesKnowledgeBasesSearchRequest.md)
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

- API version: `0.2.8`
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
