"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "09:00", price: 64000 },
  { time: "10:00", price: 64500 },
  { time: "11:00", price: 64200 },
  { time: "12:00", price: 65000 },
];

export default function PriceChart() {
  return (
    <div className="w-full h-64 bg-[#202534] rounded-xl p-6 shadow border border-gray-800 hover:shadow-lg transition-shadow duration-200 flex flex-col">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-base font-semibold text-white">BTC Price</span>
        <span className="text-xs text-gray-400">(Last 4 hours)</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 24 }}
        >
          <CartesianGrid
            strokeDasharray="3 6"
            stroke="#23283a"
            vertical={false}
          />
          <XAxis
            dataKey="time"
            stroke="#b0b8d1"
            tick={{ fontSize: 13, dy: 10 }}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            stroke="#b0b8d1"
            tick={{ fontSize: 13 }}
            axisLine={false}
            tickLine={false}
            width={60}
            domain={["auto", "auto"]}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              background: "#23283a",
              border: "none",
              borderRadius: 10,
              color: "#fff",
              boxShadow: "0 2px 12px #0006",
            }}
            labelStyle={{ color: "#b0b8d1", fontWeight: 500 }}
            itemStyle={{ color: "#00BFFF", fontWeight: 600 }}
            cursor={{ stroke: "#00BFFF", strokeWidth: 0.2 }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#00BFFF"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 7,
              fill: "#fff",
              stroke: "#00BFFF",
              strokeWidth: 3,
              style: { filter: "drop-shadow(0 0 8px #00BFFF88)" },
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
