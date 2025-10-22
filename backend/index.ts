import express, { Request, Response } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);

interface ContactData {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface NewContactData extends ContactData {
  id: string;
}

// Configure Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"],
});

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", message: "Socket.IO server is running" });
});

// Socket.IO connection handler
io.on("connection", (socket: Socket) => {
  console.log("🟢 Client connected:", socket.id);

  // Handle contact form submission
  socket.on("submitContact", (data: NewContactData) => {
    console.log("📩 Contact form received:", data);

    // Broadcast to all OTHER clients (excluding the sender)
    // This prevents the sender from receiving their own contact twice
    socket.broadcast.emit("newContact", data);

    // Send confirmation back to the sender
    socket.emit("contactSubmitted", {
      success: true,
      message: "Your message has been received!",
    });
  });

  // Handle disconnection
  socket.on("disconnect", (reason: string) => {
    console.log("🔴 Client disconnected:", socket.id, "Reason:", reason);
  });

  // Handle errors
  socket.on("error", (error: Error) => {
    console.error("❌ Socket error:", error);
  });
});

// Error handling
process.on("uncaughtException", (error: Error) => {
  console.error("💥 Uncaught Exception:", error);
});

process.on(
  "unhandledRejection",
  (reason: unknown, promise: Promise<unknown>) => {
    console.error("💥 Unhandled Rejection at:", promise, "reason:", reason);
  }
);

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`🚀 Socket.IO server running on port ${PORT}`);
  console.log(
    `🌐 CORS enabled for: ${
      process.env.FRONTEND_URL || "http://localhost:3000"
    }`
  );
});
