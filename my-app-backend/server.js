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
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const rappers = {
  "21 savage": {
    id: 1,
    age: 28,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "chance the rapper": {
    id: 2,
    age: 27,
    birthName: "Chancelor Jonathan Bennett",
    birthLocation: "Chicago, Illinois",
  },
  test: {
    id: 3,
    age: 28,
    birthName: "test",
    birthLocation: "test",
  },
};
// Setting routes for fetch to use in the frontend.
// Query Parameter: listen to any value that is inside the URL

app.get("/api/rappers/:rapperName", (request, response) => {
  const rapName = request.params.rapperName.toLowerCase();

  if (rappers[rapName]) {
    response.json(rappers[rapName]);
  } else {
    response.json(rappers["test"]);
  }
});
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

app.listen(PORT, () => {
  console.log(`yayyy Server running on ${PORT}`);
});
