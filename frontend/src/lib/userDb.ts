import Database from "better-sqlite3";

const userDb = new Database("users.db");

// Create table if not exists
userDb
  .prepare(
    `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`
  )
  .run();

export default userDb;
