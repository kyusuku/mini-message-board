require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message TEXT,
    username TEXT,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    // ||
    // `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE}`,
  });
  console.log("Database URL (populatedb): ", process.env.DATABASE_URL);
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
