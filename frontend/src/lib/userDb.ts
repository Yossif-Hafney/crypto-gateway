import { Pool } from "pg";

// Create PostgreSQL connection pool
const userDb = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // Disable SSL for local PostgreSQL
});

// Create users table if not exists
const initUserDb = async () => {
  const client = await userDb.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ PostgreSQL users table ready");
  } catch (error) {
    console.error("❌ Failed to initialize users table:", error);
  } finally {
    client.release();
  }
};

// Initialize database on startup
initUserDb();

export default userDb;
