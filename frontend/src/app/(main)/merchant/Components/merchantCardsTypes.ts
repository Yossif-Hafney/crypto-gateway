import React from "react";
import { Variants } from "framer-motion";

export interface Card {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface MerchantCardsProps {
  cards: Card[];
  cardVariants?: Variants;
}
