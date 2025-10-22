interface OrderSummaryItemProps {
  label: string;
  value: string;
}

export function OrderSummaryItem({ label, value }: OrderSummaryItemProps) {
  return (
    <div className="flex justify-between">
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

export function OrderSummaryTotal({ value }: { value: string }) {
  return (
    <div className="flex justify-between">
      <p className="text-base font-bold text-gray-900 dark:text-white">Total</p>
      <p className="text-base font-bold text-gray-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}
