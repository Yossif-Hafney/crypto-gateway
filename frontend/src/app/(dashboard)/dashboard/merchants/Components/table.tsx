import StatusCard from "../../Components/StatusCard";
export default function MerchantsTable() {
  return (
    <div className="relative overflow-x-auto rounded-xl shadow-lg bg-gray-900/80 p-2 cursor-default">
      <table className="w-full text-sm text-center rtl:text-right text-gray-300 border-separate border-spacing-0">
        <thead className="text-xs uppercase bg-gray-800 text-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-tl-xl">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Wallet
            </th>
            <th scope="col" className="px-6 py-3">
              Supported Coins
            </th>
            <th scope="col" className="px-6 py-3">
              Total Volume
            </th>
            <th scope="col" className="px-6 py-3">
              Balance Current
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Joined Date
            </th>
            <th scope="col" className="px-6 py-3 rounded-tr-xl">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800/60 border-b border-gray-700 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-3 font-mono">1001</td>
            <td className="px-6 py-3 font-semibold whitespace-nowrap">
              CryptoMart
            </td>
            <td className="px-6 py-3 break-all">info@cryptomart.com</td>
            <td className="px-6 py-3 font-mono break-all">0xA1B2...C3D4</td>
            <td className="px-6 py-3 break-all">BTC, ETH, USDT</td>
            <td className="px-6 py-3 whitespace-nowrap">$120,000</td>
            <td className="px-6 py-3 whitespace-nowrap">$2,500</td>
            <td className="px-6 py-3">
              <StatusCard title="Active" bgColor="bg-green-600/80" />
            </td>
            <td className="px-6 py-3 whitespace-nowrap">2024-03-15</td>
            <td className="px-6 py-3">
              <button className="text-blue-400 hover:underline cursor-pointer">
                View
              </button>
            </td>
          </tr>
          <tr className="bg-gray-800/40 border-b border-gray-700 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-3 font-mono">1002</td>
            <td className="px-6 py-3 font-semibold whitespace-nowrap">
              BitStore
            </td>
            <td className="px-6 py-3 break-all">contact@bitstore.com</td>
            <td className="px-6 py-3 font-mono break-all">0xE5F6...A7B8</td>
            <td className="px-6 py-3 break-all">ETH, USDC</td>
            <td className="px-6 py-3 whitespace-nowrap">$85,000</td>
            <td className="px-6 py-3 whitespace-nowrap">$1,200</td>
            <td className="px-6 py-3">
              <StatusCard title="Pending" bgColor="bg-yellow-500/80" />
            </td>
            <td className="px-6 py-3 whitespace-nowrap">2024-06-22</td>
            <td className="px-6 py-3">
              <button className="text-blue-400 hover:underline cursor-pointer">
                View
              </button>
            </td>
          </tr>
          <tr className="bg-gray-800/20 border-b border-gray-700 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-3 font-mono">1003</td>
            <td className="px-6 py-3 font-semibold whitespace-nowrap">
              CoinZone
            </td>
            <td className="px-6 py-3 break-all">hello@coinzone.com</td>
            <td className="px-6 py-3 font-mono break-all">0xC9D0...E1F2</td>
            <td className="px-6 py-3 break-all">BTC, SOL</td>
            <td className="px-6 py-3 whitespace-nowrap">$47,500</td>
            <td className="px-6 py-3 whitespace-nowrap">$800</td>
            <td className="px-6 py-3">
              <StatusCard title="Suspended" bgColor="bg-red-600/80" />
            </td>
            <td className="px-6 py-3 whitespace-nowrap">2024-09-10</td>
            <td className="px-6 py-3">
              <button className="text-blue-400 hover:underline cursor-pointer">
                View
              </button>
            </td>
          </tr>
          <tr className="bg-gray-800/10 hover:bg-gray-700/60 transition-colors">
            <td className="px-6 py-3 font-mono">1004</td>
            <td className="px-6 py-3 font-semibold whitespace-nowrap">
              PayGate
            </td>
            <td className="px-6 py-3 break-all">support@paygate.com</td>
            <td className="px-6 py-3 font-mono break-all">0xF3A4...B5C6</td>
            <td className="px-6 py-3 break-all">USDT, XRP</td>
            <td className="px-6 py-3 whitespace-nowrap">$63,200</td>
            <td className="px-6 py-3 whitespace-nowrap">$1,050</td>
            <td className="px-6 py-3">
              <StatusCard title="Active" bgColor="bg-green-600/80" />
            </td>
            <td className="px-6 py-3 whitespace-nowrap">2025-01-05</td>
            <td className="px-6 py-3">
              <button className="text-blue-400 hover:underline cursor-pointer">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
