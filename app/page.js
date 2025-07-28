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

      <main className="flex-1 flex flex-col items-center justify-center gap-16 px-4 py-12">
        <AnimatedSection animationType="scaleIn" delay={0.4}>
          <TestimonialsSlider />
        </AnimatedSection>
      </main>

      <AnimatedSection animationType="slideInDown">
        <footer className="w-full text-center text-white py-8 primary-bg mt-12 text-base">
          <div className="container mx-auto px-4">
            <p className="mb-2">
              © {new Date().getFullYear()} YqUnion Dış Ticaret. Tüm hakları
              saklıdır.
            </p>
            <p className="text-sm opacity-80">
              Türkiye-Çin dış ticaretinde güvenilir çözüm ortağınız
            </p>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
}
