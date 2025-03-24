#!/bin/bash
# download the latest swagger definition file
curl -o swagger.json https://petstore.swagger.io/v2/swagger.json
# remove the existing api folder
npx rimraf projects/api/src/lib
# generate the api client
npx openapi-generator-cli generate --generator-key=pet-store-api
# delete the swagger definition file
rm ./swagger.json