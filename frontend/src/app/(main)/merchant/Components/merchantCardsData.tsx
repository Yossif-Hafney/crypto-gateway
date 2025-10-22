import type { Card } from "./merchantCardsTypes";

export const merchantCards: Card[] = [
  {
    title: "Seamless Transactions",
    desc: "Offer your customers a smooth and secure payment experience with instant transaction confirmations.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Global Reach",
    desc: "Tap into a global customer base by accepting payments from anyone, anywhere, without cross-border fees.",
    icon: (
      <>
        <path d="M21.5 12H2.5" />
        <path d="M21.5 12l-6.2 6.2" />
        <path d="M21.5 12l-6.2-6.2" />
      </>
    ),
  },
  {
    title: "Low Fees & No Chargebacks",
    desc: "Enjoy significantly lower processing fees compared to traditional payment methods and eliminate fraudulent chargebacks.",
    icon: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
];
