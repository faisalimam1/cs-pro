import type { CSSProperties } from "react";

/**
 * Audience card with a gold icon medallion. Icons in /assets/icons are
 * single-colour SVGs rendered via CSS mask so they take the gold treatment.
 */
export default function RoomCard({
  icon,
  label,
}: {
  icon: string; // filename stem in /assets/icons, e.g. "leader"
  label: string;
}) {
  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(/assets/icons/${icon}.svg)`,
    maskImage: `url(/assets/icons/${icon}.svg)`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-panel to-panel/50 px-5 pb-[34px] pt-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-line-gold hover:shadow-[0_30px_60px_-28px_rgba(0,0,0,.75)]">
      <span
        aria-hidden="true"
        className="mx-auto mb-[22px] grid h-[76px] w-[76px] place-items-center rounded-full border border-line-gold bg-[radial-gradient(circle_at_50%_34%,rgba(226,197,126,.18),transparent_72%)] shadow-[inset_0_0_22px_-6px_rgba(226,197,126,.5)] transition-transform duration-500 group-hover:scale-105"
      >
        <span
          className="block h-9 w-9 bg-gradient-to-br from-gold-2 to-gold transition-transform duration-500 group-hover:scale-105"
          style={maskStyle}
        />
      </span>
      <h3 className="m-0 font-sans text-[0.98rem] font-medium leading-[1.4] text-strong transition-colors group-hover:text-white">
        {label}
      </h3>
    </div>
  );
}
