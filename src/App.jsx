import BackgroundGrain from "./components/backgroundgrain";
import AboutSection from "./sections/AboutSection";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import MenuSection from "./sections/MenuSection";
import QuoteSection from "./sections/QuoteSection";

export default function App() {
  return (
    <main className="min-h-screen bg-[#080807] text-[#f4efe5] selection:bg-[#f4efe5] selection:text-[#080807]">
      <BackgroundGrain />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
