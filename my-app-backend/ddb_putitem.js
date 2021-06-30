// import { accessKeyId, sAccessKey } from "./conf.js";
// Load the AWS SDK for Node.js
// import AWS from "aws-sdk";
// import express from "express";

// const app = express();

// Set the region and etc.
// AWS.config.update({
//   region: "us-east-2",
//   endpoint: "dynamodb.us-east-2.amazonaws.com",
//   accessKeyId: accessKeyId,
//   secretAccessKey: sAccessKey,
// });

// Create the DynamoDB service object
// var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

// app.post("/api", (request, response) => {
//   console.log(request.body);
//   const data = request.body;
//   const params = {
//     TableName: "Rappers",
//     Item: {
//       id: { S: data.id },
//       birthName: { S: data.birthName },
//       // stageName: { S: "RiRoe" },
//       // likes: { S: "11" },
//     },
//   };
//   ddb.putItem(params, function (err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data);
//     }
//   });
// });

// Call DynamoDB to add the item to the table
// ddb.putItem(params, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });
