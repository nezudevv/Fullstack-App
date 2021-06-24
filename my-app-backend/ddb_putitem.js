// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-2" });

AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAWHRUE6ZD4NFBXVGT",
  secretAccessKey: "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",
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  TableName: "Rappers",
  Item: {
    id: { S: "2" },
    birthName: { S: "y" },
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
