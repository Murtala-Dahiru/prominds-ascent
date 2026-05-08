import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, LineChart, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-student.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="grain absolute inset-0 opacity-60" />
      {/* Floating gradient blobs */}
      <motion.div
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative grid gap-12 pb-20 pt-10 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-16">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            A premium education group, built for measurable outcomes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 font-display text-[44px] font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
          >
            Building Academic Excellence for the{" "}
            <span className="relative inline-block">
              <span className="gradient-text-gold">Next Generation</span>
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-2.5 w-full text-gold/60"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 50 0 100 6 T 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Premium academic support, tutorials, career guidance, and educational systems designed
            to help students and families achieve measurable success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition hover:opacity-95"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/divisions/tutorials"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              Explore Programs
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              Become a Tutor →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-primary"
                  />
                ))}
              </div>
              <span><strong className="text-foreground">2,400+</strong> families served</span>
            </div>
            <div className="flex items-center gap-1.5">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-gold">{s}</span>
              ))}
              <span className="ml-1"><strong className="text-foreground">4.9</strong> average parent rating</span>
            </div>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto max-w-md"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-elegant">
              <img
                src={heroImg}
                alt="Focused student studying with ProMinds materials"
                width={1080}
                height={1620}
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating glass cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-6 top-10 hidden w-56 rounded-2xl p-4 shadow-soft sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Avg grade lift</div>
                  <div className="font-display text-lg font-semibold">+27%</div>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-3/4 rounded-full gradient-gold" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-4 bottom-10 hidden w-60 rounded-2xl p-4 shadow-soft sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-primary">
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Next session</div>
                  <div className="text-sm font-semibold">Physics · Today 4:30 PM</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl px-4 py-3 shadow-soft md:flex"
            >
              <div className="flex items-center gap-2 text-xs text-foreground">
                <GraduationCap className="h-4 w-4 text-gold" />
                <span><strong>WAEC 2025</strong> · A1 in Mathematics</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
