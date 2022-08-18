import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";


const upload = async (file, uuid) => {
  // const target = { Bucket: process.env.REACT_APP.AWS_S3_BUCKET_NAME, Key:file.path, Body: file }
  // const creds = {
  //     accessKeyId: process.env.REACT_APP_AWS_S3_ACCESS_KEY_ID ,
  //     secretAccessKey: process.env.REACT_APP_AWS_S3_SECRET_ACCESS_KEY
  // }
  const target = { Bucket: "hidden-treasures-images", Key: uuid, Body: file };
  const creds = {
    accessKeyId: "AKIAZ6QP6ODRVJM4DHE7",
    secretAccessKey: "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",
  };
  try {
    const parallelUploads3 = new Upload({
      client: new S3Client({ region: "us-east-1", credentials: creds }),
      // client:  new S3Client({region: process.env.REACT_APP.AWS_S3_REGION, credentials: creds}),
      params: target,
      leavePartsOnError: false,
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      // console.log(progress);
    });
    await parallelUploads3.done();
  } catch (e) {
    // console.log(e);
  }
}


export default upload;