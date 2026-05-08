import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartHandshake, LineChart } from "lucide-react";
import parentImg from "@/assets/parent-child.jpg";
import { Reveal } from "@/components/shared/Reveal";

const pillars = [
  { icon: ShieldCheck, title: "Safe & vetted", body: "Background-checked tutors and structured oversight." },
  { icon: LineChart, title: "Visible progress", body: "Dashboards and reports parents can actually understand." },
  { icon: HeartHandshake, title: "Genuine partnership", body: "We work with you — not around you." },
];

export function ParentPreview() {
  return (
    <section className="container-page py-24">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-border shadow-elegant">
              <img
                src={parentImg}
                alt="Parent and child reviewing academic progress together"
                loading="lazy"
                className="h-[460px] w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 left-6 hidden rounded-2xl p-4 shadow-soft sm:block">
              <div className="text-xs text-muted-foreground">This term</div>
              <div className="mt-1 font-display text-xl font-semibold">+18% average grade lift</div>
              <div className="mt-2 h-1.5 w-44 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full gradient-gold" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Parent Education
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
            A premium partnership built around your child.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            ProMinds gives parents structured visibility, calm communication, and a serious
            academic team you can quietly trust. No noise, no theatrics — just measurable growth.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-3 text-sm font-semibold">{p.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.body}</div>
                </div>
              );
            })}
          </div>

          <Link
            to="/divisions/parents"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
          >
            Explore Parent Education <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
