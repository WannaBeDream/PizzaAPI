
## To check this App u should run these commands:
# Rest pizza API with ClaudiaJS

Set up you aws credentils at .aws/credentilas with some policies
(DynamoDBfullAccess,GatewayfullAdministrator,LambdafullAccess,IAMfullAccess,AmazonAPIGatewayPushToCloudWatchLogs) IAM at aws console.

1) aws configure
2) npm install
3) npm run create   

If you need to update api use:
npm run update


## Routes
You will take base URI after npm run create command.

# Get => baseURI
# Get => baseURI/{name}
# Get => baseURI/pizzas
# Get => baseURI/pizzas/{id}