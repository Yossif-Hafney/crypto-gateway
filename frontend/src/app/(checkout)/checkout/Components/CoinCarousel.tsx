import React from "react";
import { coinList, CoinIcon } from "../utils/coinIcons";

export default function CoinCarousel({
  onSelect,
  selected,
}: {
  onSelect?: (coinName: string) => void;
  selected?: string;
}) {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex gap-4 snap-x snap-mandatory">
        {coinList.map((coin, i) => (
          <label
            key={i}
            className={`flex flex-col items-center justify-center min-w-20 cursor-pointer snap-center rounded-lg border p-4 text-sm font-medium transition-all duration-200
              ${
                selected === coin.name
                  ? "ring-2 ring-primary border-transparent"
                  : "border-gray-700 bg-gray-800 text-gray-100"
              }`}
            onClick={() => onSelect?.(coin.name)}
          >
            <input
              className="sr-only"
              name="crypto"
              type="radio"
              checked={selected === coin.name}
              readOnly
            />
            <CoinIcon name={coin.name} url={coin.url} />
            {coin.name}
          </label>
        ))}
      </div>
    </div>
  );
}
