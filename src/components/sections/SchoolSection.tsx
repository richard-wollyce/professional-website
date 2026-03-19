import { ContentIcon } from "@/components/shared/content-icon";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/lib/site-content";

export function SchoolSection() {
  return (
    <section className="section-shell bg-[linear-gradient(180deg,#eef4f0_0%,#f7faf8_100%)]">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            eyebrow="SEDUC / Conviva"
            title={siteContent.school.title}
            description={siteContent.school.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {siteContent.school.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="editorial-card h-full border-white/60 bg-white/78 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-accent">
                  <ContentIcon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-sans text-lg font-medium text-foreground">
                  {item.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 max-w-4xl" delay={0.16}>
          <p>{siteContent.school.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
