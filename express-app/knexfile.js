// Update with your config settings.
const getSecret = require("./services/secret-manager-service")
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env') })
const env = process.env
const returnSequelizeConfig = async () => {
  const dbInfo = await getSecret.getSecret("Knex - migrate or seed");
  const isProd = process.env.APP_ENV == "production";

  return {
    "development": {
      client: "mysql2",
      connection: {
        host: env.DB_HOST,
        user: isProd ? dbInfo.user_name : env.DB_USER,
        password: isProd ? dbInfo.password : env.DB_PASSWORD,
        database: env.DB_NAME,
      },
      seed: {
        directory: __dirname + "/db/migrations",
      },
      migrations: {
        directory:  __dirname + "/migrations",
      }
    },
  }
}

module.exports = returnSequelizeConfig;
