export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import "../../globals.css";
import SideBar from "@dashboardComponents/SideBar";
import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";
import Providers from "@/context/providers";

export const metadata: Metadata = {
  title: "Crypto Gateway",
  description:
    "A seamless crypto payment gateway for merchants and businesses. Accept, manage, and grow with cryptocurrency payments effortlessly.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await isAuthenticated();
  if (!auth) redirect("/signin");

  return (
    <html lang="en">
      <body className="bg-[#0a0b0f] text-gray-200 antialiased font-display">
        <Providers>
          <div className="flex min-h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="fixed top-0 left-0 h-full  border-r border-gray-800 shadow-lg z-40">
              <SideBar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-12 lg:ml-64 min-h-screen overflow-y-auto bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 p-8">
              <div className="w-full">{children}</div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
