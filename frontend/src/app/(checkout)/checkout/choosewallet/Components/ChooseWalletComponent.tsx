"use client";
import { PaymentMethod } from "./PaymentMethod";
import { OrderSummaryItem, OrderSummaryTotal } from "./OrderSummary";
import { ConfirmAndPayButton } from "./ConfirmAndPayButton";

import { WagmiProvider, useAccount } from "wagmi";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Account } from "../Components/Account";
import { WalletOptions } from "../Components/WalletOptions";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default function ChooseWalletComponent() {
  return (
    <main className="flex-1 py-10 sm:py-16">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Payment Details
          </h1>

          {/* Content sections */}
          <div className="mt-8 space-y-8">
            {/* Payment method */}
            <section>
              <h3 className="text-lg font-bold text-white">Payment Method</h3>
              <div className="mt-4">
                <WagmiProvider config={config}>
                  <QueryClientProvider client={queryClient}>
                    <ConnectWallet />
                    <PaymentMethod />
                  </QueryClientProvider>
                </WagmiProvider>
              </div>
            </section>

            {/* Order summary */}
            <section className="rounded-lg border border-gray-700 bg-gray-800 p-6">
              <h3 className="text-lg font-bold text-white">Order Summary</h3>
              <div className="mt-4 space-y-4">
                <OrderSummaryItem label="Amount to pay" value="0.0034 BTC" />
                <OrderSummaryItem label="Equivalent in USD" value="$150.00" />
                <OrderSummaryItem label="Network Fee" value="0.0001 BTC" />
                <OrderSummaryItem label="Fees" value="0.00005 BTC" />
                <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
                <OrderSummaryTotal value="0.00355 BTC" />
              </div>
            </section>

            {/* Button */}
            <div>
              <ConfirmAndPayButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
