import {
  ShieldCheck,
  ChartBar,
  Users,
  CalendarRange,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const features = [
  { icon: ShieldCheck, title: "Vetted, qualified tutors", body: "Every tutor is interviewed, subject-tested, and reference-checked before joining ProMinds." },
  { icon: ChartBar, title: "Performance-based reporting", body: "Parents receive structured reports tied to assessments — not vague comments." },
  { icon: Users, title: "Small elite groups", body: "Limited cohorts so each student receives genuine attention and feedback." },
  { icon: CalendarRange, title: "Flexible scheduling", body: "Sessions designed around school terms, exam timelines, and family life." },
  { icon: MessageSquareText, title: "Direct parent communication", body: "A dedicated coordinator keeps parents informed without information overload." },
  { icon: Sparkles, title: "Exam strategy & mindset", body: "Beyond content — students learn how to think, plan, and perform under pressure." },
];

export function WhyUs() {
  return (
    <section className="bg-surface/60">
      <div className="container-page py-24">
        <SectionHeading
          eyebrow="Why ProMinds"
          title="Built for outcomes families can measure."
          description="We don't just teach. We create the conditions for consistent, structured academic improvement."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.04} className="group bg-card p-8 transition hover:bg-accent/40">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition group-hover:border-gold/60 group-hover:text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
