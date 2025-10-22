"use client";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

interface CardStatsProps {
  title: string;
  value: string;
  color: string;
}

import { generateChartData, getLineColor } from "./cardStatsUtils";

export default function CardStats({ title, value, color }: CardStatsProps) {
  const chartData = generateChartData(title);
  const lineColor = getLineColor(color);

  // Calculate percentage change (trend indicator)
  const firstValue = chartData[0].amount;
  const lastValue = chartData[chartData.length - 1].amount;
  const percentChange = (((lastValue - firstValue) / firstValue) * 100).toFixed(
    1
  );
  const isPositive = lastValue >= firstValue;

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-3 gap-2">
        <div className="w-full">
          <span className="text-xs sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {title}
          </span>
          <div className="flex items-baseline gap-2 mt-2 flex-wrap">
            <span className="text-lg sm:text-lg md:text-lg lg:text-4xl font-bold text-white">
              {value}
            </span>
            <span
              className={`text-xs sm:text-sm font-semibold ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {isPositive ? "↑" : "↓"} {Math.abs(Number(percentChange))}%
            </span>
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-20 mt-4 -mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <defs>
              <linearGradient
                id={`gradient-${title}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={lineColor} stopOpacity={0.2} />
                <stop offset="100%" stopColor={lineColor} stopOpacity={0} />
              </linearGradient>
              <filter id={`glow-${title}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <Tooltip
              contentStyle={{
                background: "rgba(17, 24, 39, 0.95)",
                border: "1px solid rgba(75, 85, 99, 0.5)",
                borderRadius: 8,
                color: "#fff",
                fontSize: 12,
                padding: "8px 12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
              labelStyle={{ display: "none" }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              cursor={{
                stroke: lineColor,
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke={lineColor}
              strokeWidth={4}
              strokeLinecap="round"
              strokeLinejoin="round"
              dot={{
                r: 0,
              }}
              fill={`url(#gradient-${title})`}
              activeDot={{
                r: 8,
                fill: lineColor,
                stroke: "#fff",
                strokeWidth: 3,
                style: {
                  filter: `drop-shadow(0 0 8px ${lineColor})`,
                  cursor: "pointer",
                },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
