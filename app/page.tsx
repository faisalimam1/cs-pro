import Constellation from "@/components/Constellation";
import Countdown from "@/components/Countdown";
import OrganizerLogos from "@/components/OrganizerLogos";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { Badge, MapPinLink } from "@/components/ui";
import { EVENT } from "@/lib/event";

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
              <span className="block text-[1.05rem] font-semibold tracking-[0.32em] text-gold-2 [text-shadow:0_2px_24px_rgba(226,197,126,.4)]">
                IEEE&nbsp;CS&nbsp;PRO&nbsp;2026
              </span>
              <span className="mt-1 block">{EVENT.theme}</span>
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
              An exclusive leadership &amp; networking forum for CS professionals,
              held over one morning.
            </p>
          </Reveal>

          <Reveal delay={480}>
            <p className="mt-6 text-[0.92rem] tracking-[0.06em] text-strong">
              {EVENT.dateLabel} &nbsp;·&nbsp; {EVENT.timeLabel} &nbsp;·&nbsp; {EVENT.venue}
              <MapPinLink href={EVENT.venueMapUrl} />
            </p>
          </Reveal>

          <Reveal delay={560} className="mt-14">
            <Countdown />
          </Reveal>

          <Reveal delay={600} className="mt-16">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-2">
              Why IEEE CS Pro
            </p>
            <p className="mx-auto max-w-[640px] font-serif text-[1.05rem] leading-[1.6] text-body/90">
              Organised by the IEEE Computer Society, Bangalore Chapter, IEEE
              CS Pro 2026 is convened with a singular intent — to bring the
              people who set direction and the people who build the future
              into the same room. For one focused morning, away from the
              noise of another conference panel, it makes space for
              thoughtful dialogue, considered perspective, and the
              connections that shape what comes next.
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
