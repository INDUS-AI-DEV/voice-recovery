import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ValueSection } from "./components/ValueSection";
import { SupportedBySection } from "./components/SupportedBySection";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ValueSection />
      <SupportedBySection />
      <CTABanner />
      <Footer />
    </div>
  );
}