import { getSocket } from "./socket";
import { store } from "@/store/store";
import { addMerchant } from "@/store/merchantSlice";

interface Merchant {
  id: string;
  name: string;
  email: string;
  companyName: string;
  timestamp: string;
}

let listenersInitialized = false;

export const initMerchantSocketListeners = () => {
  // Prevent duplicate listeners in React Strict Mode
  if (listenersInitialized) {
    console.log(
      "⚠️ Merchant socket listeners already initialized, skipping..."
    );
    return;
  }

  listenersInitialized = true;
  const socket = getSocket();

  socket.on("connect", () => {
    console.log("🟢 Merchant socket connected:", socket.id);
  });

  socket.on("newMerchant", (merchant: Merchant) => {
    if (!merchant.id) {
      console.warn("⚠️ Received merchant without id - ignoring!", merchant);
      return;
    }

    console.log("📩 New merchant received (with id):", merchant);
    store.dispatch(addMerchant(merchant));

    // Show browser notification
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("New Merchant Signup", {
        body: `${merchant.name} (${merchant.email})`,
        icon: "/favicon.ico",
      });
    }
  });

  socket.on(
    "merchantSubmitted",
    (data: { success: boolean; message: string }) => {
      console.log("✅ Merchant submission confirmed:", data);
    }
  );

  socket.on("disconnect", (reason: string) => {
    console.log("🔴 Merchant socket disconnected:", reason);
  });

  socket.on("connect_error", (error: Error) => {
    console.error("❌ Merchant socket connection error:", error.message);
  });
};
