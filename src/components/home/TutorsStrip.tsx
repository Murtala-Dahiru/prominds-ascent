import { Link } from "@tanstack/react-router";
import t1 from "@/assets/tutor-1.jpg";
import t2 from "@/assets/tutor-2.jpg";
import t3 from "@/assets/tutor-3.jpg";
import t4 from "@/assets/tutor-4.jpg";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";

const tutors = [
  { img: t1, name: "Dr. Aisha Bello", subjects: "Engineering Mathematics · Statistics", credential: "PhD, University of Lagos" },
  { img: t2, name: "Mr. Tunde Okonkwo", subjects: "Physics · WAEC/JAMB", credential: "M.Sc, Obafemi Awolowo" },
  { img: t3, name: "Ms. Chiamaka Eze", subjects: "Chemistry · Research Support", credential: "M.Sc, University of Ibadan" },
  { img: t4, name: "Mr. Daniel Adekunle", subjects: "Engineering · Career Coaching", credential: "B.Eng, Covenant University" },
];

export function TutorsStrip() {
  return (
    <section className="container-page py-24">
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          align="left"
          eyebrow="Our Team"
          title="Meet a few of the tutors behind every result."
          description="Selected for subject mastery, communication, and the quiet kind of professionalism families recognise."
        />
        <Link
          to="/about"
          className="hidden shrink-0 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-accent sm:inline-flex"
        >
          Meet the team
        </Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tutors.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <div className="font-display text-lg font-semibold">{t.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{t.subjects}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground/80">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {t.credential}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
