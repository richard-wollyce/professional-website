import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function Specialties() {
  return (
    <section id="especialidades" className="section-shell bg-secondary/35">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Especialidades"
            title={siteContent.specialties.title}
            description={siteContent.specialties.description}
          />
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <div className="flex flex-wrap gap-3">
            {siteContent.specialties.items.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-border/70 bg-white px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10" delay={0.16}>
          <Button asChild variant="outline">
            <a
              href={siteContent.contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {siteContent.specialties.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
