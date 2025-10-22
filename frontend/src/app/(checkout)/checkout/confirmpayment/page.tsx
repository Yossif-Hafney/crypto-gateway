"use client";
import { SuccessHeader, ProgressBar } from "./Components/SuccessHeader";
import { TransactionSummary } from "./Components/TransactionSummary";
import { ConfirmPaymentButtons } from "./Components/ConfirmPaymentButtons";
import { usePreventBackNavigation } from "./hooks/usePreventBackNavigation";

export default function ConfirmPayment() {
  // Prevent back navigation using custom hook
  usePreventBackNavigation();

  return (
    <main className="flex flex-1 justify-center pb-20 pt-6  ">
      <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <SuccessHeader />
        <ProgressBar />
        <TransactionSummary />
        <ConfirmPaymentButtons />
      </div>
    </main>
  );
}
