interface ReconnectBannerProps {
  onDismiss: () => void;
}

export function ReconnectBanner({ onDismiss }: ReconnectBannerProps) {
  return (
    <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div>
          <p className="text-green-400 font-medium">
            Server reconnected! New updates available.
          </p>
          <p className="text-sm text-gray-400">
            Reload the page to see latest updates
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors"
        >
          Reload Page
        </button>
        <button
          onClick={onDismiss}
          className="text-green-400 hover:text-green-300 px-3 py-1 rounded hover:bg-green-900/30 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
