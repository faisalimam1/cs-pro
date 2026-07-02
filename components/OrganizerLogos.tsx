/* eslint-disable @next/next/no-img-element */

// Official IEEE marks are full-colour on transparent backgrounds; presented on
// light chips so they stay legible (and on-brand) against the dark navy.
type Logo = { src: string; alt: string };

export const LOGO: Record<string, Logo> = {
  bangaloreSection: { src: "/assets/logos/ieeebs.png", alt: "IEEE Bangalore Section" },
  sensorsCouncil: { src: "/assets/logos/ieeecs.png", alt: "IEEE Sensors Council" },
  cs80: {
    src: "/assets/logos/logo-IEEE-CS-80th-FINAL_Color.avif",
    alt: "IEEE Computer Society — Celebrating 80 Years",
  },
};

const DEFAULT_LOGOS: Logo[] = [LOGO.bangaloreSection, LOGO.sensorsCouncil, LOGO.cs80];

const SIZE = {
  sm: { chip: "px-4 py-2.5", img: "h-7 w-auto object-contain sm:h-9" },
  lg: { chip: "px-5 py-3", img: "h-11 w-auto object-contain sm:h-14" },
};

export default function OrganizerLogos({
  logos = DEFAULT_LOGOS,
  size = "sm",
}: {
  logos?: Logo[];
  size?: keyof typeof SIZE;
}) {
  const s = SIZE[size];
  return (
    <nav
      aria-label="Organizing bodies"
      className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
    >
      {logos.map((logo) => (
        <span
          key={logo.src}
          className={`flex items-center rounded-md bg-white/95 ${s.chip} shadow-[0_10px_28px_-14px_rgba(0,0,0,.7)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-0.5`}
        >
          <img src={logo.src} alt={logo.alt} className={s.img} />
        </span>
      ))}
    </nav>
  );
}
