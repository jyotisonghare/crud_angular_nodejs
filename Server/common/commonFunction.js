var mysql = require('mysql'); 


const DB_HOST = process.env.DBHOST;
const DB_PORT = process.env.DBPORT;
const DB_NAME = process.env.DBNAME;
const DB_USER = process.env.DBUSER;
const DB_PASSWORD = process.env.DBPASSWORD;

 exports.apiPORT = process.env.PORT;
exports.pool = mysql.createPool({
    connectionLimit: 1000,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout  : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    multipleStatements: true
  });