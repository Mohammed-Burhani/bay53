import Header from "@/components/sections/header";
import FeaturesHero from "@/components/sections/features-hero";
import FeatureGrid from "@/components/sections/feature-grid";
import BusinessBenefits from "@/components/sections/business-benefits";
import TechnicalSpecs from "@/components/sections/technical-specs";
import DemoCTA from "@/components/sections/demo-cta";
import Footer from "@/components/sections/footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FeaturesHero />
        <FeatureGrid />
        <BusinessBenefits />
        <TechnicalSpecs />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  );
}
