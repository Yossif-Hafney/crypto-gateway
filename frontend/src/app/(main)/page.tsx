"use client";
import MotionSection from "@components/MotionSection";
import LandingSection from "@components/Home/LandingSection";
import CoinsSection from "@components/Home/CoinsSection";
import HowItWorks from "@components/Home/HowWorks";
import WhyUs from "@components/Home/WhyUs";
import Questions from "@components/Home/Questions";
import Ready from "@components/Home/Ready";

export default function HomePage() {
  return (
    <main className="flex-grow overflow-hidden">
      <MotionSection>
        <LandingSection />
      </MotionSection>

      <MotionSection delay={0.1}>
        <CoinsSection />
      </MotionSection>

      <MotionSection delay={0.2}>
        <HowItWorks />
      </MotionSection>

      <MotionSection delay={0.3}>
        <WhyUs />
      </MotionSection>

      <MotionSection delay={0.4}>
        <Questions />
      </MotionSection>

      <MotionSection delay={0.5}>
        <Ready />
      </MotionSection>
    </main>
  );
}
