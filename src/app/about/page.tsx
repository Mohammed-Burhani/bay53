import Header from "@/components/sections/header";
import AboutHero from "@/components/sections/AboutHero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import VisionMission from "@/components/sections/VisionMission";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <WhoWeAre />
        <VisionMission />
        <WhyChooseUs />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
