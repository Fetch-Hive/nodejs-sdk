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


## Documentation

### API Endpoints

All URIs are relative to *https://api.fetchhive.com/v1*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AgentsApi* | [**invokeAgent**](docs/AgentsApi.md#invokeagentoperation) | **POST** /agent/invoke | Invoke an agent
*GlobalApi* | [**v1GlobalEmbeddingsPost**](docs/GlobalApi.md#v1globalembeddingspostoperation) | **POST** /v1/global/embeddings | Generate a text embedding
*PromptsApi* | [**invokePrompt**](docs/PromptsApi.md#invokepromptoperation) | **POST** /invoke | Invoke a prompt deployment
*PublicAgentsApi* | [**v1AgentsIdDelete**](docs/PublicAgentsApi.md#v1agentsiddelete) | **DELETE** /v1/agents/{id} | Delete an agent
*PublicAgentsApi* | [**v1AgentsIdGet**](docs/PublicAgentsApi.md#v1agentsidget) | **GET** /v1/agents/{id} | Get an agent
*PublicAgentsApi* | [**v1AgentsPost**](docs/PublicAgentsApi.md#v1agentspostoperation) | **POST** /v1/agents | Create an agent
*PublicDataSetsApi* | [**v1KnowledgeBasesIdDelete**](docs/PublicDataSetsApi.md#v1knowledgebasesiddelete) | **DELETE** /v1/knowledge_bases/{id} | Delete a data set
*PublicDataSetsApi* | [**v1KnowledgeBasesIdGet**](docs/PublicDataSetsApi.md#v1knowledgebasesidget) | **GET** /v1/knowledge_bases/{id} | Get a data set
*PublicDataSetsApi* | [**v1KnowledgeBasesIdPatch**](docs/PublicDataSetsApi.md#v1knowledgebasesidpatchoperation) | **PATCH** /v1/knowledge_bases/{id} | Update a data set
*PublicDataSetsApi* | [**v1KnowledgeBasesIdSearchPost**](docs/PublicDataSetsApi.md#v1knowledgebasesidsearchpostoperation) | **POST** /v1/knowledge_bases/{id}/search | Search a data set
*PublicDataSetsApi* | [**v1KnowledgeBasesPost**](docs/PublicDataSetsApi.md#v1knowledgebasespostoperation) | **POST** /v1/knowledge_bases | Create a data set
*PublicRequestsApi* | [**v1RequestsIdGet**](docs/PublicRequestsApi.md#v1requestsidget) | **GET** /v1/requests/{id} | Get a request
*PublicWorkflowRunsApi* | [**v1WorkflowRunsIdGet**](docs/PublicWorkflowRunsApi.md#v1workflowrunsidget) | **GET** /v1/workflow_runs/{id} | Get a workflow run
*SERPBingApi* | [**v1SerpBingLanguagesGet**](docs/SERPBingApi.md#v1serpbinglanguagesget) | **GET** /v1/serp/bing/languages | List Bing SERP languages
*SERPBingApi* | [**v1SerpBingLocationsGet**](docs/SERPBingApi.md#v1serpbinglocationsget) | **GET** /v1/serp/bing/locations | List Bing SERP locations
*SERPGoogleApi* | [**v1SerpGoogleLanguagesGet**](docs/SERPGoogleApi.md#v1serpgooglelanguagesget) | **GET** /v1/serp/google/languages | List Google SERP languages
*SERPGoogleApi* | [**v1SerpGoogleLocationsGet**](docs/SERPGoogleApi.md#v1serpgooglelocationsget) | **GET** /v1/serp/google/locations | List Google SERP locations
*UsersProfileApi* | [**v1UsersMeGet**](docs/UsersProfileApi.md#v1usersmeget) | **GET** /v1/users/me | Retrieve the authenticated user
*WorkflowsApi* | [**invokeWorkflow**](docs/WorkflowsApi.md#invokeworkflowoperation) | **POST** /workflow/invoke | Invoke a workflow deployment


### Models

- [AccountObject](docs/AccountObject.md)
- [AccountObjectWelcomeBonus](docs/AccountObjectWelcomeBonus.md)
- [ActiveSubscriptionObject](docs/ActiveSubscriptionObject.md)
- [ActiveSubscriptionObjectHostedLlmCredits](docs/ActiveSubscriptionObjectHostedLlmCredits.md)
- [AgentMessage](docs/AgentMessage.md)
- [AsyncConfig](docs/AsyncConfig.md)
- [AvatarObject](docs/AvatarObject.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [InvokeAgentRequest](docs/InvokeAgentRequest.md)
- [InvokeAgentResponse](docs/InvokeAgentResponse.md)
- [InvokePromptRequest](docs/InvokePromptRequest.md)
- [InvokePromptResponse](docs/InvokePromptResponse.md)
- [InvokeWorkflowAsyncResponse](docs/InvokeWorkflowAsyncResponse.md)
- [InvokeWorkflowRequest](docs/InvokeWorkflowRequest.md)
- [InvokeWorkflowResponse](docs/InvokeWorkflowResponse.md)
- [PlanLimitsObject](docs/PlanLimitsObject.md)
- [PlanObject](docs/PlanObject.md)
- [SseChunk](docs/SseChunk.md)
- [StorageObject](docs/StorageObject.md)
- [TokenUsage](docs/TokenUsage.md)
- [ToolInvocation](docs/ToolInvocation.md)
- [UserMembershipObject](docs/UserMembershipObject.md)
- [UserObject](docs/UserObject.md)
- [V1AgentsIdDelete200Response](docs/V1AgentsIdDelete200Response.md)
- [V1AgentsIdGet200Response](docs/V1AgentsIdGet200Response.md)
- [V1AgentsIdGet422Response](docs/V1AgentsIdGet422Response.md)
- [V1AgentsPost200Response](docs/V1AgentsPost200Response.md)
- [V1AgentsPost422Response](docs/V1AgentsPost422Response.md)
- [V1AgentsPostRequest](docs/V1AgentsPostRequest.md)
- [V1AgentsPostRequestAgent](docs/V1AgentsPostRequestAgent.md)
- [V1GlobalEmbeddingsPost200Response](docs/V1GlobalEmbeddingsPost200Response.md)
- [V1GlobalEmbeddingsPost200ResponseUsage](docs/V1GlobalEmbeddingsPost200ResponseUsage.md)
- [V1GlobalEmbeddingsPostRequest](docs/V1GlobalEmbeddingsPostRequest.md)
- [V1GlobalEmbeddingsPostRequestEmbedding](docs/V1GlobalEmbeddingsPostRequestEmbedding.md)
- [V1KnowledgeBasesIdDelete200Response](docs/V1KnowledgeBasesIdDelete200Response.md)
- [V1KnowledgeBasesIdGet200Response](docs/V1KnowledgeBasesIdGet200Response.md)
- [V1KnowledgeBasesIdGet422Response](docs/V1KnowledgeBasesIdGet422Response.md)
- [V1KnowledgeBasesIdPatch200Response](docs/V1KnowledgeBasesIdPatch200Response.md)
- [V1KnowledgeBasesIdPatch422Response](docs/V1KnowledgeBasesIdPatch422Response.md)
- [V1KnowledgeBasesIdPatchRequest](docs/V1KnowledgeBasesIdPatchRequest.md)
- [V1KnowledgeBasesIdPatchRequestKnowledgeBase](docs/V1KnowledgeBasesIdPatchRequestKnowledgeBase.md)
- [V1KnowledgeBasesIdSearchPost200Response](docs/V1KnowledgeBasesIdSearchPost200Response.md)
- [V1KnowledgeBasesIdSearchPost422Response](docs/V1KnowledgeBasesIdSearchPost422Response.md)
- [V1KnowledgeBasesIdSearchPostRequest](docs/V1KnowledgeBasesIdSearchPostRequest.md)
- [V1KnowledgeBasesPost200Response](docs/V1KnowledgeBasesPost200Response.md)
- [V1KnowledgeBasesPostRequest](docs/V1KnowledgeBasesPostRequest.md)
- [V1KnowledgeBasesPostRequestKnowledgeBase](docs/V1KnowledgeBasesPostRequestKnowledgeBase.md)
- [V1RequestsIdGet200Response](docs/V1RequestsIdGet200Response.md)
- [V1RequestsIdGet404Response](docs/V1RequestsIdGet404Response.md)
- [V1UsersMeGet200Response](docs/V1UsersMeGet200Response.md)
- [V1WorkflowRunsIdGet200Response](docs/V1WorkflowRunsIdGet200Response.md)
- [V1WorkflowRunsIdGet404Response](docs/V1WorkflowRunsIdGet404Response.md)
- [WorkspaceObject](docs/WorkspaceObject.md)

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

- API version: `0.1.3`
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
