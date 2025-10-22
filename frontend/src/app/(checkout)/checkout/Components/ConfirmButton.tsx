"use client";
import { handleContinue } from "../lib/ContinueButton";
import { useRouter } from "next/navigation";
export default function ConfirmButton() {
  const router = useRouter();

  return (
    <div>
      <button
        className="flex w-full cursor-pointer items-center justify-center rounded-lg
         bg-primary px-5 py-3 text-base font-bold text-white shadow-sm hover:bg-primary/90
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
           focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
        type="button"
        onClick={() => handleContinue(router)}
      >
        Continue
      </button>
    </div>
  );
}
