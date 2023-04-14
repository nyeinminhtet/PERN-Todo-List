const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "anni27420",
  database: "perntodo",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
