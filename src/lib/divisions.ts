import { BookOpen, Briefcase, FileText, Heart } from "lucide-react";

export const divisions = [
  {
    slug: "tutorials",
    to: "/divisions/tutorials" as const,
    icon: BookOpen,
    eyebrow: "Flagship",
    title: "Academic Tutorials",
    blurb:
      "Elite tutoring across Engineering Mathematics, Physics, Chemistry, Statistics, and exam prep — small groups, measurable progress.",
    accent: "from-primary to-primary",
  },
  {
    slug: "career",
    to: "/divisions/career" as const,
    icon: Briefcase,
    eyebrow: "Professional",
    title: "Career & Professional Services",
    blurb:
      "CV optimization, LinkedIn positioning, NYSC, internship and scholarship guidance — built around how recruiters actually shortlist.",
    accent: "from-[oklch(0.35_0.08_255)] to-[oklch(0.45_0.10_250)]",
  },
  {
    slug: "academic-support",
    to: "/divisions/academic-support" as const,
    icon: FileText,
    eyebrow: "Document",
    title: "Academic Document Support",
    blurb:
      "SIWES report formatting, research structuring, polishing, and plagiarism cleanup — restrained, professional, and academically sound.",
    accent: "from-[oklch(0.32_0.06_260)] to-[oklch(0.42_0.06_260)]",
  },
  {
    slug: "parents",
    to: "/divisions/parents" as const,
    icon: Heart,
    eyebrow: "Families",
    title: "Parent Education",
    blurb:
      "A safe, structured partnership with parents — progress dashboards, learning environment guidance, and trusted academic mentorship.",
    accent: "from-[oklch(0.78_0.13_85)] to-[oklch(0.70_0.14_70)]",
  },
] as const;
