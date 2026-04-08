import AboutPreview from "@/components/home/AboutPreview";
import HeroSection from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSections";

function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
    </main>
  )
}


export default Home;