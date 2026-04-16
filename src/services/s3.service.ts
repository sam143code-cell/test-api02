import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: "AKIA123456789ABCD",
  secretAccessKey: "SECRETKEY123456"
});

export const upload = () => {
  return s3.putObject({
    Bucket: "mybucket",
    Key: "file.txt",
    Body: "data"
  }).promise();
};