import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="container-page py-24">
      <div className="relative overflow-hidden rounded-[32px] border border-border gradient-navy p-10 text-white shadow-elegant sm:p-16">
        <div className="grain absolute inset-0 opacity-30" />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Free 20-minute consultation
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
            Let's design the academic plan your child actually needs.
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/75">
            Book a quiet, structured conversation with a ProMinds coordinator. We'll understand
            your goals and recommend the right program — no pressure.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-primary transition hover:bg-gold-soft"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
