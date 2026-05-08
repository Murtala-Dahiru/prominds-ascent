import { Check } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/lib/site";

const tiers = [
  {
    name: "Foundation",
    price: "₦50,000",
    suffix: "+ / month",
    tag: "Consistent support",
    desc: "Families seeking consistent and reliable academic support.",
    features: ["Assigned tutor", "Weekly sessions", "Parent communication", "Basic progress tracking"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₦100,000",
    suffix: "+ / month",
    tag: "Most chosen",
    desc: "Parents who want structured academic improvement and accountability.",
    features: [
      "Performance reports",
      "Customized study plans",
      "Progress monitoring",
      "Assignment follow-up",
      "Parent review meetings",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "₦150,000",
    suffix: "+ / month",
    tag: "Premium mentorship",
    desc: "Families seeking premium academic mentorship and personalised support.",
    features: [
      "Elite tutors",
      "Monthly performance analytics",
      "Exam strategy planning",
      "Flexible scheduling",
      "Priority support",
      "Dedicated coordinator",
    ],
    highlight: false,
  },
];

export function PricingCards() {
  return (
    <section id="pricing" className="container-page py-24">
      <SectionHeading
        eyebrow="Programs & Pricing"
        title="Three tiers. One uncompromising standard."
        description="Choose the rhythm that matches your family's goals. Every tier comes with the same care for quality."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition ${
                t.highlight
                  ? "border-gold/60 bg-card shadow-elegant lg:-translate-y-3 lg:scale-[1.02]"
                  : "border-border bg-card shadow-card hover:shadow-elegant"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {t.tag}
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t.name}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <div className="font-display text-4xl font-semibold text-foreground">{t.price}</div>
                <div className="mb-1 text-sm text-muted-foreground">{t.suffix}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-7 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        t.highlight ? "bg-gold text-primary" : "bg-secondary text-foreground"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6">
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`block rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                    t.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-95"
                      : "border border-border bg-card hover:bg-accent"
                  }`}
                >
                  Choose {t.name}
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Custom institutional and family-of-multiple-students plans available on request.
      </p>
    </section>
  );
}
