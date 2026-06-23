/* eslint-disable @next/next/no-img-element */

const LOGOS = [
  { src: "/assets/logos/ieee-bangalore-section.svg", alt: "IEEE Bangalore Section" },
  {
    src: "/assets/logos/ieee-cs-bangalore.svg",
    alt: "IEEE Computer Society — Bangalore Chapter",
  },
  {
    src: "/assets/logos/ieee-80-years.svg",
    alt: "IEEE Computer Society — Celebrating 80 Years",
  },
];

export default function OrganizerLogos() {
  return (
    <nav
      aria-label="Organizing bodies"
      className="flex flex-wrap items-center justify-center gap-[22px]"
    >
      {LOGOS.map((logo, i) => (
        <span key={logo.src} className="flex items-center gap-[22px]">
          {i > 0 && (
            <span aria-hidden="true" className="hidden h-[30px] w-px bg-line sm:block" />
          )}
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-[46px] w-auto opacity-90 transition hover:-translate-y-0.5 hover:opacity-100"
          />
        </span>
      ))}
    </nav>
  );
}
