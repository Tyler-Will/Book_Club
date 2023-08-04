const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password:"I@mTyler",
    host: "localhost",
    database: "bookclub"
});


module.exports = pool;