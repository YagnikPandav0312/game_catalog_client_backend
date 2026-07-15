const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function inspect() {
  const client = await pool.connect();
  try {
    console.log("Connected to database successfully.\n");

    const query = `
      SELECT n.nspname AS schema_name,
             p.proname AS function_name,
             pg_catalog.pg_get_function_arguments(p.oid) AS arguments,
             pg_catalog.pg_get_functiondef(p.oid) AS definition
      FROM pg_proc p
      JOIN pg_namespace n ON p.pronamespace = n.oid
      WHERE p.proname = 'get_games';
    `;
    const res = await client.query(query);
    for (const row of res.rows) {
      console.log(`Schema: ${row.schema_name} | Function: ${row.function_name}`);
      console.log(`Arguments: ${row.arguments}`);
      console.log(`-----------------------------------------`);
      console.log(row.definition);
      console.log("\n=========================================\n");
    }

  } catch (err) {
    console.error("Inspection error:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

inspect();
