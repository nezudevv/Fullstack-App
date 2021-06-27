// Load the AWS SDK for Node.js
import AWS from "aws-sdk";

// Set the region and etc.
AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "Rappers",
  Item: {
    id: { S: "1" },
    birthName: { S: "chance" },
    stageName: { S: "RiRoe" },
    likes: { S: "11" },
  },
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
