interface ConnectionStatusProps {
  isConnected: boolean;
}

export function ConnectionStatus({ isConnected }: ConnectionStatusProps) {
  return (
    <div className="space-y-1 flex flex-col">
      <div className="flex items-center gap-2">
        <div
          className={`w-3 h-3 rounded-full ${
            isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"
          }`}
        />
        <span className="text-sm text-gray-400">
          {isConnected ? "Live" : "Offline"}
        </span>
      </div>
      {!isConnected && (
        <div className=" text-sm text-red-400">Reload to get last updates</div>
      )}
    </div>
  );
}
