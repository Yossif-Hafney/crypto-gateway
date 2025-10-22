import { ConnectionStatus } from "./ConnectionStatus";
import { ReconnectBanner } from "./ReconnectBanner";

interface NotificationHeaderProps {
  isConnected: boolean;
  showReconnectMessage: boolean;
  onDismissReconnect: () => void;
}

export function NotificationHeader({
  isConnected,
  showReconnectMessage,
  onDismissReconnect,
}: NotificationHeaderProps) {
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
              Notifications
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Real-time contact form submissions
            </p>
          </div>
          <ConnectionStatus isConnected={isConnected} />
        </div>
      </div>
    </header>
  );
}
