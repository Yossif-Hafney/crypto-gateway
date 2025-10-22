export function TransactionSummary() {
  return (
    <div className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">
        Transaction Summary
      </h2>
      <dl className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between">
          <dt className="text-gray-600 dark:text-gray-400">Amount Paid</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">
            0.0034 BTC
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600 dark:text-gray-400">Equivalent Value</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">
            $120.00 USD
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600 dark:text-gray-400">Payment Method</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">
            Bitcoin
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600 dark:text-gray-400">Date</dt>
          <dd className="font-semibold text-gray-900 dark:text-white">
            July 26, 2024
          </dd>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <dt className="text-gray-600 dark:text-gray-400">Transaction ID</dt>
            <dd className="truncate font-mono text-gray-700 dark:text-gray-300">
              txid_1A2b3C4d5E6f7G8h9I0j
            </dd>
          </div>
          <div className="mt-2 text-right">
            <a
              href="#"
              className="text-sm font-medium text-primary hover:underline transition-colors"
            >
              View on Blockchain Explorer →
            </a>
          </div>
        </div>
      </dl>
    </div>
  );
}
