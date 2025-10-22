import StatusCard from "../../Components/StatusCard";
export default function TransactionsTable() {
  return (
    <div className="relative overflow-x-auto rounded-xl shadow-lg bg-gray-900/80 p-2 cursor-default">
      <table className="w-full text-sm text-center rtl:text-right text-gray-300 border-separate border-spacing-0">
        <thead className="text-xs uppercase bg-gray-800 text-gray-300">
          <tr>
            <th scope="col" className="pr-6 py-3 rounded-tl-xl">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              User
            </th>
            <th scope="col" className="px-6 py-3">
              Merchant
            </th>
            <th scope="col" className="px-6 py-3 ">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Currency
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3 rounded-tr-xl">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800/60 border-b border-gray-700 hover:bg-gray-700/60 transition-colors">
            <td className="pr-6 py-4 font-mono">TXN-001234</td>
            <td className="px-6 py-4">Alice</td>
            <td className="px-6 py-4">CryptoMart</td>
            <td className="px-6 py-4">$150.00</td>
            <td className="px-6 py-4">USD</td>
            <td className="px-6 py-4">2025-10-12</td>
            <td className="px-6 py-4">
              <StatusCard title="Completed" bgColor="bg-green-600/80" />
            </td>
          </tr>
          <tr className="bg-gray-800/40 hover:bg-gray-700/60 transition-colors">
            <td className="pr-6 py-4 font-mono">TXN-001235</td>
            <td className="px-6 py-4">Bob</td>
            <td className="px-6 py-4">BitStore</td>
            <td className="px-6 py-4">€200.00</td>
            <td className="px-6 py-4">EUR</td>
            <td className="px-6 py-4">2025-10-12</td>
            <td className="px-6 py-4">
              <StatusCard title="Pending" bgColor="bg-yellow-500/80" />
            </td>
          </tr>
          <tr className="bg-gray-800/20 hover:bg-gray-700/60 transition-colors">
            <td className="pr-6 py-4 font-mono">TXN-001236</td>
            <td className="px-6 py-4">Charlie</td>
            <td className="px-6 py-4">CoinZone</td>
            <td className="px-6 py-4">£75.00</td>
            <td className="px-6 py-4">GBP</td>
            <td className="px-6 py-4">2025-10-12</td>
            <td className="px-6 py-4">
              <StatusCard title="Failed" bgColor="bg-red-600/80" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
