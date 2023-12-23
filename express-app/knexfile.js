// Update with your config settings.
const getSecret = require("./services/secret-manager-service")
const env = process.env
const returnSequelizeConfig = async () => {
  const dbInfo = await getSecret.getSecret();

  return {
    development: {
      client: "mysql2",
      connection: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
      },
      seed: {
        directory: __dirname + "/db/migrations",
      },
      migrations: {
        directory:  __dirname + "/migrations",
      }
    },

    production: {
      client: "mysql2",
      connection: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: dbInfo.password,
        database: env.DB_NAME,
      },
      seed: {
        directory: __dirname + "/db/migrations",
      },
      migrations: {
        directory:  __dirname + "/migrations",
      }
    }
  }
}

module.exports = returnSequelizeConfig;
