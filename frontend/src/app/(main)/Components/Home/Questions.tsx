export default function Questions() {
  return (
    <section className="py-16 sm:py-24 ">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white cursor-default">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have questions? We&#39;ve got answers. If you can&#39;t find what
            you&#39;re looking for, feel free to contact our support team.
          </p>
        </div>
        <div className="mt-12 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-white cursor-default">
              What is CoinGate?
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              CoinGate is a crypto payment gateway that acts as an intermediary
              between users and merchants. We facilitate seamless and secure
              transactions, allowing you to pay for goods and services with your
              cryptocurrency without us ever holding or managing your assets.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white cursor-default">
              Does CoinGate buy or sell cryptocurrency?
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              No, CoinGate does not buy, sell, or manage cryptocurrencies. Our
              service is strictly a payment gateway that facilitates
              transactions directly between your crypto wallet and a
              merchant&#39;s.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white cursor-default">
              Which cryptocurrencies can I use for payments?
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              We support a wide variety of cryptocurrencies for payments,
              including Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and many
              more. The list of accepted cryptocurrencies is determined by the
              merchant you are transacting with.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white cursor-default">
              Is my crypto safe with CoinGate?
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Absolutely. Your crypto is never held by us. Transactions are
              conducted directly between your wallet and the merchant, ensuring
              you maintain full control over your funds at all times. We simply
              provide the secure technology to make the connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
