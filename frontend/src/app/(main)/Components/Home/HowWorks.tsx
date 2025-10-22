export default function HowItWorks() {
  return (
    <section className="cursor-default py-16  sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            How Our Gateway Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Our payment gateway is designed for simplicity and security. This
            diagram illustrates the seamless flow of a transaction from you to
            the merchant through CoinGate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* STEP 1 */}
          <div className="flex flex-col items-center rounded-xl bg-background-light p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-background-dark/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              1. User Initiates Payment
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              You select crypto as your payment method on a merchant’s site and
              are redirected to CoinGate.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col items-center rounded-xl bg-background-light p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-background-dark/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 48 48">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              2. CoinGate Facilitates
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Our gateway provides the payment details, allowing a direct
              wallet-to-merchant connection.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col items-center rounded-xl bg-background-light p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-background-dark/50">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              3. Merchant Receives Payment
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              The merchant receives the payment directly, and we notify them of
              the successful transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
