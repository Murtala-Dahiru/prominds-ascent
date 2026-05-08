import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CtaBand } from "@/components/home/CtaBand";

type Service = { title: string; body?: string };

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  heroIcon: LucideIcon;
  services: Service[];
  highlightTitle: string;
  highlightBody: string;
  highlightStats: { value: string; label: string }[];
  ctaLabel?: string;
  accentClass?: string; // gradient utility
  children?: React.ReactNode;
};

export function DivisionLayout({
  eyebrow,
  title,
  description,
  heroIcon: HeroIcon,
  services,
  highlightTitle,
  highlightBody,
  highlightStats,
  ctaLabel = "Book a session",
  accentClass = "gradient-navy",
  children,
}: Props) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-page relative grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant"
              >
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium hover:bg-accent"
              >
                See all divisions
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className={`relative aspect-square overflow-hidden rounded-[28px] ${accentClass} p-8 text-white shadow-elegant`}>
              <div className="grain absolute inset-0 opacity-30" />
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/30 blur-2xl" />
              <HeroIcon className="relative h-12 w-12" />
              <div className="relative mt-auto pt-32">
                <div className="font-display text-3xl font-semibold leading-tight">{eyebrow}</div>
                <div className="mt-2 text-sm text-white/80">A ProMinds division</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          align="left"
          eyebrow="What we offer"
          title="A focused suite of services."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04} className="bg-card p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-gold" /> Service
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
              {s.body && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Signature feature
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {highlightTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{highlightBody}</p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {highlightStats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>{children}</Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
