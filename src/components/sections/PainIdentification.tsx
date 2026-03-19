import { ContentIcon } from "@/components/shared/content-icon";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/lib/site-content";

export function PainIdentification() {
  return (
    <section className="section-shell bg-secondary/35">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Sinais que merecem cuidado"
            title={siteContent.painPoints.title}
            description={siteContent.painPoints.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.painPoints.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="editorial-card h-full p-6">
                <div className="flex h-full flex-col gap-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <ContentIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-sans text-lg font-medium leading-7 text-foreground">
                    {item.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl" delay={0.15}>
          <p className="text-center text-pretty">{siteContent.painPoints.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
