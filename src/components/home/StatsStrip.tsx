import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Reveal } from "@/components/shared/Reveal";

const stats = [
  { value: 2400, suffix: "+", label: "Students supported" },
  { value: 96, suffix: "%", label: "Parent satisfaction" },
  { value: 120, suffix: "+", label: "Vetted tutors" },
  { value: 27, suffix: "%", label: "Avg grade improvement" },
];

const logos = [
  "University of Lagos",
  "Covenant University",
  "Obafemi Awolowo",
  "Ahmadu Bello",
  "University of Ibadan",
  "Babcock University",
  "Pan-Atlantic",
  "Lagos Business School",
];

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="text-center sm:text-left">
              <div className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12 whitespace-nowrap text-sm font-medium text-muted-foreground">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display tracking-tight">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
