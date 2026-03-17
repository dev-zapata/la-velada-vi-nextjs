import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CombatsSection from "@/components/CombatsSection";
import ConcertsSection from "@/components/ConcertsSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CombatsSection />
        <ConcertsSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  );
}
