const mysql = require('mysql');
const dotenv = require('dotenv')
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const util = require('util');

//connection method
const conn = mysql.createConnection({
    password: process.env.PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

const pool = util.promisify(conn.query).bind(conn)

module.exports = pool;
