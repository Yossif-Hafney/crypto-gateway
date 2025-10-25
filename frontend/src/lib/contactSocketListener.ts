import { getSocket } from "./socket";
import { store } from "@/store/store";
import { addContact } from "@/store/contactSlice";

interface Contact {
  id: string;
  name: string;
  email: string;
  companyName: string;
  message: string;
  createdAt: string;
  timestamp: string;
  isRead?: boolean;
}

let listenersInitialized = false;

export const initSocketListeners = () => {
  // Prevent duplicate listeners in React Strict Mode
  if (listenersInitialized) {
    console.log("⚠️ Socket listeners already initialized, skipping...");
    return;
  }

  listenersInitialized = true;
  const socket = getSocket();

  socket.on("connect", () => {
    console.log("🟢 Socket connected:", socket.id);
    // Don't load contacts on reconnect - only load on initial page mount
  });

  socket.on("newContact", (contact: Contact) => {
    if (!contact.id) {
      console.warn("⚠️ Received contact without id - ignoring!", contact);
      return; // Don't add contacts without an ID
    }

    console.log("📩 New contact received (with id):", contact);
    store.dispatch(addContact(contact));

    // Show browser notification
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("New Contact Message", {
        body: `From: ${contact.name} (${contact.email})`,
        icon: "/favicon.ico",
      });
    }
  });

  socket.on(
    "contactSubmitted",
    (data: { success: boolean; message: string }) => {
      console.log("✅ Contact submission confirmed:", data);
    }
  );

  socket.on("disconnect", (reason: string) => {
    console.log("🔴 Socket disconnected:", reason);
  });

  socket.on("connect_error", (error: Error) => {
    console.error("❌ Socket connection error:", error.message);
  });
};
