require("dotenv").config();
const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;

postgresql: module.exports = new Pool({ connectionString });
