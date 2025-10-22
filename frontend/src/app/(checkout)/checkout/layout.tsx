import type { Metadata } from "next";
import "../../globals.css";
import Header from "@components/Home/Header";

export const metadata: Metadata = {
  title: "Crypto Gateway",
  description:
    "A seamless crypto payment gateway for merchants and businesses. Accept, manage, and grow with cryptocurrency payments effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background font-display text-gray-200 antialiased">
        <div className="flex h-auto min-h-screen w-full flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
