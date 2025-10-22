export const generateChartData = (title: string) => {
  if (title === "Daily Payments") {
    return [
      { time: "6h", amount: 800 },
      { time: "12h", amount: 950 },
      { time: "18h", amount: 1100 },
      { time: "24h", amount: 1250 },
    ];
  } else if (title === "Monthly Payments") {
    return [
      { time: "W1", amount: 28000 },
      { time: "W2", amount: 30000 },
      { time: "W3", amount: 31000 },
      { time: "W4", amount: 32000 },
    ];
  } else {
    return [
      { time: "Q1", amount: 350000 },
      { time: "Q2", amount: 360000 },
      { time: "Q3", amount: 370000 },
      { time: "Q4", amount: 380000 },
    ];
  }
};

export const getLineColor = (color: string) => {
  if (color === "from-blue-500 to-blue-400") return "#2563eb";
  if (color === "from-green-500 to-green-400") return "#16a34a";
  return "#9333ea";
};
