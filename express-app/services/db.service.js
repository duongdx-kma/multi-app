const dbConfig = require('../configs/db.config');
const mysql = require('mysql2/promise');
const getSecret = require("./secret-manager-service")

async function query(sql, params) {
    const dbInfo = await getSecret.getSecret();
    console.log(dbInfo, 99999)
    console.log(typeof dbInfo, 99999, "type of dbInfo")
    if (dbConfig.ssl) {
        dbConfig.password = dbInfo.password
        dbConfig.user = dbInfo.username
    }
    console.log(dbConfig, sql, params)
    const connection = await mysql.createConnection(dbConfig);
    const [results, ] = await connection.query(sql, params);

    return results;
}

module.exports = {
    query
}