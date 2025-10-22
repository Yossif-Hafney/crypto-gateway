import Image from "next/image";
const coinUrls = [
  "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png",
  "https://assets.coingecko.com/coins/images/975/large/cardano.png",
  "https://assets.coingecko.com/coins/images/4128/large/solana.png",
];

export default function CoinsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Accepted Cryptocurrencies for Payments
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {coinUrls.map((url, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <Image
                src={url}
                alt="Coin logo"
                className="h-16 w-16 object-contain rounded-full shadow"
                width={64}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
