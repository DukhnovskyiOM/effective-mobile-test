const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Dom0935924729#",
    host: "localhost",
    port: 5432,
    database: "pernusers"
})

module.exports = pool