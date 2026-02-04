"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeUp,
  zoomIn,
  staggerContainer,
} from "./Components/merchantPageVariants";
import BigButton from "@components/Home/BigButton";
import PrimaryButton from "@components/Home/PrimaryButton";
import SecondaryButton from "@components/Home/SeconderyButton";
import MerchantCards from "./Components/MerchantCards";
import { merchantCards } from "./Components/merchantCardsData";

export default function MerchantPage() {
  // Animation variants are now imported from merchantPageVariants.ts

  // cards array is now imported from merchantCardsData.tsx

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKEXEvzt0yhFjaM0hMT5YztMYeRHeCI6wBMxio0807zSeAQvY32nB946TakoXuvM-MDlDJk4xD27bsJkTR2FWWRORUDV3knCr6L8BAGS5fZqC4q6l3-RpbzlcwLW_G9I13IyHLb74gnvUNTL2ssy2tgsNsqLjJJ6b07Up4bwfzCuWssXQ6fL_K48uiIOc1QVnm35NGv2IYtn8lvr7q_JJuQbkYgPTwtcQpyky6u5Dfo8ZJdSEfrcNm10l6vMIji0thPfY1krpG8RI"
            alt="Merchant hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient from-background-dark/80 to-background-dark" />
        </div>

        <motion.div
          className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Grow Your Business with Crypto
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Join thousands of merchants worldwide who are expanding their reach
            and boosting sales by accepting cryptocurrency payments with HYGate.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PrimaryButton>
              <Link href="#">Become a Merchant</Link>
            </PrimaryButton>
            <SecondaryButton>
              <Link href="#">Learn More</Link>
            </SecondaryButton>
          </div>
        </motion.div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 sm:py-24">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why Partner with HYGate?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Unlock a world of new opportunities for your business. We provide
              the tools you need to succeed in the digital economy.
            </p>
          </motion.div>

          <MerchantCards cards={merchantCards} cardVariants={zoomIn} />
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="bg-primary/5 py-16 dark:bg-primary/10 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Integration is simple with our well-documented APIs and plugins
              for all major e-commerce platforms. Join us today and start
              accepting crypto payments in minutes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <BigButton>
                <Link href="#">Create Your Merchant Account</Link>
              </BigButton>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-primary/50 bg-transparent px-8 text-base font-bold text-primary hover:bg-primary/10 dark:text-primary"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
