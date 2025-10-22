export default function OrderSummary() {
  return (
    <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Order Summary
      </h3>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">Product</p>
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Premium Plan
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Price</p>
          <p className="text-sm font-medium text-white">$99.00 USD</p>
        </div>
        <div className="border-t border-gray-800 my-4"></div>
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-white">Total in BTC</p>
          <p className="text-base font-bold text-primary">0.0015 BTC</p>
        </div>
      </div>
    </section>
  );
}
