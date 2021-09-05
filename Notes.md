# Fineract SDK

An wrapper for fineract api to work in nodejs. The base is generated using [openapi gen](https://github.com/OpenAPITools/openapi-generator) 


# Code Generation

1. `docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/openapi.json -g typescript-axios -o /local -c /local/config.json -t /local/templates`

2. `docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli author template -g typescript-axios -o /local/templates`


## TODO:

1. ~~Generate models and api funcs seperatly, for now getting generating error when we use `withSeparateModelsAndApi` as true.~~
2. Changing the json file using patches.
   1. Mapping of operationIds to custom names (for more readability).