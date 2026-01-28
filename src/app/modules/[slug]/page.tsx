import Header from "@/components/sections/header";
import ModuleHero from "@/components/sections/module-details/module-hero";
import ModuleChallenges from "@/components/sections/module-details/module-challenges";
import ModuleFeatures from "@/components/sections/module-details/module-features";
import ModuleWorkflow from "@/components/sections/module-details/module-workflow";
import ModuleCTA from "@/components/sections/module-details/module-cta";
import Footer from "@/components/sections/footer";
import { modulesData } from "@/lib/modules-data";
import { notFound } from "next/navigation";

export default async function ModuleDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const data = modulesData[slug as keyof typeof modulesData];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ModuleHero 
          title={data.heroTitle} 
          description={data.heroDescription} 
          image={data.heroImage} 
        />
        <ModuleChallenges 
          challenges={data.challenges} 
          solutions={data.solutions} 
        />
        <ModuleFeatures 
          features={data.features} 
        />
        <ModuleWorkflow 
          moduleName={data.title} 
          workflow={data.workflow} 
        />
        <ModuleCTA 
          moduleName={data.title} 
        />
      </main>
      <Footer />
    </div>
  );
}
