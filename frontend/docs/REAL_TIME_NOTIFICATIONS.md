# Real-Time Notifications System

## Overview

This document describes the real-time contact form notification system implemented using Socket.IO, Redux, and SQLite.

---

## Architecture

### Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **State Management**: Redux Toolkit with Redux Persist
- **Real-time Communication**: Socket.IO (Client 4.8.1)
- **Backend**: Socket.IO Server (4.7.2, TypeScript)
- **Database**: SQLite3 (better-sqlite3) with WAL mode

### Data Flow

```
Contact Form Submission
    ↓
1. Validate with reCAPTCHA (contactAction)
    ↓
2. POST to /api/contact → Write to SQLite
    ↓
3. Emit Socket.IO event (emitContact)
    ↓
4. Socket.IO Server receives event → Broadcasts to all clients
    ↓
5. Dashboard receives event → Dispatches to Redux store
    ↓
6. Redux updates state → UI re-renders with new notification
```

---

## Components Structure

### Frontend Components

```
src/app/(dashboard)/dashboard/notifications/
├── page.tsx                          # Main notifications page
├── Components/
│   ├── NotificationHeader.tsx        # Header with title and status
│   ├── ConnectionStatus.tsx          # Live/Offline indicator
│   ├── ReconnectBanner.tsx          # Reconnection notification banner
│   ├── NotificationActions.tsx      # Mark all read / Clear all buttons
│   ├── NotificationCard.tsx         # Individual notification card
│   └── EmptyState.tsx               # Empty state UI
└── hooks/
    ├── useNotifications.ts          # Redux hooks for notifications
    └── useSocketConnection.ts       # Socket connection state hook
```

### Backend Structure

```
server/
├── index.ts                         # Socket.IO server (TypeScript)
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Dependencies

frontend/src/
├── lib/
│   ├── socket.ts                    # Socket.IO client singleton
│   ├── socketListener.ts            # Socket event handlers
│   ├── fetchContacts.ts             # Fetch contacts from database
│   ├── contactDb.ts                 # SQLite database (contacts)
│   └── userDb.ts                    # SQLite database (users)
├── store/
│   ├── store.ts                     # Redux store with persist
│   └── contactSlice.ts              # Contact notifications reducer
└── context/
    └── providers.tsx                # Redux Provider + Socket init
```

---

## Key Features

### 1. Real-Time Notifications

- Socket.IO broadcasts contact submissions to all connected clients
- Redux store updates automatically
- UI re-renders with new notifications instantly

### 2. Persistent State

- Redux Persist saves notifications to localStorage
- Notifications persist across page reloads
- Configured to ignore serialization warnings for Redux Persist actions

### 3. Database Integration

- SQLite with WAL (Write-Ahead Logging) mode for concurrent access
- 5-second busy timeout to prevent lock errors
- Contacts stored in `contact.db`, users in `users.db`

### 4. Auto-Reconnection

- Socket automatically reconnects when server restarts
- Fetches latest contacts from database on reconnect
- Shows reconnection banner with "Reload Page" option
- Banner only appears on actual reconnections (not first page load)

### 5. Duplicate Prevention

- Checks email + timestamp before adding new contacts
- Prevents same contact appearing twice (from DB load + socket event)

---

## Implementation Details

### Socket.IO Server (server/index.ts)

```typescript
// Contact submission handler
socket.on("submitContact", (data: ContactData) => {
  const newContactData: NewContactData = {
    id: socket.id,
    ...data,
    timestamp: new Date().toISOString(),
  };

  // Broadcast to all clients
  io.emit("newContact", newContactData);
});
```

**Environment Variables:**

- `FRONTEND_URL`: Frontend origin (default: http://localhost:3000)
- `PORT`: Server port (default: 3001)

### Socket.IO Client (src/lib/socket.ts)

```typescript
// Singleton pattern
let socket: ReturnType<typeof io> | null = null;

export const getSocket = () => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001");
  }
  return socket;
};
```

**Environment Variables:**

- `NEXT_PUBLIC_SOCKET_URL`: Socket.IO server URL

### Redux Store (src/store/contactSlice.ts)

**Actions:**

- `addContact`: Add new contact (with duplicate check)
- `loadContacts`: Load all contacts from database
- `markAsRead`: Mark single notification as read
- `markAllAsRead`: Mark all notifications as read
- `clearAll`: Clear all notifications from view

**State Structure:**

```typescript
interface ContactState {
  items: Contact[];
}

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  isRead?: boolean;
}
```

### Database Configuration

**WAL Mode Benefits:**

- Multiple readers + 1 writer simultaneously
- No database lock errors
- Better performance for concurrent access

**contactDb.ts:**

```typescript
db.pragma("journal_mode = WAL");
db.pragma("busy_timeout = 5000");
```

### API Routes

**GET /api/contact**

- Fetches all contacts from database
- Returns contacts ordered by creation date (DESC)
- Maps `companyName` → `name`, `createdAt` → `timestamp`

**POST /api/contact**

- Validates required fields (companyName, email, message)
- Inserts contact into SQLite
- Returns success/error response

---

## User Flow

### Submitting a Contact

1. User fills contact form at `/contact`
2. Client validates with Zod schema
3. reCAPTCHA v3 verifies (score > 0.5)
4. Server action validates reCAPTCHA token
5. API route writes to SQLite database
6. Socket event emitted to server
7. Server broadcasts to all connected clients
8. Dashboard receives and displays notification

### Viewing Notifications

1. User navigates to `/dashboard/notifications`
2. `useNotifications` hook fetches contacts from `/api/contact`
3. Redux store loads contacts
4. Socket listener initialized for real-time updates
5. New contacts appear automatically via socket events

### Server Reconnection

1. Server stops → Socket disconnects → Status shows "Offline"
2. Server restarts → Socket reconnects automatically
3. `fetchContactsFromDB()` called on reconnect
4. Green banner appears: "Server reconnected! New updates available."
5. User can:
   - Click "Reload Page" → Full page refresh
   - Click "✕" → Dismiss banner (data already loaded)

---

## Configuration

### Socket.IO Server

**Start server:**

```bash
cd server
npm install
npm run dev
```

**Production:**

```bash
npm run build
npm start
```

### Frontend

**Environment variables (.env.local):**

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
RECAPTCHA_SECRET_KEY=your_recaptcha_secret
```

---

## Production Build & Testing

### Building for Production

#### 1. Build Socket.IO Server

```bash
cd server
npm install
npm run build
```

This compiles TypeScript to JavaScript in the `dist` folder.

#### 2. Build Next.js Frontend

```bash
cd frontend
npm install
npm run build
```

This creates an optimized production build in the `.next` folder.

### Running Production Build Locally

#### 1. Start Socket.IO Server (Production Mode)

```bash
cd server
npm start
```

Server runs on port 3001 (or PORT env variable)

#### 2. Start Next.js Frontend (Production Mode)

```bash
cd frontend
npm run start
```

Frontend runs on port 3000 (default)

### Environment Variables for Production

**Frontend (.env.production):**

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
RECAPTCHA_SECRET_KEY=your_production_recaptcha_secret
```

**Socket.IO Server (.env):**

```env
PORT=3001
FRONTEND_URL=http://localhost:3000
NODE_ENV=production
```

### Testing Production Build

**Complete test flow:**

```bash
# Terminal 1: Build and start Socket.IO server
cd server
npm run build
npm start

# Terminal 2: Build and start Next.js
cd frontend
npm run build
npm run start

# Open browser
# Navigate to http://localhost:3000
```

**Verify:**

1. ✅ No TypeScript compilation errors
2. ✅ Socket connects (check browser console)
3. ✅ Submit contact form → notification appears
4. ✅ Database writes succeed (no lock errors)
5. ✅ Redux Persist works (reload page, data persists)
6. ✅ Real-time updates work across tabs

### Production Optimization Checklist

- [ ] Enable HTTPS for Socket.IO server
- [ ] Update CORS origin to production domain
- [ ] Use production reCAPTCHA keys
- [ ] Set secure environment variables
- [ ] Enable database backups (SQLite files)
- [ ] Configure reverse proxy (nginx/Apache)
- [ ] Enable compression (gzip)
- [ ] Set proper cache headers
- [ ] Monitor server logs
- [ ] Set up error tracking (Sentry, etc.)

### Deployment Options

#### Option 1: Traditional Server (VPS/Dedicated)

**Socket.IO Server:**

```bash
# Install PM2 for process management
npm install -g pm2

# Start server with PM2
cd server
pm2 start dist/index.js --name "socket-server"
pm2 save
pm2 startup
```

**Next.js Frontend:**

```bash
# Start with PM2
cd frontend
pm2 start npm --name "nextjs-app" -- start
```

#### Option 2: Docker

**Create `docker-compose.yml`:**

```yaml
version: "3.8"

services:
  socket-server:
    build: ./server
    ports:
      - "3001:3001"
    environment:
      - PORT=3001
      - FRONTEND_URL=http://localhost:3000
    restart: unless-stopped

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
    depends_on:
      - socket-server
    restart: unless-stopped
```

**Run with Docker:**

```bash
docker-compose up -d
```

#### Option 3: Cloud Platforms

**Vercel (Frontend only):**

```bash
cd frontend
vercel --prod
```

**Render/Railway/Fly.io (Socket.IO Server):**

- Deploy from Git repository
- Set environment variables in dashboard
- Auto-builds on push

### Performance Testing

**Load Testing Socket.IO:**

```bash
# Install artillery
npm install -g artillery

# Create test.yml
artillery quick --count 100 --num 10 http://localhost:3001
```

**Monitor Database:**

```bash
# Check database size
cd frontend
dir contact.db

# Query contacts count
sqlite3 contact.db "SELECT COUNT(*) FROM contacts;"
```

---

## Troubleshooting

### Database Lock Errors

**Symptoms:**

- Error: `SQLITE_BUSY: database is locked`
- Failed contact submissions

**Solutions:**
✅ WAL mode enabled in `contactDb.ts` and `userDb.ts`
✅ Busy timeout set to 5000ms
✅ Separate database files for contacts and users

### Socket Connection Issues

**Symptoms:**

- Status shows "Offline"
- No real-time updates

**Check:**

1. Socket.IO server running on port 3001
2. `NEXT_PUBLIC_SOCKET_URL` matches server URL
3. CORS configured correctly on server
4. Browser console for connection errors

### Redux Persist Warnings

**Symptoms:**

- Console warnings about non-serializable values

**Solution:**
✅ Fixed in `store.ts` with `serializableCheck` config:

```typescript
serializableCheck: {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
}
```

### Duplicate Notifications

**Symptoms:**

- Same contact appears multiple times

**Solution:**
✅ Duplicate check in `addContact` reducer:

```typescript
const exists = state.items.some(
  (c) =>
    c.email === action.payload.email && c.timestamp === action.payload.timestamp
);
```

---

## Testing

### Manual Testing Checklist

- [ ] Submit contact form → Notification appears in dashboard
- [ ] Multiple browser tabs → All tabs receive notification
- [ ] Reload page → Notifications persist (Redux Persist)
- [ ] Stop server → Status shows "Offline"
- [ ] Start server → Status shows "Live" + reconnect banner
- [ ] Click "Reload Page" → Page refreshes
- [ ] Click "✕" → Banner dismisses
- [ ] Mark as read → Notification marked
- [ ] Mark all as read → All notifications marked
- [ ] Clear all → All notifications removed from view

### Test Scenarios

**Scenario 1: New Contact Submission**

1. Open dashboard notifications page
2. Submit contact form in another tab
3. Verify notification appears without reload
4. Check SQLite database has new entry

**Scenario 2: Server Restart**

1. Open dashboard notifications page
2. Add contacts to database manually (while server running)
3. Stop Socket.IO server
4. Verify status shows "Offline"
5. Start Socket.IO server
6. Verify reconnect banner appears
7. Verify new contacts loaded from database

**Scenario 3: Page Reload**

1. Add notifications to Redux store
2. Reload page
3. Verify notifications still visible (Redux Persist)
4. Verify no reconnect banner on first load

---

## Performance Considerations

### Optimizations

1. **Socket Singleton**: Only one socket connection per client
2. **Redux Memoization**: `useSelector` only re-renders on state changes
3. **WAL Mode**: Better SQLite performance for concurrent reads
4. **Component Separation**: Small, focused components for better re-render performance

### Scalability

**Current Limitations:**

- SQLite suitable for small-medium traffic
- All contacts loaded on dashboard mount
- Socket.IO server single instance

**Future Improvements:**

- Pagination for contacts (load 20 at a time)
- PostgreSQL/MySQL for production
- Socket.IO Redis adapter for multiple server instances
- Lazy loading for old notifications

---

## Security

### Current Measures

1. **reCAPTCHA v3**: Prevents spam submissions
2. **Server-side Validation**: Validates all inputs
3. **CORS**: Restricted to frontend origin
4. **SQL Injection**: Protected by parameterized queries

### Recommendations

- Add authentication for dashboard access
- Rate limiting on contact form submissions
- Input sanitization for contact messages
- HTTPS in production

---

## Future Enhancements

### Planned Features

- [ ] Notification sound on new contact
- [ ] Desktop notifications (browser API)
- [ ] Email alerts for new contacts
- [ ] Export contacts to CSV
- [ ] Search/filter notifications
- [ ] Archive old notifications
- [ ] Admin panel for contact management

### Technical Improvements

- [ ] WebSocket connection retry logic
- [ ] Offline queue for failed submissions
- [ ] Server-side notification storage
- [ ] TypeScript strict mode
- [ ] Unit tests for Redux actions
- [ ] E2E tests with Playwright

---

## Changelog

### October 22, 2025

**Added:**

- Socket.IO real-time notifications
- Redux Toolkit state management
- Redux Persist for notification persistence
- SQLite database with WAL mode
- Reconnection detection and banner
- Duplicate contact prevention
- Component separation (7 components + 2 hooks)
- Shared `fetchContactsFromDB` utility

**Fixed:**

- Database lock errors (WAL mode + busy timeout)
- Redux Persist serialization warnings
- Duplicate notifications (email + timestamp check)
- Reconnect banner on page reload (useRef tracking)

**Improved:**

- Code organization (separated components)
- Type safety (TypeScript across frontend + server)
- Error handling (try/catch in all async operations)

---

## Contact

For questions or issues, please refer to the project documentation or contact the development team.

**Project Repository:** [Add your repo link here]
**Documentation:** `/docs/REAL_TIME_NOTIFICATIONS.md`
