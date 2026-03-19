import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/lib/site-content";

export function FAQ() {
  return (
    <section className="section-shell bg-white">
      <div className="section-grid">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={siteContent.faq.title}
            align="center"
          />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-4xl" delay={0.08}>
          <Accordion type="single" collapsible className="space-y-4">
            {siteContent.faq.items.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
