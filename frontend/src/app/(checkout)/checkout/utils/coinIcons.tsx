import Image from "next/image";

export type Coin = {
  name: string;
  url: string;
};

export const coinList: Coin[] = [
  {
    name: "Bitcoin",
    url: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    name: "Ethereum",
    url: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    name: "Tether",
    url: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    name: "Binance Coin",
    url: "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
  },
  {
    name: "Cardano",
    url: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
  },
  {
    name: "Solana",
    url: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
  },
];

export function CoinIcon({ name, url }: Coin) {
  return (
    <Image
      src={url}
      alt={name + " logo"}
      className="h-10 w-10 mb-2 rounded-full shadow-lg border border-gray-600 bg-gray-900 object-contain transition-transform duration-200 hover:scale-105"
      width={40}
      height={40}
    />
  );
}
