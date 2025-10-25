import type { Contact } from "@/store/contactSlice";

interface NotificationCardProps {
  notification: Contact;
  onMarkAsRead: (id: string) => void;
}

export function NotificationCard({
  notification,
  onMarkAsRead,
}: NotificationCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
        notification.isRead
          ? "bg-gray-800/40 border-gray-700/50 hover:border-gray-600"
          : "bg-linear-to-br from-blue-900/20 via-gray-800/40 to-gray-800/40 border-blue-500/40 hover:border-blue-400/60 shadow-blue-500/10"
      }`}
    >
      {/* Unread Indicator Bar */}
      {!notification.isRead && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 to-blue-600" />
      )}

      <div className="p-6 pl-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-4">
            {/* Header with Avatar */}
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div
                className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  notification.isRead
                    ? "bg-gray-700 text-gray-400"
                    : "bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                }`}
              >
                {notification.name.charAt(0).toUpperCase()}
              </div>

              {/* Name and Email */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-white truncate">
                    {notification.name}
                  </h2>
                  {!notification.isRead && (
                    <span className="shrink-0 px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                      New
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 truncate">
                  {notification.email}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(notification.timestamp).toLocaleString("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            </div>

            {/* Message */}
            <div className="bg-gray-900/60 rounded-lg p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
              <p className="text-sm font-medium text-gray-300 mb-1">Message:</p>
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {notification.message}
              </p>
            </div>
          </div>

          {/* Action Button */}
          {!notification.isRead && (
            <div className="shrink-0">
              <button
                onClick={() => onMarkAsRead(notification.id)}
                aria-label={`Mark message from ${notification.name} as read`}
                className="group/btn relative px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                title="Mark as read"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mark Read
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
