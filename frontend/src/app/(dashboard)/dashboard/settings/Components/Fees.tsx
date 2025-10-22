"use client";
import { useState } from "react";

export default function FeesSettings() {
  const [fee, setFee] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="bg-gray-900/80 rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Global Fees</h2>
          <p className="text-sm text-gray-400">
            Set the global transaction fee percentage.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="max-w-xs">
            <label
              htmlFor="fee-percentage"
              className="block text-sm font-medium text-white mb-2"
            >
              Fee Percentage (%)
            </label>
            <div className="relative">
              <input
                id="fee-percentage"
                type="number"
                step="0.1"
                min="0"
                max="100"
                value={fee}
                placeholder="e.g. 2.5%"
                aria-label="Fee percentage"
                onChange={(e) => {
                  const val = e.target.value;
                  if (
                    val === "" ||
                    (/^\d*\.?\d*$/.test(val) &&
                      Number(val) >= 0 &&
                      Number(val) <= 100)
                  ) {
                    setFee(val);
                    setError("");
                  } else {
                    setError("Enter a value between 0 and 100");
                  }
                }}
                className={`block w-full rounded-lg border bg-gray-800 text-white
                  placeholder:text-gray-500 px-3 py-2 text-sm transition-colors shadow-sm
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none
                  hover:border-blue-400 disabled:opacity-60 disabled:cursor-not-allowed
                  appearance-none [&::-webkit-outer-spin-button]:appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none
                  [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0
                  ${
                    error
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-700"
                  }`}
                style={{ MozAppearance: "textfield" }}
                autoComplete="off"
              />

              {error && (
                <span className="block mt-1 text-xs text-red-500">{error}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
