import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl gradient-navy text-white shadow-soft">
        <span className="font-display text-lg leading-none">P</span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-[15px] font-semibold tracking-tight text-foreground">
          ProMinds
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Education Group
        </span>
      </span>
    </Link>
  );
}
