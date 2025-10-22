"use client";
import { useNotifications } from "./hooks/useNotifications";
import { useSocketConnection } from "./hooks/useSocketConnection";
import { NotificationHeader } from "./Components/NotificationHeader";
import { NotificationCard } from "./Components/NotificationCard";
import { EmptyState } from "./Components/EmptyState";

export default function NotificationsPage() {
  const { notifications, handleMarkAsRead } = useNotifications();

  const { isConnected, showReconnectMessage, dismissReconnectMessage } =
    useSocketConnection();

  return (
    <div className="space-y-6">
      <NotificationHeader
        isConnected={isConnected}
        showReconnectMessage={showReconnectMessage}
        onDismissReconnect={dismissReconnectMessage}
      />

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <EmptyState />
        ) : (
          notifications.map((notification, index) => (
            <NotificationCard
              key={notification.id || `notification-${index}`}
              notification={notification}
              onMarkAsRead={handleMarkAsRead}
            />
          ))
        )}
      </div>
    </div>
  );
}
