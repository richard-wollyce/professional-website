import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { siteContent } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="section-grid py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-4">
            <a
              href="#top"
              className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[0.03em]"
            >
              {siteContent.brand.professionalName}
            </a>
            <p className="max-w-md text-white/72">
              {siteContent.brand.extendedRole}, com escuta psicanalítica,
              acolhimento ético e uma trajetória construída entre clínica,
              hospital, escola e instituições.
            </p>
            <p className="text-sm text-white/56">{siteContent.contact.crp}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
              Navegação
            </h3>
            <div className="flex flex-col gap-3">
              {siteContent.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white/56">
              Contato
            </h3>
            <div className="space-y-3 text-sm text-white/78">
              <a
                href={siteContent.contact.phoneHref}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteContent.contact.phone}</span>
              </a>
              <a
                href={siteContent.contact.emailHref}
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteContent.contact.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteContent.contact.location}</span>
              </div>
              <a
                href={siteContent.contact.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteContent.contact.instagramLabel}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-white/56 lg:flex-row lg:items-center lg:justify-between">
          <p>{siteContent.footer.copyright}</p>
          <p>{siteContent.footer.serviceLine}</p>
        </div>
      </div>
    </footer>
  );
}
