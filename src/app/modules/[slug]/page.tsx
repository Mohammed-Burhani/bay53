import Header from "@/components/sections/header";
import ModuleHero from "@/components/sections/module-details/module-hero";
import ModuleChallenges from "@/components/sections/module-details/module-challenges";
import ModuleFeatures from "@/components/sections/module-details/module-features";
import ModuleWorkflow from "@/components/sections/module-details/module-workflow";
import ModuleCTA from "@/components/sections/module-details/module-cta";
import Footer from "@/components/sections/footer";
import { getModuleBySlug, getAllModules } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const modules = await getAllModules();
  return modules.map((module: any) => ({
    slug: module.slug,
  }));
}

export default async function ModuleDetailsPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = await getModuleBySlug(slug);

  if (!data) {
    notFound();
  }

  const heroImageUrl = data.heroImage ? urlFor(data.heroImage).url() : '';

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ModuleHero 
          title={data.heroTitle} 
          description={data.heroDescription} 
          image={heroImageUrl} 
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
