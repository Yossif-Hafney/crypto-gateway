# Socket.IO Server Setup

This server handles real-time communication for the contact form.

## Installation

```bash
cd server
npm install
```

## Configuration

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Update the values:

- `PORT`: Server port (default: 3001)
- `FRONTEND_URL`: Your frontend URL (default: http://localhost:3000)

## Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

## Testing the Connection

1. Start the Socket.IO server (port 3001)
2. Start your Next.js frontend (port 3000)
3. Open the contact page: http://localhost:3000/contact
4. Check the browser console - you should see:
   ```
   🟢 Connected to Socket.IO server: [socket-id]
   ```

## How It Works

### Client Side (ContactForm.tsx)

- Automatically connects when the component mounts
- Listens for real-time contact submissions
- Shows connection status in console

### Server Side (index.js)

- Accepts WebSocket connections
- Handles `submitContact` events
- Broadcasts `newContact` to all clients
- Sends `contactSubmitted` confirmation

## Events

### Client → Server

- `submitContact`: Send contact form data

### Server → Client

- `newContact`: Broadcast new contact to all clients
- `contactSubmitted`: Confirmation back to sender
- `connect`: Connection established
- `disconnect`: Connection closed
- `connect_error`: Connection error

## Troubleshooting

### "websocket error" in console

- Make sure the Socket.IO server is running on port 3001
- Check that `NEXT_PUBLIC_SOCKET_URL` is set correctly
- Verify CORS settings in server

### Connection timeout

- Ensure firewall allows port 3001
- Check if server is actually listening
- Verify frontend URL in server's CORS config

### CORS errors

- Update `FRONTEND_URL` in server's `.env`
- Check server console for CORS logs
