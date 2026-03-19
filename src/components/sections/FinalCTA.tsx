import { Clock3, Mail, Phone } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/site-content";

export function FinalCTA() {
  return (
    <section id="contato" className="section-shell bg-accent">
      <div className="section-grid">
        <Reveal className="rounded-[36px] border border-white/15 bg-white/[0.08] p-8 backdrop-blur-sm sm:p-10 lg:p-14">
          <SectionHeading
            eyebrow="Contato"
            title={siteContent.finalCta.title}
            description={siteContent.finalCta.subtitle}
            light
          />

          <div className="mt-8">
            <Button asChild variant="light" size="lg">
              <a
                href={siteContent.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                {siteContent.finalCta.button}
              </a>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 text-white/88 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                    Telefone
                  </p>
                  <p className="mt-2 text-base leading-7 text-white">
                    {siteContent.contact.phone}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                    E-mail
                  </p>
                  <p className="mt-2 text-base leading-7 text-white">
                    {siteContent.contact.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                    Horário
                  </p>
                  <p className="mt-2 text-base leading-7 text-white">
                    {siteContent.contact.schedule}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
