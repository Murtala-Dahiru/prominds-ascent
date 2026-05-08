import { Link } from "@tanstack/react-router";
import { Instagram, Send, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Divisions",
    links: [
      { to: "/divisions/tutorials", label: "Academic Tutorials" },
      { to: "/divisions/career", label: "Career Services" },
      { to: "/divisions/academic-support", label: "Academic Support" },
      { to: "/divisions/parents", label: "Parent Education" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A premium education group helping students, families, and professionals reach
              measurable academic and career excellence.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-accent"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={`tel:${site.phone}`}
                aria-label="Phone"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:bg-accent"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-foreground/80 hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Newsletter
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Quiet, monthly insights for students and parents. No spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full border border-border bg-card p-1 pl-4"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                aria-label="Email"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} ProMinds Education Group. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span>{site.address}</span>
            <span className="hidden sm:inline">{site.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
