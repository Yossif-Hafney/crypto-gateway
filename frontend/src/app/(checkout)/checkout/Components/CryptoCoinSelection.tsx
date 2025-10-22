"use client";
import { useState } from "react";
import { coinList, CoinIcon } from "../utils/coinIcons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@outerComponents/ui/carousel";

function CryptoCoinSelection() {
  const [selected, setSelected] = useState("");
  return (
    <section>
      <h3 className="text-lg font-bold text-white">
        Select your cryptocurrency
      </h3>
      <div className="mt-4">
        <Carousel>
          <CarouselContent>
            {coinList.map((coin, i) => (
              <CarouselItem key={i} className="basis-1/3 max-w-[33%]">
                <label
                  className={`flex flex-col items-center justify-center w-full cursor-pointer rounded-lg border p-4 text-sm font-medium transition-all duration-200 ${
                    selected === coin.name
                      ? "ring-2 ring-primary border-primary"
                      : "border-gray-700 bg-gray-800 text-gray-100"
                  }`}
                  onClick={() => setSelected(coin.name)}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default CryptoCoinSelection;
