const {SecretsManagerClient, GetSecretValueCommand} = require("@aws-sdk/client-secrets-manager")
const NodeCache = require( "node-cache" );
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env') })
const key = {
    accessKeyId: process.env.AWS_ACCESSKEYID,
    secretAccessKey: process.env.AWS_SECRETKEY
}

const getSecret = async (origin = '') => {
    const value = myCache.get( "myKey" );

    if ( value == undefined ){
        console.log(origin, "Query secret manager.........")
        const obj = await getKey(origin)
        myCache.set( "myKey", obj, 10000 );
        console.log(origin, "DATA CACHEDDDDDDD.........")
        return obj
    }

    console.log(origin, "data from cache.........", value)
    return value
}

const getKey = async (origin = '') => {
    const secret_name = process.env.SECRET_MANAGER_NAME;
    const client = new SecretsManagerClient({
        credentials: process.env.LOCAL_TEST_SECRET_MANAGER == 'yes' ? key : undefined,
        region: process.env.AWS_REGION
    });

    console.log(origin, "GET DATA FROM SECRET MANAGER - client start done")
    try {
        const response = await client.send(
          new GetSecretValueCommand({
              SecretId: secret_name,
              VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
          })
        );
        console.log(origin, "GET DATA FROM SECRET MANAGER - SUCCESSSSSSSSS")

        return JSON.parse(response.SecretString)
    } catch (error) {
        // For a list of exceptions thrown, see
        // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
        console.log("GET DATA FROM SECRET MANAGER - GET key ERRORRRRRRRRR return mock value for testing")

        return { user_name: 'root', password: 'password' } // for local
    }
}

module.exports = {
    getSecret
}