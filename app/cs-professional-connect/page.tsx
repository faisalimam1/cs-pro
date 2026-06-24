import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import SiteFooter from "@/components/SiteFooter";
import { Section, SectionHeading, Wrap, GoldRule } from "@/components/ui";
import { Agenda, RegisterSection, TrackHero } from "@/components/track";
import { EVENT, ROUTES } from "@/lib/event";

export const metadata: Metadata = {
  title: "CS Professional Connect",
  description:
    "A networking forum bringing together HR professionals, TPOs, placement coordinators, academicians and IEEE members at IEEE CS Pro 2026 — Sunday, 26 July 2026, Bengaluru.",
  alternates: { canonical: ROUTES.professionals },
  openGraph: {
    url: ROUTES.professionals,
    title: "CS Professional Connect · IEEE CS Pro 2026",
    description:
      "A networking forum connecting HR, placement, academia and industry with the IEEE community. By invitation only.",
    images: [{ url: "/assets/og/og-image.png", width: 1200, height: 630 }],
  },
};

const AGENDA: [string, string][] = [
  ["11:30 AM", "Opening Address — “Navigating a Changing World Together”"],
  ["12:00 PM", "Ice breakers & introductions"],
  ["12:20 PM", "Meet & Greet session with Industry Leaders"],
  ["12:50 PM", "Closing remarks & acknowledgements"],
  ["1:00 PM", "Lunch & networking"],
];

const EXPECT = [
  {
    title: "Cross-sector networking",
    line: "Open conversation among HR, TPOs, placement teams, academia and industry — built for real connections.",
  },
  {
    title: "IEEE Membership Drive",
    line: "Learn the benefits of IEEE membership, with on-the-spot registration support at the desk.",
  },
  {
    title: "A shared opening address",
    line: "“Navigating a Changing World Together” — on technology, workforce readiness and responsible innovation.",
  },
];

const ROOM: [string, string][] = [
  ["hr", "HR Professionals"],
  ["tpo", "TPOs"],
  ["academia", "Academicians"],
  ["leader", "Industry Professionals"],
  ["innovator", "IEEE Excom"],
  ["founder", "Founders"],
];

export default function CsProfessionalConnect() {
  return (
    <main>
      <TrackHero
        eyebrow="Session Two · Professionals"
        title="CS Professional Connect"
        intro="A networking forum connecting HR, placement, academia and industry with the IEEE community — meaningful conversations and lasting professional connections."
        timeLabel="11:00 AM – 1:00 PM"
      />

      {/* Intro statement */}
      <Section>
        <Wrap narrow className="text-center">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,2.6vw,1.95rem)] leading-[1.5] text-head">
              You are warmly invited to connect — an open session designed to bring
              professionals and the IEEE community together to learn, exchange and
              build partnerships across industry and academia.
            </p>
          </Reveal>
          <Reveal>
            <GoldRule />
          </Reveal>
        </Wrap>
      </Section>

      {/* At a glance */}
      <Section alt>
        <Wrap>
          <SectionHeading
            kicker="The Programme"
            title="The session at a glance"
            sub="Session 2 · 11:30 AM – 1:00 PM · sequence indicative"
          />
          <Agenda items={AGENDA} />
        </Wrap>
      </Section>

      {/* What to expect */}
      <Section>
        <Wrap>
          <SectionHeading kicker="What to Expect" title="An afternoon of connection" />
          <div className="mt-14 grid grid-cols-1 gap-[26px] md:grid-cols-3">
            {EXPECT.map((e, i) => (
              <Reveal key={e.title} delay={i * 120}>
                <article className="group h-full rounded-lg border border-line bg-gradient-to-b from-panel to-panel/50 px-8 pb-9 pt-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-line-gold hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]">
                  <span className="mb-[18px] block font-serif text-[1.6rem] font-medium text-gold-2">
                    0{i + 1}
                  </span>
                  <h3 className="m-0 mb-3 font-serif text-[1.4rem] font-semibold leading-[1.2] text-head">
                    {e.title}
                  </h3>
                  <p className="m-0 text-[0.96rem] text-body/90">{e.line}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      {/* Who's in the room */}
      <Section alt>
        <Wrap>
          <SectionHeading kicker="Who's in the Room" title="A wide professional circle" />
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {ROOM.map(([icon, label], i) => (
              <Reveal key={label} delay={(i % 6) * 70}>
                <RoomCard icon={icon} label={label} />
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <RegisterSection
        formUrl={EVENT.forms.professionals}
        ctaLabel="Register as a Professional"
        timeLabel="11:00 AM – 1:00 PM"
        cal={{
          title: "IEEE CS Pro 2026 — CS Professional Connect",
          desc: "A professional networking forum & IEEE membership drive. Leaders. Learners. Impact.",
          location: "Sheraton Grand Bangalore Hotel, Brigade Gateway",
        }}
      />

      <SiteFooter />
    </main>
  );
}
