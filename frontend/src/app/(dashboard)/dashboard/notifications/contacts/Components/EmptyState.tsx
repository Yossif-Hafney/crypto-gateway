export function EmptyState() {
  return (
    <div className="bg-gray-800/50 rounded-lg p-12 text-center border border-gray-700">
      <div className="text-6xl mb-4">📭</div>
      <h3 className="text-xl font-semibold text-gray-300 mb-2">
        No notifications yet
      </h3>
      <p className="text-gray-500">
        New contact form submissions will appear here in real-time
      </p>
    </div>
  );
}
