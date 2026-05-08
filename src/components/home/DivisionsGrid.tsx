import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { divisions } from "@/lib/divisions";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

export function DivisionsGrid() {
  return (
    <section id="divisions" className="container-page py-24">
      <SectionHeading
        eyebrow="Our Divisions"
        title="Four divisions, one academic standard."
        description="Each ProMinds division operates with its own dedicated team, methodology, and measurable outcomes — unified by a single commitment to excellence."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {divisions.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.slug} delay={i * 0.06}>
              <Link
                to={d.to}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${d.accent} opacity-10 blur-2xl transition group-hover:opacity-20`} />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-navy text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {d.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.blurb}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Explore division
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
