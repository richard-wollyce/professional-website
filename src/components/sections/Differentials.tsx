import { ContentIcon } from "@/components/shared/content-icon";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/lib/site-content";

export function Differentials() {
  return (
    <section className="section-shell">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Autoridade com acolhimento"
            title={siteContent.differentials.title}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {siteContent.differentials.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="editorial-card h-full p-7">
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <ContentIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
