interface PaymentMethodProps {
  checked?: boolean;
}

export function PaymentMethod({ checked = true }: PaymentMethodProps) {
  return (
    <label className="relative flex cursor-pointer flex-col items-start rounded-lg border border-gray-700 bg-gray-800 p-4 ring-primary has-[:checked]:ring-2 has-[:checked]:border-transparent">
      <input
        checked={checked}
        className="sr-only"
        name="payment-method"
        type="radio"
        readOnly
      />
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-100">
          Connect Wallet
        </span>
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        Connect your wallet for a seamless transaction.
      </p>
    </label>
  );
}
