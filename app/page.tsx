import Link from "next/link";
import Constellation from "@/components/Constellation";
import Countdown from "@/components/Countdown";
import OrganizerLogos from "@/components/OrganizerLogos";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { Badge } from "@/components/ui";
import { EVENT, ROUTES } from "@/lib/event";

const TRACKS = [
  {
    href: ROUTES.leaders,
    tag: "Session One",
    name: "Leadership Round Table",
    who: "For invited industry leaders, founders, CXOs & decision-makers.",
  },
  {
    href: ROUTES.professionals,
    tag: "Session Two",
    name: "CS Professional Connect",
    who: "For HR professionals, TPOs, placement coordinators, academicians & IEEE members.",
  },
];

export default function Home() {
  return (
    <main id="top" className="flex min-h-screen flex-col">
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-[clamp(90px,12vh,130px)]">
        <Constellation />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(75%_65%_at_50%_42%,transparent_38%,rgba(6,15,30,.72)_100%)]"
        />

        <div className="relative z-[2] w-full max-w-[1000px] text-center">
          <Reveal>
            <OrganizerLogos />
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <Badge>By Invitation Only</Badge>
          </Reveal>

          <Reveal delay={200}>
            <p className="mb-6 mt-7 text-[0.78rem] font-medium uppercase tracking-[0.26em] text-muted">
              IEEE&nbsp;CS&nbsp;PRO&nbsp;2026 &nbsp;·&nbsp; {EVENT.theme}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <h1 className="m-0 font-serif text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[1.04] text-head [text-shadow:0_2px_40px_rgba(0,0,0,.4)]">
              <span className="block">Connecting Visionaries.</span>
              <span className="block italic text-gold-2">Empowering Opportunities.</span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="mx-auto mt-7 max-w-[640px] font-serif text-[clamp(1.2rem,2.4vw,1.6rem)] leading-[1.5] text-head">
              An exclusive leadership &amp; networking forum for CS professionals —
              held over one morning, in two sessions.
            </p>
          </Reveal>

          <Reveal delay={480}>
            <p className="mt-6 text-[0.92rem] tracking-[0.06em] text-strong">
              {EVENT.dateLabel} &nbsp;·&nbsp; {EVENT.timeLabel} &nbsp;·&nbsp; {EVENT.city}
            </p>
          </Reveal>

          <Reveal delay={560} className="mt-14">
            <Countdown />
          </Reveal>

          <Reveal delay={640} className="mt-16">
            <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-2">
              Choose your track to register
            </p>
            <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
              {TRACKS.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex flex-col rounded-xl border border-line-gold bg-gradient-to-b from-panel-2/70 to-panel/40 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(0,0,0,.7)]"
                >
                  <span className="mb-3 text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-gold-2">
                    {t.tag}
                  </span>
                  <h2 className="m-0 font-serif text-[1.6rem] font-semibold leading-[1.15] text-head">
                    {t.name}
                  </h2>
                  <p className="mb-0 mt-3 flex-1 text-[0.94rem] text-body/90">{t.who}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-gold-2">
                    Enter
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
