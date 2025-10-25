"use client";

import { useEffect } from "react";
import { initMerchantSocketListeners } from "@/lib/merchantSocketListener";
import { useSocketConnection } from "@hooks/useSocketConnection";
import { MerchantHeader } from "./Components/MerchantHeader";
import MerchantsTable from "./Components/table";

export default function MerchantsPage() {
  const { isConnected, showReconnectMessage, dismissReconnectMessage } =
    useSocketConnection();

  // Initialize socket listeners once on mount
  useEffect(() => {
    initMerchantSocketListeners();
  }, []);

  return (
    <div className="space-y-6">
      <MerchantHeader
        isConnected={isConnected}
        showReconnectMessage={showReconnectMessage}
        onDismissReconnect={dismissReconnectMessage}
      />

      <MerchantsTable />
    </div>
  );
}
