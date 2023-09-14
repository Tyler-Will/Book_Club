const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
    user: "postgres",
    password: process.env.PASSWORD,
    host: "localhost",
    port: "5432",
    database: "bookclub"
    /*
    user: "postgres",
    password: "I@mTyler",
    host: "localhost",
    port: "5432",
    database: "bookclub"
    */
});


module.exports = pool;