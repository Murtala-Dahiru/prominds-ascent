import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles } from "lucide-react";
import { DivisionLayout } from "@/components/divisions/DivisionLayout";
import parentImg from "@/assets/parent-child.jpg";

export const Route = createFileRoute("/divisions/parents")({
  head: () => ({
    meta: [
      { title: "Parent Education — ProMinds Education Group" },
      {
        name: "description",
        content:
          "A safe, premium partnership with parents — visible progress dashboards, structured updates, and trusted academic mentorship for your child.",
      },
      { property: "og:title", content: "Parent Education — ProMinds" },
      {
        property: "og:description",
        content:
          "Premium, safe, structured academic partnership for parents who want measurable progress for their children.",
      },
      { property: "og:image", content: parentImg },
    ],
  }),
  component: ParentsDivision,
});

function ParentsDivision() {
  return (
    <DivisionLayout
      eyebrow="Division · Parent Education"
      title="A premium partnership built around your family."
      description="ProMinds gives parents the structured visibility, calm communication, and quiet professionalism that real academic progress requires."
      heroIcon={Heart}
      ctaLabel="Book parent consultation"
      accentClass="bg-gradient-to-br from-[oklch(0.78_0.13_85)] to-[oklch(0.65_0.14_70)]"
      services={[
        { title: "Parent Onboarding", body: "We learn your child, your goals, and how you prefer to be communicated with." },
        { title: "Progress Dashboards", body: "Clear, visual reports of grades, attendance, and improvement trajectory." },
        { title: "Monthly Review Meetings", body: "Calm, structured conversations with a dedicated coordinator." },
        { title: "Learning Environment Guidance", body: "How to set up a focused home study setting that actually works." },
        { title: "Behavioural & Academic Coaching", body: "Helping students build the habits behind sustained results." },
        { title: "Confidential Communication", body: "Encrypted channels, no information overload, never shared with third parties." },
      ]}
      highlightTitle="Trust is the product."
      highlightBody="We treat your child's academic life with the seriousness families deserve. Vetted tutors, structured oversight, and parents kept in the loop — without the noise."
      highlightStats={[
        { value: "96%", label: "Parent satisfaction" },
        { value: "100%", label: "Vetted tutors" },
        { value: "24/7", label: "Coordinator access" },
      ]}
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
        <img
          src={parentImg}
          alt="Parent and child reviewing academic progress"
          loading="lazy"
          className="h-72 w-full object-cover"
        />
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Parent dashboard preview
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border p-4">
              <div className="text-xs text-muted-foreground">Term progress</div>
              <div className="mt-1 font-display text-2xl font-semibold">+22%</div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-3/4 rounded-full gradient-gold" />
              </div>
            </div>
            <div className="rounded-2xl border border-border p-4">
              <div className="text-xs text-muted-foreground">Attendance</div>
              <div className="mt-1 font-display text-2xl font-semibold">98%</div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[98%] rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DivisionLayout>
  );
}
