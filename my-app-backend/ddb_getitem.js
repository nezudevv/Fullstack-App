import { accessKeyId, sAccessKey } from "./conf.js";

// Load the AWS SDK for Node.js
import AWS from "aws-sdk";

// Set the region and etc.
AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: accessKeyId,
  secretAccessKey: sAccessKey,
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "Rappers",
  Key: {
    id: { S: "2" },
  },
  ProjectionExpression: "birthName",
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});
