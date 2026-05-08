import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const faqs = [
  { q: "How are tutors matched to my child?", a: "We assess subject needs, learning style, schedule, and personality fit. A coordinator then proposes 1–2 tutors and you confirm before the first session." },
  { q: "Are sessions in-person or online?", a: "Both. Most programs run online via secure video; in-person home sessions are available within Lagos and select cities for Premium and Elite tiers." },
  { q: "Do you support WAEC, JAMB, and post-UTME prep?", a: "Yes. We run structured revision tracks, exam-style mocks, and intensive bootcamps with strategy coaching." },
  { q: "How often will I receive progress updates?", a: "Foundation parents receive monthly summaries; Premium and Elite include detailed performance reports and review meetings." },
  { q: "Can I change tutors if it isn't a fit?", a: "Always. We re-match within 7 days at no cost — quality of fit is non-negotiable." },
  { q: "Do you offer career and CV services for adults?", a: "Yes — through our Career & Professional Services division, including CV, LinkedIn, NYSC, internship, and scholarship guidance." },
  { q: "How do I get started?", a: "Book a free consultation. We'll understand your goals, recommend a program, and design a plan within 48 hours." },
  { q: "Is my data and child's information protected?", a: "Yes. We use private, encrypted communication and never share student data with third parties." },
];

export function FaqAccordion() {
  return (
    <section className="bg-surface/60">
      <div className="container-page py-24">
        <SectionHeading eyebrow="FAQ" title="Answers, before you ask." />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
