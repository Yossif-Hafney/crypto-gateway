"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// Configure Socket.IO with CORS
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    },
    transports: ["websocket", "polling"],
});
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
// Health check endpoint
app.get("/health", (_req, res) => {
    res.json({ status: "ok", message: "Socket.IO server is running" });
});
// Socket.IO connection handler
io.on("connection", (socket) => {
    console.log("🟢 Client connected:", socket.id);
    // Handle contact form submission
    socket.on("submitContact", (data) => {
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
    socket.on("disconnect", (reason) => {
        console.log("🔴 Client disconnected:", socket.id, "Reason:", reason);
    });
    // Handle errors
    socket.on("error", (error) => {
        console.error("❌ Socket error:", error);
    });
});
// Error handling
process.on("uncaughtException", (error) => {
    console.error("💥 Uncaught Exception:", error);
});
process.on("unhandledRejection", (reason, promise) => {
    console.error("💥 Unhandled Rejection at:", promise, "reason:", reason);
});
// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`🚀 Socket.IO server running on port ${PORT}`);
    console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || "http://localhost:3000"}`);
});
//# sourceMappingURL=index.js.map