/* eslint-disable @next/next/no-img-element */

// Official IEEE marks are full-colour on transparent backgrounds; presented on
// light chips so they stay legible (and on-brand) against the dark navy.
const LOGOS = [
  { src: "/assets/logos/ieeebs.png", alt: "IEEE Bangalore Section" },
  { src: "/assets/logos/ieeecs.png", alt: "IEEE Computer Society — Bangalore Chapter" },
  {
    src: "/assets/logos/logo-IEEE-CS-80th-FINAL_Color.avif",
    alt: "IEEE Computer Society — Celebrating 80 Years",
  },
];

export default function OrganizerLogos() {
  return (
    <nav
      aria-label="Organizing bodies"
      className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
    >
      {LOGOS.map((logo) => (
        <span
          key={logo.src}
          className="flex items-center rounded-md bg-white/95 px-4 py-2.5 shadow-[0_10px_28px_-14px_rgba(0,0,0,.7)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-7 w-auto object-contain sm:h-9"
          />
        </span>
      ))}
    </nav>
  );
}
