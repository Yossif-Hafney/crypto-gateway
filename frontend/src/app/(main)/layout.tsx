import type { Metadata } from "next";
import "../globals.css";
import Header from "@components/Home/Header";
import Footer from "@components/Home/Footer";
import Providers from "@/context/providers";
import { Analytics } from "@vercel/analytics/next";

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
        <Providers>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
