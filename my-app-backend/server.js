import express from "express";
import cors from "cors";
import { accessKeyId, sAccessKey } from "./conf.js";
import { getRappers } from "./dynamo.js";
import AWS from "aws-sdk";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
// limit: "1mb"
app.use(express.json());

AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: accessKeyId,
  secretAccessKey: sAccessKey,
});
var ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

// CONTROLLERS!!!

// Read
app.get("/api/rappers", async (request, response) => {
  console.log(response.body);
  try {
    const rappers = await getRappers();
    response.json(rappers);
  } catch (error) {
    console.log(error);
  }
});

// Post
app.post("/api", (request, response) => {
  console.log(request.body);
  const data = request.body;

  const params = {
    TableName: "Rappers",
    Item: {
      id: data.id,
      birthName: data.birthName,
      stageName: data.stageName,
      // likes: { S: "11" },
    },
  };
  ddb.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
});

// const getRappers = async () => {
//   const params = {
//     TableName: "Rappers",
//     // Key: { id: "id" },
//   };
//   const rappers = await ddb.scan(params).promise();
//   console.log(rappers);
//   return rappers;
// };

// getRappers();
app.listen(PORT, () => {
  console.log(`yayyy Server running on ${PORT}`);
});
