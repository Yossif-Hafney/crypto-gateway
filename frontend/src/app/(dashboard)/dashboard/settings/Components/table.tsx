export default function SettingsTable() {
  return (
    <div className="relative overflow-x-auto rounded-xl shadow-lg bg-gray-900/80 p-2 cursor-default">
      <h2 className="text-lg font-semibold text-white mb-4 px-2">
        Supported Currencies
      </h2>
      <table className="w-full text-sm text-center text-gray-300 border-separate border-spacing-0">
        <thead className="text-xs uppercase bg-gray-800 text-gray-300">
          <tr>
            <th className="px-6 py-3 rounded-tl-xl">Symbol</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Network</th>
            <th className="px-6 py-3 rounded-tr-xl">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800/60 border-b border-gray-700 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-4 font-mono">BTC</td>
            <td className="px-6 py-4">Bitcoin</td>
            <td className="px-6 py-4">Bitcoin</td>
            <td className="px-6 py-4 text-green-400 font-semibold">Active</td>
          </tr>
          <tr className="bg-gray-800/40 border-b border-gray-700 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-4 font-mono">ETH</td>
            <td className="px-6 py-4">Ethereum</td>
            <td className="px-6 py-4">Ethereum</td>
            <td className="px-6 py-4 text-green-400 font-semibold">Active</td>
          </tr>
          <tr className="bg-gray-800/20 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-4 font-mono">USDT</td>
            <td className="px-6 py-4">Tether</td>
            <td className="px-6 py-4">Ethereum, Tron</td>
            <td className="px-6 py-4 text-green-400 font-semibold">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
