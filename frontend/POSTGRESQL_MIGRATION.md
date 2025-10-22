# PostgreSQL Migration Guide

## ✅ Code Changes Completed

All code has been updated to use PostgreSQL instead of SQLite.

## 📋 Next Steps (Manual Actions Required)

### 1. Install Dependencies

```cmd
cd "c:\Users\engyo\OneDrive\Desktop\Crypto Gateway\frontend"
npm install pg
npm install @types/pg -D
```

### 2. Set Up PostgreSQL Database

#### Option A: Local PostgreSQL (Windows)

1. **Download & Install PostgreSQL:**

   - Download from: https://www.postgresql.org/download/windows/
   - Install with default settings
   - Remember the password you set for `postgres` user

2. **Create Database:**
   ```cmd
   psql -U postgres
   ```
   Then in psql:
   ```sql
   CREATE DATABASE crypto_gateway;
   \q
   ```

#### Option B: Cloud PostgreSQL (Recommended for Easy Setup)

Choose one of these free services:

**Neon (Recommended - Easiest):**

1. Go to: https://neon.tech/
2. Sign up (free tier available)
3. Create a new project
4. Copy the connection string (looks like: `postgresql://user:pass@host/db`)

**Supabase:**

1. Go to: https://supabase.com/
2. Sign up and create project
3. Get connection string from Settings → Database

**Railway:**

1. Go to: https://railway.app/
2. Create PostgreSQL database
3. Copy connection string

### 3. Configure Environment Variables

Create `.env.local` file in the frontend folder:

```env
# Replace with your actual PostgreSQL connection string
DATABASE_URL=postgresql://username:password@localhost:5432/crypto_gateway

# Or if using cloud service (Neon, Supabase, etc):
# DATABASE_URL=postgresql://user:pass@host.region.provider.com/dbname

NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

### 4. Test the Connection

Start your app:

```cmd
npm run dev
```

You should see in the console:

```
✅ PostgreSQL contacts table ready
```

### 5. Remove Old SQLite Files (Optional)

After confirming PostgreSQL works:

- Delete `contact.db`
- Delete `contact.db-shm`
- Delete `contact.db-wal`
- Uninstall: `npm uninstall better-sqlite3`

## 🔄 What Changed

### Database File (`contactDb.ts`)

- ✅ Changed from `better-sqlite3` to `pg` (PostgreSQL pool)
- ✅ Updated table schema (SERIAL, BOOLEAN, TIMESTAMP)
- ✅ Async database initialization

### API Routes

- ✅ `GET /api/contact` - Uses `db.query()` with `result.rows`
- ✅ `POST /api/contact` - Uses parameterized queries ($1, $2, $3)
- ✅ `PATCH /api/contact/[id]` - Uses parameterized queries

### Redux Store

- ✅ `contactSlice.ts` - Updated to handle PostgreSQL boolean (no conversion needed)

### No Changes Required

- ✅ Socket.IO server (works as-is)
- ✅ Socket.IO client (works as-is)
- ✅ All React components (work as-is)
- ✅ All hooks (work as-is)
- ✅ Real-time notifications (work as-is)

## 🎯 Key Differences: SQLite → PostgreSQL

| Feature            | SQLite                   | PostgreSQL                |
| ------------------ | ------------------------ | ------------------------- |
| **Connection**     | `new Database()`         | `new Pool()`              |
| **Queries**        | `db.prepare().run()`     | `await db.query()`        |
| **Parameters**     | `?` placeholders         | `$1, $2, $3` placeholders |
| **Auto-increment** | `AUTOINCREMENT`          | `SERIAL`                  |
| **Boolean**        | `INTEGER (0/1)`          | `BOOLEAN (true/false)`    |
| **Timestamp**      | `datetime('now')`        | `CURRENT_TIMESTAMP`       |
| **Results**        | `stmt.all()`             | `result.rows`             |
| **Insert ID**      | `result.lastInsertRowid` | `RETURNING id`            |
| **Async**          | Synchronous              | Asynchronous (await)      |

## ✅ Benefits of PostgreSQL

1. **No locking issues** - Handles concurrent connections perfectly
2. **Production ready** - Used by major apps worldwide
3. **Better performance** - Faster for complex queries
4. **Network access** - Can scale across multiple servers
5. **Advanced features** - Full-text search, JSON support, etc.

## 🔍 Troubleshooting

**Connection refused:**

- Check if PostgreSQL is running
- Verify connection string in `.env.local`

**"database does not exist":**

- Create the database: `CREATE DATABASE crypto_gateway;`

**Authentication failed:**

- Check username and password in connection string

**Need help?**

- Check PostgreSQL logs
- Test connection: `psql -U postgres -d crypto_gateway`
