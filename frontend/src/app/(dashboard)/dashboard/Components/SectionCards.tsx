"use client";
import Card from "./Card";
import CardStats from "./CardStats";

export default function SectionCards() {
  return (
    <>
      <section className="w-full space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white tracking-tight">
          Performance
        </h1>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <CardStats
            title="Daily Payments"
            value="$1,250"
            color="from-blue-500 to-blue-400"
          />
          <CardStats
            title="Monthly Payments"
            value="$32,000"
            color="from-green-500 to-green-400"
          />
          <CardStats
            title="Yearly Payments"
            value="$380,000"
            color="from-purple-500 to-purple-400"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white tracking-tight">
          Key Metrics
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
