export default function WhyUs() {
  return (
    <section className="cursor-default py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Why Choose HYGate?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover the features that make HYGate the ideal choice for
            facilitating your crypto payments.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-start gap-4 rounded-xl bg-background-light p-6 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md dark:bg-background-dark/50">
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
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Secure Payment Gateway
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We use industry-leading security protocols to ensure every
              transaction is secure, without ever taking custody of your funds.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start gap-4 rounded-xl bg-background-light p-6 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md dark:bg-background-dark/50">
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
                <path d="M12 8V4m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Direct User-to-Merchant
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Payments are sent directly from the user to the merchant, ensuring
              you always remain in control of your crypto.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start gap-4 rounded-xl bg-background-light p-6 shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-md dark:bg-background-dark/50">
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Effortless Integration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Our platform is designed for a seamless payment experience,
              allowing you to pay with crypto as easily as using a credit card.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
