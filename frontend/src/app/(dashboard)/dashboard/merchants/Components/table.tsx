"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import StatusCard from "../../Components/StatusCard";

export default function MerchantsTable() {
  const merchants = useSelector((state: RootState) => state.merchants.items);

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
              Company Name
            </th>
            <th scope="col" className="px-6 py-3">
              Joined Date
            </th>
            <th scope="col" className="px-6 py-3 rounded-tr-xl">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {merchants.length === 0 ? (
            <tr>
              <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                No merchants yet. Waiting for signups...
              </td>
            </tr>
          ) : (
            merchants.map((merchant, index) => (
              <tr
                key={merchant.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-800/60" : "bg-gray-800/40"
                } border-b border-gray-700 hover:bg-gray-700/60 transition-colors`}
              >
                <td className="px-6 py-3 font-mono">{merchant.id}</td>
                <td className="px-6 py-3 whitespace-nowrap">{merchant.name}</td>
                <td className="px-6 py-3 break-all">{merchant.email}</td>
                <td className="px-6 py-3 break-all">{merchant.companyName}</td>
                <td className="px-6 py-3 whitespace-nowrap">
                  {new Date(merchant.timestamp).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  <StatusCard title="Active" bgColor="bg-green-600/80" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
