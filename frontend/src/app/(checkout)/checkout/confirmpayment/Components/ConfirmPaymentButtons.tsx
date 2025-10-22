export function ConfirmPaymentButtons() {
  return (
    <div className="mt-10 flex flex-col sm:flex-row sm:justify-between gap-4">
      <button
        type="button"
        className="flex w-full cursor-pointer sm:w-auto items-center
         justify-center rounded-lg border border-gray-700
          bg-gray-800 px-5 py-3 text-base font-bold text-gray-800
           dark:text-white shadow-sm hover:bg-gray-700
            transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Download Receipt
      </button>

      <a
        href="#"
        className="flex w-full cursor-pointer sm:w-auto items-center
         justify-center rounded-lg bg-primary px-5 py-3 text-base
          font-bold text-white shadow-sm hover:bg-primary/90
           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
      >
        Back to Store
      </a>
    </div>
  );
}
