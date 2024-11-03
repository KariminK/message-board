const { Client } = require("pg");

const query = `CREATE TABLE IF NOT EXISTS message(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
  username VARCHAR(100) NOT NULL, 
  text VARCHAR(500) NOT NULL,
  date TIMESTAMP NOT NULL
);
INSERT INTO message(username, text, date) VALUES ('Ava', 'Hello there', '2024-10-24')`;

async function populatedb() {
  console.log("started populating db");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
    ssl: true,
  });
  await client.connect();
  await client.query(query);
  await client.end();
  console.log("done");
}
populatedb();
