import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function About() {
  return (
    <section id="sobre" className="section-shell">
      <div className="section-grid grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal className="space-y-6">
          <div className="editorial-card overflow-hidden p-3">
            <Image
              src={siteContent.about.imageSrc}
              alt={siteContent.about.imageAlt}
              width={960}
              height={1200}
              className="aspect-[4/5] w-full rounded-[28px] object-cover object-top"
            />
          </div>

          <div className="editorial-card bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {siteContent.about.highlightsTitle}
            </p>
            <div className="mt-5 space-y-4">
              {siteContent.about.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <p className="text-sm leading-7">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Sobre a profissional"
            title={siteContent.about.title}
          />

          <div className="mt-8 space-y-5">
            {siteContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteContent.about.checklist.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-border/80 bg-white/88 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-7">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild size="lg">
              <a
                href={siteContent.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteContent.about.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
