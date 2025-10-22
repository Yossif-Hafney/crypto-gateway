import io from "socket.io-client";

let socket: ReturnType<typeof io> | null = null;

export const getSocket = (): ReturnType<typeof io> => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001", {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });
  }
  return socket;
};

export const emitContact = (data: {
  id: string;
  name: string;
  email: string;
  message: string;
  companyName: string;
  timestamp: string;
}) => {
  const socket = getSocket();
  if (socket.connected) {
    socket.emit("submitContact", data);
  }
};
