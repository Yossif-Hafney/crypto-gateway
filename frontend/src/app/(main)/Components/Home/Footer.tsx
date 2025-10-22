import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
          <Link
            className="text-sm hover:text-primary text-gray-400 dark:hover:text-primary"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm hover:text-primary text-gray-400 dark:hover:text-primary"
            href="/merchant"
          >
            Merchants
          </Link>
          <Link
            className="text-sm hover:text-primary text-gray-400 dark:hover:text-primary"
            href="/contact"
          >
            Contact Us
          </Link>
          <Link
            className="text-sm hover:text-primary text-gray-400 dark:hover:text-primary"
            href="/privacypolicy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-sm hover:text-primary text-gray-400 dark:hover:text-primary"
            href="/terms"
          >
            Terms of Service
          </Link>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2023 CoinGate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
