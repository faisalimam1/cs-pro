import Link from "next/link";
import type { ReactNode } from "react";
import { EVENT } from "@/lib/event";

/* ---------- Button / link-button ---------- */
type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: BtnProps) {
  const base =
    "inline-block rounded-sm text-center font-semibold uppercase tracking-[0.16em] transition-all duration-300";
  const sizing = size === "lg" ? "px-[46px] py-[19px] text-[0.85rem]" : "px-[34px] py-4 text-[0.82rem]";
  const variants =
    variant === "primary"
      ? "border border-white/15 bg-champagne text-black hover:-translate-y-0.5 hover:bg-champagne-2"
      : "border border-white/28 text-strong hover:-translate-y-0.5 hover:border-gold-2 hover:text-gold-2";
  const cls = `${base} ${sizing} ${variants} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* ---------- Badge (refined — no sparkles) ---------- */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line-gold bg-gold/[0.07] px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-gold-2">
      {children}
    </span>
  );
}

/* ---------- Section wrapper ---------- */
export function Section({
  children,
  id,
  alt = false,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative py-[clamp(72px,11vw,120px)] ${
        alt ? "border-y border-line bg-white/[0.025]" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ---------- Centered width container ---------- */
export function Wrap({
  children,
  narrow = false,
  className = "",
}: {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative z-[2] mx-auto w-full px-7 ${narrow ? "max-w-[760px]" : "max-w-[1140px]"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Kicker + heading block ---------- */
export function SectionHeading({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="text-center">
      <p className="mb-[18px] text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-2">
        {kicker}
      </p>
      <h2 className="m-0 font-serif text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.08] text-head">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[1.15rem] text-muted">{sub}</p>}
    </div>
  );
}

/* ---------- Map pin link (visibly clickable badge next to a venue name) ---------- */
export function MapPinLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="View venue on Google Maps"
      className={`ml-2 inline-flex translate-y-[-2px] items-center gap-1.5 rounded-full border border-line-gold bg-gold/[0.08] px-3 py-1 align-middle text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-gold-2 transition-all duration-300 hover:-translate-y-[1px] hover:border-gold-2 hover:bg-gold/[0.16] hover:text-gold ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
      View Map
    </a>
  );
}

/* ---------- Brand identifier + tagline (hero) ---------- */
export function BrandTagline({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[0.78rem] font-medium uppercase tracking-[0.26em] text-muted ${className}`}>
      <span className="block text-[1.05rem] font-semibold tracking-[0.32em] text-gold-2 [text-shadow:0_2px_24px_rgba(226,197,126,.4)]">
        IEEE&nbsp;CSBC-&nbsp;CS&nbsp;PRO&nbsp;2026
      </span>
      <span className="mt-1 block">{EVENT.theme}</span>
    </p>
  );
}

/* ---------- Hero event meta (prominent date · time · venue chip) ---------- */
export function EventMeta({
  timeLabel = EVENT.timeLabel,
  className = "",
}: {
  timeLabel?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 ${className}`}>
      <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-line-gold bg-gold/[0.06] px-6 py-3 text-[1rem] font-medium tracking-[0.03em] text-head shadow-[0_12px_34px_-18px_rgba(0,0,0,.75)]">
        <span>{EVENT.dateLabel}</span>
        <span aria-hidden="true" className="text-gold-2">·</span>
        <span>{timeLabel}</span>
        <span aria-hidden="true" className="text-gold-2">·</span>
        <span>{EVENT.venue}</span>
      </span>
      <MapPinLink href={EVENT.venueMapUrl} className="ml-0 translate-y-0" />
    </div>
  );
}

/* ---------- Hairline gold rule ---------- */
export function GoldRule() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto mt-12 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent"
    />
  );
}
