"use client";
import { useRouter } from "next/navigation";
import { handleConfirmAndPay } from "../utils/paymentUtils";

export function ConfirmAndPayButton() {
  const router = useRouter();

  return (
    <button
      type="submit"
      onClick={() => handleConfirmAndPay(router)}
      className="flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3
       text-base font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none
        focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light
         dark:focus:ring-offset-background-dark cursor-pointer transition-all"
    >
      Confirm and Pay
    </button>
  );
}
