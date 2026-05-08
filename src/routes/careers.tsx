import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, GraduationCap, Heart, Sparkles, Users } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CtaBand } from "@/components/home/CtaBand";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join ProMinds Education Group" },
      {
        name: "description",
        content:
          "Become a tutor, coordinator, career coach, or content specialist at ProMinds. We're building Africa's most trusted premium education group.",
      },
      { property: "og:title", content: "Careers at ProMinds Education Group" },
      {
        property: "og:description",
        content: "Open roles, culture, and how to join the ProMinds team.",
      },
    ],
  }),
  component: CareersPage,
});

const culture = [
  { icon: GraduationCap, title: "Excellence-first", body: "We hire for craft, not credentials alone." },
  { icon: Heart, title: "Quietly serious", body: "Calm professionalism over loud personalities." },
  { icon: Users, title: "Real autonomy", body: "Senior tutors and coordinators run their own practice." },
  { icon: Sparkles, title: "Premium standards", body: "We invest in the quality of every interaction." },
];

const roles = [
  { title: "Subject Tutor (STEM)", type: "Part-time / Full-time", location: "Remote · Lagos" },
  { title: "Academic Coordinator", type: "Full-time", location: "Lagos" },
  { title: "Career & CV Coach", type: "Contract", location: "Remote" },
  { title: "Content & Curriculum Specialist", type: "Full-time", location: "Remote" },
];

function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-page relative pb-20 pt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Careers
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Join the team raising Africa's academic standard.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We're looking for tutors, coordinators, career coaches, and content specialists who
              care about craft, communication, and outcomes.
            </p>
            <a
              href="#apply"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Become a tutor <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Culture" title="How we work." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold">{c.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface/60">
        <div className="container-page py-20">
          <SectionHeading align="left" eyebrow="Open roles" title="Where we're hiring." />
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
            {roles.map((r, i) => (
              <a
                key={r.title}
                href="#apply"
                className={`group flex items-center justify-between gap-4 p-6 transition hover:bg-accent/40 ${
                  i !== 0 ? "border-t border-border" : ""
                }`}
              >
                <div>
                  <div className="font-display text-xl font-semibold">{r.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {r.type} · {r.location}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Apply <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Become a Tutor"
              title="Apply to teach with ProMinds."
              description="Tell us about your background and the subjects you're strongest in. We'll review and respond within 5 working days."
            />
          </div>
          <div className="lg:col-span-7">
            <TutorApplication />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function TutorApplication() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Application received — we'll be in touch.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
      className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your full name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone / WhatsApp" name="phone" placeholder="+234…" />
        <Field label="Highest qualification" name="qualification" placeholder="e.g. M.Sc Mathematics" />
      </div>
      <Field
        label="Subjects you can teach"
        name="subjects"
        placeholder="e.g. Engineering Math, Statistics, Physics"
      />
      <Field
        label="Tell us briefly why you'd be a great ProMinds tutor"
        name="bio"
        type="textarea"
        placeholder="A few sentences about your teaching style and experience…"
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-95 disabled:opacity-60"
      >
        {loading ? "Submitting…" : "Submit application"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  const base =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40";
  return (
    <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
      {label}
      {type === "textarea" ? (
        <textarea name={name} required placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input type={type} name={name} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
