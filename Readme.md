# Fineract SDK

An wrapper for fineract api to work in nodejs. The base is generated using [openapi gen](https://github.com/OpenAPITools/openapi-generator) 

### Notes

1. Install using `npm i fineract_sdk`
2. Usage 
```
  let usersApi = new fin.UsersApi(cbsConfig);
  response = await usersApi.retrieveAll();
  console.log(response.data)
```

### Code Generation

1. `docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/openapi.json -g typescript-axios -o /local -c /local/config.json -t /local/templates --skip-validate-spec`

2. `docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli author template -g typescript-axios -o /local/templates`


### TODO:

1. ~~Generate models and api funcs seperatly, for now getting generating error when we use `withSeparateModelsAndApi` as true.~~
2. ~~Changing the json file using patches.~~ (Solved usong json-patch library to modify base.json)
   1. Mapping of operationIds to custom names (for more readability).