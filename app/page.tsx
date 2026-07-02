import Constellation from "@/components/Constellation";
import Countdown from "@/components/Countdown";
import OrganizerLogos, { LOGO } from "@/components/OrganizerLogos";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { Badge, BrandTagline, EventMeta, Section, SectionHeading, Wrap } from "@/components/ui";

const SESSIONS = [
  {
    tag: "Leaders",
    title: "Leadership Round Table",
    time: "9:00 AM – 1:00 PM",
    body: "An exclusive, invitation-based forum that brings together industry leaders, founders, entrepreneurs, and academic leaders for focused discussions on emerging challenges, workforce readiness and innovation. Through moderated round table conversations, participants will exchange perspectives, share practical experiences, and develop actionable recommendations that foster long-term partnerships and create meaningful impact.",
  },
  {
    tag: "Professionals",
    title: "CS Professional Connect",
    time: "11:00 AM – 1:00 PM",
    body: "An open, welcoming forum that brings together HR professionals, training & placement officers, academicians, and industry practitioners with the wider IEEE community for meaningful conversation on workforce readiness and responsible innovation. Through a shared opening address, guided introductions and a meet-and-greet with industry leaders, participants will build cross-sector connections, explore the benefits of IEEE membership, and form partnerships that extend well beyond the event.",
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
            <OrganizerLogos logos={[LOGO.bangaloreSection, LOGO.cs80]} size="lg" />
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <Badge>By Invitation Only</Badge>
          </Reveal>

          <Reveal delay={200}>
            <BrandTagline className="mb-6 mt-7" />
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
            <EventMeta className="mt-6" />
          </Reveal>

          <Reveal delay={560} className="mt-14">
            <Countdown />
          </Reveal>

          <Reveal delay={600} className="mt-16">
            <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-gold-2">
              Why IEEE CS Pro
            </p>
            <p className="mx-auto max-w-[640px] font-serif text-[1.05rem] leading-[1.6] text-body/90">
              Organised by the IEEE Computer Society Bangalore Chapter - CS
              Pro 2026 is convened with a singular intent; to bring the
              people who set direction and the people who build the future
              into the same room. For one focused morning, away from the
              noise of another conference panel, it makes space for
              thoughtful dialogue, considered perspective, and the
              connections that shape what comes next.
            </p>
          </Reveal>
        </div>
      </section>

      <Section alt>
        <Wrap>
          <SectionHeading
            kicker="The Format"
            title="Two gatherings, one morning"
            sub="IEEE CS Pro 2026 unfolds as two connected sessions across a single morning."
          />
          <div className="mt-14 grid grid-cols-1 gap-[26px] md:grid-cols-2">
            {SESSIONS.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article className="group h-full rounded-lg border border-line bg-gradient-to-b from-panel to-panel/50 px-8 pb-9 pt-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-line-gold hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]">
                  <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-gold-2">
                    {s.tag}
                  </p>
                  <h3 className="m-0 mb-2 font-serif text-[1.85rem] font-medium leading-[1.12] text-head">
                    {s.title}
                  </h3>
                  <p className="mb-5 text-[0.95rem] font-medium tracking-[0.04em] text-gold-2">
                    {s.time}
                  </p>
                  <p className="m-0 font-serif text-[1.22rem] font-normal leading-[1.62] text-body/95 text-justify hyphens-auto [text-wrap:pretty]">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <SiteFooter />
    </main>
  );
}
