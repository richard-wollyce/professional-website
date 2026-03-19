import { ContentIcon } from "@/components/shared/content-icon";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/lib/site-content";

export function HowTherapyHelps() {
  return (
    <section className="section-shell bg-white">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Abordagem"
            title={siteContent.therapyHelps.title}
            description={siteContent.therapyHelps.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {siteContent.therapyHelps.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="editorial-card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/70 text-accent">
                  <ContentIcon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="mt-6 space-y-3">
                  <h3 className="font-sans text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
