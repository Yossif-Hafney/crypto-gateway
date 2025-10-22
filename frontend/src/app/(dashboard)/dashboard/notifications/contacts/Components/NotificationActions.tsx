interface NotificationActionsProps {
  unreadCount: number;
  onMarkAllAsRead: () => void;
}

export function NotificationActions({
  unreadCount,
  onMarkAllAsRead,
}: NotificationActionsProps) {
  return (
    <div className="flex gap-3">
      {unreadCount > 0 && (
        <button
          onClick={onMarkAllAsRead}
          className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Mark All as Read ({unreadCount})
        </button>
      )}
    </div>
  );
}
