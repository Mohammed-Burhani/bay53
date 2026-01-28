import Header from "@/components/sections/header";
import ContactHero from "@/components/sections/contact-hero";
import ContactCards from "@/components/sections/contact-cards";
import ContactForms from "@/components/sections/contact-forms";
import BusinessHours from "@/components/sections/business-hours";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactCards />
        <ContactForms />
        <BusinessHours />
      </main>
      <Footer />
    </div>
  );
}
