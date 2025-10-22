import { useEffect, useState, useRef } from "react";
import { getSocket } from "@/lib/socket";

export const useSocketConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [showReconnectMessage, setShowReconnectMessage] = useState(false);
  const isFirstConnection = useRef(true);

  useEffect(() => {
    const socket = getSocket();
    setIsConnected(socket.connected);

    socket.on("connect", () => {
      setIsConnected(true);

      // Only show reconnect message if this is NOT the first connection
      if (!isFirstConnection.current) {
        setShowReconnectMessage(true);
      } else {
        isFirstConnection.current = false;
      }
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      setShowReconnectMessage(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  const dismissReconnectMessage = () => {
    setShowReconnectMessage(false);
  };

  return { isConnected, showReconnectMessage, dismissReconnectMessage };
};
