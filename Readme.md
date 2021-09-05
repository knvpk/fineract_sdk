# Fineract SDK

An wrapper for fineract api to work in nodejs. The base is generated using [openapi gen](https://github.com/OpenAPITools/openapi-generator) 


# Code Generation

1. `docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate -i /local/fineract.yaml -g typescript-axios -o /local/src -c /local/config.json`


## TODO:

1. Generate models and api funcs seperatly, for now getting generating error when we use `withSeparateModelsAndApi` as true.
2. Mapping of operationIds to custom names (for more readability).
3. Adding, new params to yaml so that it will generate code for those as well.