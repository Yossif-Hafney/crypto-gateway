import React from "react";
import { motion, Variants } from "framer-motion";

interface Card {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface AboutCardsProps {
  cards: Card[];
  cardVariants?: Variants;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutCards: React.FC<AboutCardsProps> = ({
  cards,
  cardVariants = defaultVariants,
}) => (
  <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((card, idx) => (
      <motion.div
        key={idx}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-start gap-4 rounded-xl p-6 shadow-lg dark:bg-background-dark/50 hover:shadow-primary/30 transition-shadow"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {card.icon}
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {card.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{card.desc}</p>
      </motion.div>
    ))}
  </div>
);

export default AboutCards;
