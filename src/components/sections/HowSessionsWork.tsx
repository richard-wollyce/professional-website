import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteContent } from "@/lib/site-content";

export function HowSessionsWork() {
  return (
    <section id="como-funciona" className="section-shell bg-white">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title={siteContent.sessions.title}
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:left-[1.1rem] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:before:left-[1.35rem]">
          {siteContent.sessions.items.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <article className="relative grid gap-4 pl-12 sm:pl-16 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-8">
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white shadow-card sm:h-11 sm:w-11">
                  {item.step}
                </div>
                <div className="editorial-card bg-background p-6 lg:ml-2">
                  <h3 className="font-sans text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
