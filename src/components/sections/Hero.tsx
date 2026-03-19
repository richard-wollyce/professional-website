import Image from "next/image";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-editorial-mesh pt-24 sm:pt-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
      <div className="section-grid section-shell grid gap-12 pt-10 sm:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal className="order-2 space-y-8 lg:order-1" y={30}>
          <div className="space-y-6">
            <span className="soft-label">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              {siteContent.brand.role}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-pretty text-[clamp(3rem,8vw,5.8rem)] font-semibold leading-[0.92] text-foreground">
                {siteContent.hero.title}
              </h1>
              <p className="max-w-xl text-[clamp(1.1rem,2.7vw,1.38rem)] leading-8 text-foreground/80">
                {siteContent.hero.subtitle}
              </p>
              <p className="max-w-xl">{siteContent.hero.description}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={siteContent.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                {siteContent.hero.primaryCta}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#como-funciona">
                {siteContent.hero.secondaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-center">
            <span className="rounded-full border border-border/70 bg-white/80 px-4 py-2 shadow-card">
              ✦ {siteContent.brand.badge}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {siteContent.contact.location}
            </span>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={0.12}>
          <div className="relative mx-auto max-w-[34rem]">
            <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-secondary/45 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-sage/55 blur-3xl" />
            <div className="editorial-card relative overflow-hidden rounded-[34px] border-white/70 bg-warm-panel p-3">
              <Image
                src={siteContent.hero.imageSrc}
                alt={siteContent.hero.imageAlt}
                width={960}
                height={1200}
                priority
                className="aspect-[4/5] w-full rounded-[28px] object-cover object-top"
              />
              <div className="absolute bottom-8 left-8 rounded-[26px] border border-white/75 bg-white/84 px-5 py-4 shadow-card backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  {siteContent.brand.professionalName}
                </p>
                <p className="mt-1 text-sm leading-6 text-foreground">
                  Psicoterapia e psicanálise com escuta ativa e sensível.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
