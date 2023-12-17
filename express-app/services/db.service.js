const dbConfig = require('../configs/db.config');
const mysql = require('mysql2/promise');

async function query(sql, params) {
    console.log(dbConfig, sql, params)
    const connection = await mysql.createConnection(dbConfig);
    const [results, ] = await connection.query(sql, params);

    return results;
}

module.exports = {
    query
}