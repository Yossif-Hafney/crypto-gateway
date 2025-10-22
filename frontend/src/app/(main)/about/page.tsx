"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, zoomIn, stagger } from "./Components/animationVariants";
import AboutCards from "./Components/AboutCards";

export default function AboutPage() {
  return (
    <main className="flex-grow">
      {/* Hero */}
      <motion.section
        className="relative py-24 sm:py-32 md:py-40 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKEXEvzt0yhFjaM0hMT5YztMYeRHeCI6wBMxio0807zSeAQvY32nB946TakoXuvM-MDlDJk4xD27bsJkTR2FWWRORUDV3knCr6L8BAGS5fZqC4q6l3-RpbzlcwLW_G9I13IyHLb74gnvUNTL2ssy2tgsNsqLjJJ6b07Up4bwfzCuWssXQ6fL_K48uiIOc1QVnm35NGv2IYtn8lvr7q_JJuQbkYgPTwtcQpyky6u5Dfo8ZJdSEfrcNm10l6vMIji0thPfY1krpG8RI"
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 to-background-dark" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 cursor-default">
          <motion.h1
            className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl"
            variants={fadeUp}
          >
            About CoinGate
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
            variants={fadeUp}
          >
            Empowering the future of payments with secure, fast, and borderless
            cryptocurrency transactions.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center cursor-default">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We make crypto payments accessible, secure, and seamless for
              everyone.
            </p>
          </div>

          <AboutCards
            cards={[
              {
                title: "Security First",
                desc: "Advanced encryption and multi-layer security protect every transaction.",
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              },
              {
                title: "Global Reach",
                desc: "Accept payments from anywhere instantly, without borders.",
                icon: (
                  <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                ),
              },
              {
                title: "Low Fees & Speed",
                desc: "Fast, low-cost transactions that keep your business growing.",
                icon: (
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                ),
              },
            ]}
            cardVariants={zoomIn}
          />
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="py-20 text-center bg-gradient-to-br from-primary/20 via-primary/10 to-background-dark text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Join the Future?</h2>
        <p className="mb-8 text-gray-300">
          Start accepting crypto payments easily with CoinGate.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-lg hover:shadow-primary/40 transition-all"
        >
          Get Started
        </motion.button>
      </motion.section>
    </main>
  );
}
