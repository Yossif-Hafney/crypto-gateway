"use client";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SeconderyButton";
import CoinLogo from "./CoinLogo";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const hideOnRoutes = [
    "/checkout",
    "/checkout/choosewallet",
    "/checkout/confirmpayment",
  ];
  const shouldHide = hideOnRoutes.includes(pathname);

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between
     whitespace-nowrap border-b border-primary/20 bg-background-light/80
     py-3 sm:px-6 lg:px-10 md:px-8 backdrop-blur-sm dark:bg-background-dark/80 "
    >
      <CoinLogo />
      {!shouldHide && (
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <SecondaryButton>
              <Link href="/signin">Sign In</Link>
            </SecondaryButton>
          </div>
          <div className="px-1 sm:px-0">
            <PrimaryButton>
              <Link href="/signup">Get Started</Link>
            </PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}
