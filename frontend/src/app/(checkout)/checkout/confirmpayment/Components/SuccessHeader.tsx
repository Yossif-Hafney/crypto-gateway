export function SuccessHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 shadow-sm">
        <svg
          className="h-12 w-12 text-green-500 dark:text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Transaction Successful
      </h1>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
        Your payment has been confirmed successfully.
      </p>
    </div>
  );
}

export function ProgressBar() {
  return (
    <div className="mt-10">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        Step 3 of 3
      </p>
      <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div className="h-2 w-full rounded-full bg-primary transition-all duration-500"></div>
      </div>
    </div>
  );
}
