require("dotenv").config();
const { Pool } = require("pg");

const connectionString =
  "postgresql://postgres:zedQYEJaxUjiLkciKvIiEmGfZhOoUYTv@tramway.proxy.rlwy.net:28667/railway";

console.log("Database URL: ", connectionString);
//postgres:zedQYEJaxUjiLkciKvIiEmGfZhOoUYTv@tramway.proxy.rlwy.net:28667/railway
// ||
// `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`;

postgresql: module.exports = new Pool({ connectionString });
