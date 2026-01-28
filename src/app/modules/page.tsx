import Header from "@/components/sections/header";
import ModulesHero from "@/components/sections/modules-hero";
import ModulesGrid from "@/components/sections/modules-grid";
import SeamlessIntegration from "@/components/sections/seamless-integration";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function ModulesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ModulesHero />
        <ModulesGrid />
        <SeamlessIntegration />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
