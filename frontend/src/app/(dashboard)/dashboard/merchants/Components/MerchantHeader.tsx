import { ConnectionStatus } from "@outerComponents/ConnectionStatus";
import { ReconnectBanner } from "@outerComponents/ReconnectBanner";

interface MerchantHeaderProps {
  isConnected: boolean;
  showReconnectMessage: boolean;
  onDismissReconnect: () => void;
}

export function MerchantHeader({
  isConnected,
  showReconnectMessage,
  onDismissReconnect,
}: MerchantHeaderProps) {
  return (
    <header>
      <div className="space-y-4">
        {/* Reconnect Banner */}
        {showReconnectMessage && (
          <ReconnectBanner onDismiss={onDismissReconnect} />
        )}

        {/* Header with ConnectionStatus */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Merchants
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Real-time merchant signups
            </p>
          </div>
          <ConnectionStatus isConnected={isConnected} />
        </div>
      </div>
    </header>
  );
}
