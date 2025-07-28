import HeroSlider from "./components/HeroSlider";
import AnimatedSection from "./components/AnimatedSection";
import SafeTradeSection from "./components/SafeTradeSection";
import AdvantagesSection from "./components/AdvantagesSection";
import TestimonialsSlider from "./components/TestimonialsSlider";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      <HeroSlider />

      <AnimatedSection animationType="fadeInUp" delay={0.2}>
        <SafeTradeSection />
      </AnimatedSection>

      <AnimatedSection animationType="fadeInUp" delay={0.3}>
        <AdvantagesSection />
      </AnimatedSection>

      <main className="flex-1 flex flex-col items-center justify-center gap-16 py-8 sm:py-12">
        <AnimatedSection animationType="scaleIn" delay={0.4}>
          <TestimonialsSlider />
        </AnimatedSection>
      </main>
    </div>
  );
}
