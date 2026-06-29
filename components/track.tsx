import Constellation from "@/components/Constellation";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import AddToCalendar from "@/components/AddToCalendar";
import { Badge, Button, MapPinLink, Wrap } from "@/components/ui";
import { EVENT, type CalEvent } from "@/lib/event";

/* ---------- Track hero ---------- */
export function TrackHero({
  eyebrow,
  title,
  intro,
  timeLabel = EVENT.timeLabel,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  timeLabel?: string;
}) {
  return (
    <header
      id="top"
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 py-[clamp(96px,12vh,130px)] text-center"
    >
      <Constellation />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(75%_65%_at_50%_42%,transparent_38%,rgba(6,15,30,.72)_100%)]"
      />

      <div className="relative z-[2] mx-auto w-full max-w-[900px]">
        <Reveal delay={120} className="mt-8">
          <Badge>{EVENT.access}</Badge>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-5 mt-7 text-[0.78rem] font-medium uppercase tracking-[0.26em] text-muted">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <h1 className="m-0 font-serif text-[clamp(2.6rem,6.4vw,4.8rem)] font-medium leading-[1.05] text-head [text-shadow:0_2px_40px_rgba(0,0,0,.4)]">
            {title}
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="mx-auto mt-7 max-w-[620px] font-serif text-[clamp(1.2rem,2.4vw,1.55rem)] leading-[1.5] text-head">
            {intro}
          </p>
        </Reveal>

        <Reveal delay={480}>
          <p className="mt-7 text-[0.92rem] tracking-[0.06em] text-strong">
            {EVENT.dateLabel} &nbsp;·&nbsp; {timeLabel} &nbsp;·&nbsp; {EVENT.venue}
            <MapPinLink href={EVENT.venueMapUrl} />
          </p>
        </Reveal>

        <Reveal delay={560} className="mt-12">
          <Countdown />
        </Reveal>

        <Reveal delay={640} className="mt-12">
          <Button href="#register">Register</Button>
        </Reveal>
      </div>
    </header>
  );
}

/* ---------- Agenda list ---------- */
export function Agenda({ items }: { items: [string, string][] }) {
  return (
    <ul className="mx-auto mt-12 max-w-[720px] list-none p-0">
      {items.map(([time, seg]) => (
        <Reveal as="li" key={time + seg}>
          <div className="flex items-baseline gap-6 border-b border-line px-1 py-4 last:border-b-0">
            <span className="w-[96px] shrink-0 font-serif text-[1.15rem] font-semibold tabular-nums tracking-[0.01em] text-gold-2">
              {time}
            </span>
            <span className="text-[1rem] leading-[1.5] text-body">{seg}</span>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------- Register band (deep) ---------- */
export function RegisterSection({
  formUrl,
  ctaLabel,
  cal,
  timeLabel = EVENT.timeLabel,
}: {
  formUrl: string;
  ctaLabel: string;
  cal: CalEvent;
  timeLabel?: string;
}) {
  return (
    <section
      id="register"
      className="relative overflow-hidden border-t border-line-gold bg-gradient-to-br from-[rgba(8,18,38,.9)] to-[rgba(6,15,30,.97)] py-[clamp(90px,11vw,130px)]"
    >
      <Constellation opacity={0.6} />
      <Wrap narrow className="text-center">
        <Reveal>
          <p className="mb-[18px] text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-2">
            You&rsquo;re Invited
          </p>
        </Reveal>
        <Reveal>
          <h2 className="m-0 font-serif text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.08] text-head">
            Reserve your place
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-start justify-center gap-[clamp(20px,6vw,72px)]">
            {[
              ["Date", EVENT.dateLabel],
              ["Time", timeLabel],
              ["Venue", EVENT.venue],
            ].map(([lbl, val]) => (
              <div key={lbl} className="flex flex-col gap-2.5">
                <span className="text-[0.66rem] uppercase tracking-[0.28em] text-gold-2">
                  {lbl}
                </span>
                <span className="font-serif text-[1.5rem] font-medium text-head">
                  {val}
                  {lbl === "Venue" && <MapPinLink href={EVENT.venueMapUrl} />}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={formUrl} external size="lg">
              {ctaLabel}
            </Button>
            <AddToCalendar event={cal} />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 font-serif text-[1.15rem] italic text-muted">
            Seats are by invitation. Kindly respond at your earliest convenience.
          </p>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-5 max-w-[520px] font-serif text-[1.3rem] font-semibold italic tracking-[0.01em] text-gold-2 [text-shadow:0_2px_24px_rgba(226,197,126,.35)]">
            {EVENT.afterNote}
          </p>
        </Reveal>
      </Wrap>
    </section>
  );
}
