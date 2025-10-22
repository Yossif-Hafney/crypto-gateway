"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/Components/LoadingSpinner";
import { LogOut } from "lucide-react";
import { handleLogout } from "../logout/actions";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <button
      onClick={() => handleLogout(setIsLoading, router)}
      disabled={isLoading}
      aria-label={isLoading ? "Logging out..." : "Logout"}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full text-white transition-all duration-500  hover:bg-red-700  disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <div className="scale-75">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <LogOut />
        </>
      )}
    </button>
  );
}
