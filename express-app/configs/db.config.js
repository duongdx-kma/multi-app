const dotenv = require('dotenv');
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env') })
const env = process.env;

const db = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: env.DB_PORT || 3306,
    ssl: env.APP_ENV == "production" ? {
        rejectUnauthorized: false
    } : undefined
};

module.exports = db;