import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StoriaSection from "@/components/storia-section";
import MembriSection from "@/components/membri-section";
import EventiSection from "@/components/eventi-section";
import MediaSection from "@/components/media-section";
import ContattiSection from "@/components/contatti-section";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";

export default function Home() {
  useEffect(() => {
    // Add Playfair Display font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navbar />
      <HeroSection />
      <StoriaSection />
      <MembriSection />
      <EventiSection />
      <MediaSection />
      <ContattiSection />
      <Footer />
      <Lightbox />
    </div>
  );
}
