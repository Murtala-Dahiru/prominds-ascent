import { createFileRoute } from "@tanstack/react-router";
import { FileText, ShieldCheck } from "lucide-react";
import { DivisionLayout } from "@/components/divisions/DivisionLayout";

export const Route = createFileRoute("/divisions/academic-support")({
  head: () => ({
    meta: [
      { title: "Academic Document Support — ProMinds" },
      {
        name: "description",
        content:
          "SIWES report formatting, research structuring, academic polishing, plagiarism cleanup, and chapter guidance — handled professionally.",
      },
      { property: "og:title", content: "Academic Document Support — ProMinds" },
      {
        property: "og:description",
        content:
          "Restrained, professional support for academic documents — formatting, structure, and clarity.",
      },
    ],
  }),
  component: AcademicSupport,
});

function AcademicSupport() {
  return (
    <DivisionLayout
      eyebrow="Division · Academic Document Support"
      title="Academic documents, refined to a professional standard."
      description="A restrained, scholarly service: structure, formatting, polishing, and clarity — without ever crossing into ghostwriting territory."
      heroIcon={FileText}
      ctaLabel="Submit a document"
      accentClass="bg-gradient-to-br from-[oklch(0.30_0.05_260)] to-[oklch(0.42_0.06_260)]"
      services={[
        { title: "SIWES Report Formatting", body: "Compliant structure, headings, and layout." },
        { title: "Research Structuring", body: "Logical chapter flow, methodology positioning, and clarity." },
        { title: "Formatting & Corrections", body: "Citation, spacing, captions, and presentation." },
        { title: "Academic Document Polishing", body: "Tone, grammar, and academic register refinement." },
        { title: "Plagiarism Cleanup", body: "Honest restructuring and rephrasing — never fabrication." },
        { title: "Chapter Structuring Guidance", body: "Coaching on building each chapter with academic rigor." },
      ]}
      highlightTitle="Professional. Quiet. Academically sound."
      highlightBody="Documents are handled by trained academic editors who respect institutional standards. We polish your work — we never replace it."
      highlightStats={[
        { value: "24h", label: "Standard turnaround" },
        { value: "98%", label: "Acceptance rate" },
        { value: "100%", label: "Confidential" },
      ]}
    >
      <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Quality checklist
        </div>
        <ul className="mt-5 space-y-3 text-sm">
          {[
            "Title page & front matter compliant",
            "Consistent heading hierarchy",
            "References formatted (APA / IEEE / MLA)",
            "Figures & tables captioned",
            "Plagiarism reduction pass complete",
            "Final language polish applied",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </DivisionLayout>
  );
}
