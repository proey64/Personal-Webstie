export default {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "sam-user-profile-images"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: " https://0y8abbn594.execute-api.us-east-1.amazonaws.com/prod/message"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_zFSzVnOpA",
    APP_CLIENT_ID: "34gn3i1ei943cfd2p4qjr358u5",
    IDENTITY_POOL_ID: "us-east-1:b808d6ce-cedc-4c77-b275-2b2d7ef6ccdd"
  }
};
