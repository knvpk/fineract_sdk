# Fineract SDK

An wrapper for fineract api to work in nodejs. The base is generated using [openapi gen](https://github.com/OpenAPITools/openapi-generator) 

### Notes

1. Install using `npm i fineract_sdk`
2. Usage in javascript
```
  const fin = require('fineract_sdk');

  let usersApi = new fin.UsersApi(cbsConfig);
  response = await usersApi.retrieveAll();
  
  console.log(response.data)
```

### TODO:

1. ~~Generate models and api funcs seperatly, for now getting generating error when we use `withSeparateModelsAndApi` as true.~~
2. ~~Changing the json file using patches.~~ (Solved usong json-patch library to modify base.json)
   1. Mapping of operationIds to custom names (for more readability).
3. Either provide name for inline object or move the objects to schemas in which we can gove it a name.