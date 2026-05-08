import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CalendarCheck, Sparkles } from "lucide-react";
import { DivisionLayout } from "@/components/divisions/DivisionLayout";

export const Route = createFileRoute("/divisions/tutorials")({
  head: () => ({
    meta: [
      { title: "Academic Tutorials — ProMinds Education Group" },
      {
        name: "description",
        content:
          "Elite tutoring across Engineering Mathematics, Physics, Chemistry, Statistics, WAEC/JAMB prep, exam bootcamps, and small-group elite tutoring.",
      },
      { property: "og:title", content: "Academic Tutorials — ProMinds" },
      {
        property: "og:description",
        content:
          "Premium subject-by-subject tutoring with structured progress tracking and exam strategy.",
      },
    ],
  }),
  component: TutorialsPage,
});

function TutorialsPage() {
  return (
    <DivisionLayout
      eyebrow="Flagship Division · Academic Tutorials"
      title="Subject mastery, taught with structure."
      description="Our flagship division — premium tutorials across STEM and exam prep, delivered by vetted tutors using progress-driven methods."
      heroIcon={BookOpen}
      ctaLabel="Book a session"
      services={[
        { title: "Engineering Mathematics", body: "Calculus, linear algebra, differential equations." },
        { title: "Physics", body: "Mechanics, electromagnetism, modern physics." },
        { title: "Chemistry", body: "Organic, physical, and analytical chemistry." },
        { title: "Statistics & Probability", body: "Foundations through applied data analysis." },
        { title: "WAEC / JAMB Preparation", body: "Strategy-led prep with timed mock cycles." },
        { title: "Exam Bootcamps", body: "Intensive multi-day revision and strategy intensives." },
        { title: "Revision Programs", body: "Structured term-end and pre-exam revision tracks." },
        { title: "Small-Group Elite Tutoring", body: "Limited cohorts of 3–5 high-performing students." },
      ]}
      highlightTitle="Tutor matching designed around your child."
      highlightBody="Every student is paired through a thoughtful process: subject needs, learning style, schedule, and personality. You meet 1–2 recommended tutors before confirming."
      highlightStats={[
        { value: "120+", label: "Vetted tutors" },
        { value: "48h", label: "Match turnaround" },
        { value: "97%", label: "First-fit retention" },
      ]}
    >
      <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-gold" /> Tutor match preview
        </div>
        <div className="mt-5 space-y-3">
          {[
            { name: "Dr. Aisha Bello", subject: "Engineering Mathematics", fit: 96 },
            { name: "Mr. Tunde Okonkwo", subject: "Physics", fit: 92 },
            { name: "Ms. Chiamaka Eze", subject: "Chemistry", fit: 88 },
          ].map((t) => (
            <div key={t.name} className="flex items-center justify-between rounded-2xl border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-navy" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.subject}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Fit</div>
                <div className="font-display text-lg font-semibold">{t.fit}%</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-secondary p-4 text-sm">
          <div className="flex items-center gap-2">
            <CalendarCheck className="h-4 w-4 text-gold" />
            Suggested first session
          </div>
          <div className="font-medium">Sat · 10:00 AM</div>
        </div>
      </div>
    </DivisionLayout>
  );
}
