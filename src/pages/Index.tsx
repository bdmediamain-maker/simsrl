import { useScrollReveal } from "@/hooks/useScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Gallery from "@/components/Gallery";
import Areas from "@/components/Areas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFAB from "@/components/MobileFAB";

export default function Index() {
  useScrollReveal();

  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <Methodology />
      <Gallery />
      <Areas />
      <Contact />
      <Footer />
      <MobileFAB />
    </>
  );
}
