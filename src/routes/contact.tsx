import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Phone, Send, Instagram, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/lib/site";
import { FaqAccordion } from "@/components/home/FaqAccordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ProMinds Education Group" },
      {
        name: "description",
        content:
          "Book a free consultation, send a quick inquiry, or chat with us on WhatsApp. We respond in under 2 hours on average.",
      },
      { property: "og:title", content: "Contact ProMinds Education Group" },
      {
        property: "og:description",
        content: "Reach our team via WhatsApp, email, Instagram, phone, or our quick inquiry form.",
      },
    ],
  }),
  component: ContactPage,
});

const contactCards = [
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with the team", href: site.whatsappUrl, accent: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
  { icon: Instagram, label: "Instagram", value: "@prominds.education", href: site.instagram },
  { icon: Send, label: "Telegram", value: "ProMinds Channel", href: site.telegram },
];

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-page relative grid gap-12 pb-20 pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Contact ProMinds
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              Let's talk about your child's next chapter.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Send a quick inquiry, book a free consultation, or reach out on the channel you prefer.
              A real coordinator will respond — usually within two hours.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <Clock className="h-4 w-4 text-gold" />
              Average response time <strong className="ml-1">under 2 hours</strong>
            </div>

            <ContactForm />
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-4">
              {contactCards.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl border p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-elegant ${
                      c.accent ? "border-gold/40 bg-card" : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                          c.accent ? "gradient-gold text-primary" : "gradient-navy text-white"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {c.label}
                        </div>
                        <div className="mt-1 font-display text-lg font-semibold">{c.value}</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          toast.success("Inquiry sent — we'll respond shortly.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
      className="mt-10 space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your full name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
      </div>
      <Field label="I am a…" name="role" type="select" options={["Parent", "Student", "Professional", "Institution"]} />
      <Field label="Interested in" name="interest" type="select" options={[
        "Academic Tutorials",
        "Career & Professional Services",
        "Academic Document Support",
        "Parent Education",
        "Other",
      ]} />
      <Field label="Message" name="message" type="textarea" placeholder="Tell us a little about your goals…" />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-95 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send inquiry"}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We typically respond within 2 hours during working hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  options,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  options?: string[];
}) {
  const base =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40";
  return (
    <label className="block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
      {label}
      {type === "textarea" ? (
        <textarea name={name} required placeholder={placeholder} rows={4} className={base} />
      ) : type === "select" ? (
        <select name={name} required className={base} defaultValue="">
          <option value="" disabled>Select one</option>
          {options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input type={type} name={name} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
