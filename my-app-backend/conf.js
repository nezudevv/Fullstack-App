import AWS from "aws-sdk";
export const conf = AWS.config.update({
  region: "us-east-2",
  endpoint: "dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAWHRUE6ZDXOEFKNWC",
  secretAccessKey: "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",
});
