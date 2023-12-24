const knex = require("knex");
const knexFile = require("../knexfile.js");
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, './.env') })
const environment = process.env.APP_ENV || "development";

module.exports = knex(knexFile[environment]);