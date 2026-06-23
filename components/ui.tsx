import Link from "next/link";
import type { ReactNode } from "react";

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
      {sub && <p className="mt-4 text-[0.98rem] text-muted">{sub}</p>}
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
