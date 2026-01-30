import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Modules from "@/components/sections/modules";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Modules />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
