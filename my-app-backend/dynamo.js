import AWS from "aws-sdk";
import { accessKeyId, sAccessKey } from "./conf.js";

AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: accessKeyId,
  secretAccessKey: sAccessKey,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Rappers";

// CRUD
const getRappers = async () => {
  const params = {
    TableName: TABLE_NAME,
  };
  const rappers = await dynamoClient.scan(params).promise();
  console.log(rappers);
  return rappers;
};

const deleteRapper = async id => {
  const params = {
    TableName: TABLE_NAME,
    Key: {
      id,
    },
  };
  return await dynamoClient.delete(params).promise();
};

const addOrUpdateRapper = async rapper => {
  const params = {
    TableName: TABLE_NAME,
    Item: rapper,
  };
  return await dynamoClient.put(params).promise();
};

// const getRapperById = async id => {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: {
//       id,
//     },
//   };
//   return await dynamoClient.put(params).promise();
// };

export { getRappers, deleteRapper, addOrUpdateRapper };
