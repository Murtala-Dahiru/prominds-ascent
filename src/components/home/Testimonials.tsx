import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

const testimonials = [
  {
    quote:
      "ProMinds restructured how my daughter approaches mathematics. Her WAEC result jumped from a C5 to an A1 — and her confidence followed.",
    name: "Mrs. Adeyemi",
    role: "Parent · Lagos",
  },
  {
    quote:
      "The tutor matching was thoughtful, the reports were clear, and communication was respectful. Genuinely premium service.",
    name: "Engr. Okafor",
    role: "Parent · Abuja",
  },
  {
    quote:
      "Their CV and LinkedIn rework directly led to my first internship offer. They understood positioning at a level I hadn't seen before.",
    name: "Tunde A.",
    role: "300L Engineering",
  },
  {
    quote:
      "Bootcamp prep for JAMB was structured, intense, and mature. I felt ready, not anxious.",
    name: "Chinaza E.",
    role: "JAMB 2024 · 312",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];

  return (
    <section className="bg-surface/60">
      <div className="container-page py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="The families and students we serve, in their own words."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card sm:p-14">
            <Quote className="absolute -right-4 -top-4 h-32 w-32 text-accent" strokeWidth={1} />
            <div className="relative">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-foreground sm:text-[28px]">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-navy" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Show testimonial ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === k ? "w-8 bg-primary" : "w-3 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
