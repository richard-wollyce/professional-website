import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowSessionsWork } from "@/components/sections/HowSessionsWork";
import { HowTherapyHelps } from "@/components/sections/HowTherapyHelps";
import { PainIdentification } from "@/components/sections/PainIdentification";
import { SchoolSection } from "@/components/sections/SchoolSection";
import { Specialties } from "@/components/sections/Specialties";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { siteContent } from "@/lib/site-content";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteContent.seo.url}#person`,
      name: siteContent.brand.fullName,
      alternateName: siteContent.brand.professionalName,
      url: siteContent.seo.url,
      image: `${siteContent.seo.url}${siteContent.about.imageSrc}`,
      jobTitle: siteContent.brand.role,
      email: siteContent.contact.email,
      telephone: siteContent.contact.phone,
      sameAs: [siteContent.contact.instagramHref],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade de Franca (UNIFRAN)",
        },
      ],
      worksFor: {
        "@id": `${siteContent.seo.url}#business`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteContent.contact.addressLocality,
        addressRegion: "SP",
        addressCountry: "BR",
      },
      knowsAbout: [
        "Psicologia clínica e educacional",
        "Psicanálise lacaniana",
        "Psicologia hospitalar",
        "Ludoterapia",
        "Clínica do luto",
        "Dor psicossomática",
        "Saúde mental escolar",
        "Assistência social e rede protetiva",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteContent.seo.url}#business`,
      name: siteContent.brand.businessName,
      description: siteContent.seo.description,
      url: siteContent.seo.url,
      image: `${siteContent.seo.url}${siteContent.hero.imageSrc}`,
      telephone: siteContent.contact.phone,
      email: siteContent.contact.email,
      areaServed: siteContent.contact.areaServed,
      founder: {
        "@id": `${siteContent.seo.url}#person`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: siteContent.contact.addressLocality,
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
  ],
};

function serializeJsonLd(data: typeof jsonLd) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Header />
      <main id="top">
        <Hero />
        <PainIdentification />
        <HowTherapyHelps />
        <Differentials />
        <Specialties />
        <SchoolSection />
        <HowSessionsWork />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
