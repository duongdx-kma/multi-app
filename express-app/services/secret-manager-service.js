const {SecretsManagerClient, GetSecretValueCommand} = require("@aws-sdk/client-secrets-manager")

const key = {
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETKEY
}
const getSecret = async () => {
    // const secret_name = process.env.SECRET_MANAGER_NAME;
    // const client = new SecretsManagerClient({
    //     credentials: process.env.APP_ENV == 'development' ? key : undefined,
    //     region: process.env.AWS_REGION
    // });
    //
    // let response;
    // console.log("client start done")
    // try {
    //     response = await client.send(
    //         new GetSecretValueCommand({
    //             SecretId: secret_name,
    //             VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    //         })
    //     );
    // } catch (error) {
    //     // For a list of exceptions thrown, see
    //     // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    //     throw error;
    // }
    //
    // return JSON.parse(response.SecretString);
    return { user_name: 'root', password: 'password111' }
}

module.exports = {
    getSecret
}