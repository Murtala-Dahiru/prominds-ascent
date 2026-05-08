import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, FileSpreadsheet } from "lucide-react";
import { DivisionLayout } from "@/components/divisions/DivisionLayout";

export const Route = createFileRoute("/divisions/career")({
  head: () => ({
    meta: [
      { title: "Career & Professional Services — ProMinds" },
      {
        name: "description",
        content:
          "CV optimization, LinkedIn positioning, NYSC, internship and scholarship guidance — built around how recruiters actually shortlist.",
      },
      { property: "og:title", content: "Career & Professional Services — ProMinds" },
      {
        property: "og:description",
        content:
          "Premium career positioning, CV and LinkedIn optimisation, scholarship and internship guidance.",
      },
    ],
  }),
  component: CareerDivision,
});

function CareerDivision() {
  return (
    <DivisionLayout
      eyebrow="Division · Career & Professional"
      title="Career positioning, done at a higher standard."
      description="A modern, recruiter-aware approach to CVs, LinkedIn profiles, internships, NYSC placements, and scholarship applications."
      heroIcon={Briefcase}
      ctaLabel="Book consultation"
      accentClass="bg-gradient-to-br from-[oklch(0.32_0.06_260)] to-[oklch(0.45_0.10_250)]"
      services={[
        { title: "CV Optimization", body: "Strategically rewritten to pass ATS and impress hiring managers." },
        { title: "LinkedIn Optimization", body: "Headline, About, experience, and visibility tuned for recruiters." },
        { title: "NYSC Application Support", body: "Guidance and structuring for placements that align with your goals." },
        { title: "Internship Preparation", body: "Profile, search strategy, and interview readiness." },
        { title: "Scholarship Guidance", body: "Application strategy, essays, and document review." },
        { title: "Cover Letter Writing", body: "Tailored, professional, and outcome-focused." },
        { title: "Career Positioning", body: "Personal brand strategy for graduates and early-career professionals." },
      ]}
      highlightTitle="A measurable before-and-after, every time."
      highlightBody="Our CV reviews are structured: layout, language, evidence, and ATS readiness. Clients consistently report more callbacks within weeks."
      highlightStats={[
        { value: "3.4×", label: "Avg interview rate" },
        { value: "92%", label: "ATS pass rate" },
        { value: "14d", label: "Avg first callback" },
      ]}
    >
      <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <FileSpreadsheet className="h-3.5 w-3.5 text-gold" /> CV before / after
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-muted/40 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Before</div>
            <div className="mt-3 space-y-2">
              <div className="h-3 w-3/4 rounded bg-foreground/15" />
              <div className="h-2 w-full rounded bg-foreground/10" />
              <div className="h-2 w-5/6 rounded bg-foreground/10" />
              <div className="h-2 w-2/3 rounded bg-foreground/10" />
              <div className="h-2 w-3/4 rounded bg-foreground/10" />
            </div>
            <div className="mt-4 inline-flex rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-medium text-destructive">
              ATS · 42%
            </div>
          </div>
          <div className="relative rounded-2xl border border-gold/40 bg-card p-4 shadow-soft">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">After</div>
            <div className="mt-3 space-y-2">
              <div className="h-3 w-1/2 rounded bg-foreground/40" />
              <div className="h-2 w-full rounded bg-foreground/20" />
              <div className="h-2 w-5/6 rounded bg-foreground/20" />
              <div className="h-2 w-3/4 rounded bg-foreground/20" />
              <div className="h-2 w-4/5 rounded bg-foreground/20" />
            </div>
            <div className="mt-4 inline-flex rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-medium text-foreground">
              ATS · 96%
            </div>
          </div>
        </div>
      </div>
    </DivisionLayout>
  );
}
