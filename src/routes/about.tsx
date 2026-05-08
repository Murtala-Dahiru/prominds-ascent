import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CtaBand } from "@/components/home/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ProMinds Education Group" },
      {
        name: "description",
        content:
          "ProMinds is a premium education group helping students, families, and professionals reach measurable academic and career excellence.",
      },
      { property: "og:title", content: "About ProMinds Education Group" },
      {
        property: "og:description",
        content: "Mission, values, and the team behind ProMinds Education Group.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Excellence", body: "We hold ourselves and our students to a measurable, uncompromising standard." },
  { title: "Trust", body: "Parents, students, and tutors all deserve calm, honest, structured communication." },
  { title: "Structure", body: "Real outcomes come from disciplined systems — not luck or charisma." },
  { title: "Respect", body: "Every learner is treated with dignity. We teach, we don't humiliate." },
];

const milestones = [
  { year: "2019", body: "ProMinds founded with a single tutoring program in Lagos." },
  { year: "2021", body: "Career & Professional Services division launched." },
  { year: "2023", body: "Academic Document Support and Parent Education divisions added." },
  { year: "2025", body: "2,400+ students supported across Nigeria and the diaspora." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-page relative pb-20 pt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> About ProMinds
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              We exist to raise the academic standard — quietly and seriously.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ProMinds Education Group is a premium education company building the systems, tutors,
              and partnerships that students and families need to thrive — across tutoring, careers,
              academic documents, and parent education.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Our Mission
              </div>
              <p className="mt-4 font-display text-2xl leading-snug text-foreground">
                To make premium academic support and educational excellence accessible to families
                who care deeply about outcomes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Our Vision
              </div>
              <p className="mt-4 font-display text-2xl leading-snug text-foreground">
                To become the most trusted education group across Africa — known for structure,
                results, and the quiet kind of excellence that lasts.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="container-page py-24">
          <SectionHeading eyebrow="Our Values" title="The standards we hold ourselves to." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="font-display text-xl font-semibold">{v.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <SectionHeading eyebrow="Our Story" title="A short timeline." />
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <div className={`relative flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:items-center ${
                  i % 2 === 1 ? "sm:[&>div:first-child]:order-2" : ""
                }`}>
                  <div className="pl-12 sm:pl-0 sm:pr-10 sm:text-right">
                    <div className="font-display text-3xl font-semibold gradient-text-gold">{m.year}</div>
                  </div>
                  <div className="pl-12 sm:pl-10">
                    <div className="rounded-2xl border border-border bg-card p-5 text-sm text-foreground/90">
                      {m.body}
                    </div>
                  </div>
                  <span className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-gold sm:left-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
          >
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
