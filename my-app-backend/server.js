import express from "express";
import cors from "cors";
import { accessKeyId, sAccessKey } from "./conf.js";
import AWS from "aws-sdk";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "1mb" }));

AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: accessKeyId,
  secretAccessKey: sAccessKey,
});
var ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

// CONTROLLERS!!!

// Post
app.post("/api", (request, response) => {
  console.log(request.body);
  const data = request.body;

  const params = {
    TableName: "Rappers",
    Item: {
      id: { S: data.id },
      birthName: { S: data.birthName },
      stageName: { S: data.stageName },
      // likes: { S: "11" },
    },
  };
  ddb.putItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
});

// Read
app.get("/api/info", (request, response) => {
  console.log("res", response.body);
  console.log("req", request.body);
  const data = request.body;
  // use projection-expression to grab certain attributes
  const params = {
    TableName: "Rappers",
    Key: { id: "id" },
  };
  ddb.get(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`yayyy Server running on ${PORT}`);
});
