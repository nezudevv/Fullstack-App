import express from "express";
import cors from "cors";
import { accessKeyId, sAccessKey } from "./conf.js";
import { getRappers, deleteRapper, addOrUpdateRapper } from "./dynamo.js";
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

app.post("/api", async (req, res) => {
  const rapper = req.body;
  try {
    const newRapper = await addOrUpdateRapper(rapper);
    res.json(newRapper);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/rappers/:id", async (req, res) => {
  const rapper = req.body;
  const { id } = req.params;
  console.log(req);
  rapper.id = id;
  try {
    const updatedRappers = await addOrUpdateRapper(rapper);
    res.json(updatedRappers);
  } catch (err) {
    console.log("error while updating rapper: ", err);
  }
});

// Post
// app.post("/api", (request, response) => {
//   const data = request.body;

//   const params = {
//     TableName: "Rappers",
//     Item: {
//       id: data.id,
//       birthName: data.birthName,
//       stageName: data.stageName,
//       // likes: { S: "11" },
//     },
//   };
//   ddb.put(params, function (err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Success", data);
//     }
//   });
// });

// Delete
app.delete("/api/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    res.json(await deleteRapper(id));
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/rappers/:id", async (req, res) => {
  const rapper = req.body;
  const { id } = req.params;
  rapper.id = id;
  try {
    const updatedRappers = await addOrUpdateRapper(rapper);
    res.json(updatedRappers);
  } catch (err) {
    console.log(err);
  }
});
// app.get("/rappers/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const rappers = await addOrUpdateRapper(id);
//     res.json(rappers);
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(PORT, () => {
  console.log(`yayyy Server running on ${PORT}`);
});
