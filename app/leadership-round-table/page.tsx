import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import SiteFooter from "@/components/SiteFooter";
import { Section, SectionHeading, Wrap, GoldRule } from "@/components/ui";
import { Agenda, RegisterSection, TrackHero } from "@/components/track";
import { EVENT, ROUTES } from "@/lib/event";

export const metadata: Metadata = {
  title: "Leadership Round Table",
  description:
    "An exclusive morning round-table forum for invited industry leaders, founders, CXOs and decision-makers at IEEE CS Pro 2026 — Sunday, 26 July 2026, Bengaluru.",
  alternates: { canonical: ROUTES.leaders },
  openGraph: {
    url: ROUTES.leaders,
    title: "Leadership Round Table · IEEE CS Pro 2026",
    description:
      "An exclusive morning round-table forum for invited leaders, founders and decision-makers. By invitation only.",
    images: [{ url: "/assets/og/og-image.png", width: 1200, height: 630 }],
  },
};

const AGENDA: [string, string][] = [
  ["9:00 AM", "Arrival, registration, IEEE Membership Desk & refreshments"],
  ["9:30 AM", "Inaugural Session — welcome address & round-table briefing"],
  ["10:00 AM", "Three parallel Leadership Round Tables"],
  ["10:45 AM", "Rapid Fire Leadership Exchange"],
  ["11:05 AM", "Leadership Insights Presentation"],
  ["11:20 AM", "Moderator summary & group photograph"],
  ["11:30 AM", "Tea break & Professionals Connect"],
  ["1:00 PM", "Lunch & networking"],
];

const ROUND_TABLES = [
  {
    no: "I",
    title: "Driving Organisational Transformation",
    line: "Actions taken, changes implemented and outcomes achieved — real-world case studies that inspire transformation across sectors.",
  },
  {
    no: "II",
    title: "Building the AI-Ready Workforce",
    line: "How startups, industry and academia partner together — internships, curriculum, hiring and experiential learning for the AI era.",
  },
  {
    no: "III",
    title: "Beyond the Machine",
    line: "Human-centred, ethical and purpose-driven innovation — ensuring technology serves humanity as AI grows more capable.",
  },
];

const SEATS: [string, string][] = [
  ["leader", "Industry Leaders"],
  ["founder", "Founders"],
  ["investor", "CXOs"],
  ["academia", "Decision-Makers"],
];

export default function LeadershipRoundTable() {
  return (
    <main>
      <TrackHero
        eyebrow="Leaders"
        title="Leadership Round Table"
        intro="A closed, peer-level forum for the decision-makers who drive industry, academia, business and startups forward, convened for focused round-table dialogue and not scripted panels."
      />

      {/* Invitation statement */}
      <Section>
        <Wrap narrow className="text-center">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,2.6vw,1.95rem)] leading-[1.5] text-head">
              It is our privilege to invite you to lead the conversation — a half-morning
              of focused round tables, generating practical insight and lasting
              collaboration among the people shaping the future workforce.
            </p>
          </Reveal>
          <Reveal>
            <GoldRule />
          </Reveal>
        </Wrap>
      </Section>

      {/* Morning at a glance */}
      <Section alt>
        <Wrap>
          <SectionHeading
            kicker="The Programme"
            title="The morning at a glance"
            sub="9:00 AM – 1:00 PM · sequence indicative"
          />
          <Agenda items={AGENDA} />
        </Wrap>
      </Section>

      {/* The round tables */}
      <Section>
        <Wrap>
          <SectionHeading
            kicker="The Round Tables"
            title="Three conversations that matter"
            sub="10:00 – 10:45 AM · three parallel tables · leaders only"
          />
          <div className="mt-14 grid grid-cols-1 gap-[26px] md:grid-cols-3">
            {ROUND_TABLES.map((rt, i) => (
              <Reveal key={rt.no} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-lg border border-line bg-gradient-to-b from-panel to-panel/50 px-8 pb-9 pt-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-line-gold hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]">
                  <span className="mb-[18px] block font-serif text-[2.4rem] font-medium italic leading-none text-gold-2/90">
                    {rt.no}
                  </span>
                  <h3 className="m-0 mb-3 font-serif text-[1.4rem] font-semibold leading-[1.2] text-head">
                    {rt.title}
                  </h3>
                  <p className="m-0 text-[0.96rem] text-body/90">{rt.line}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-[620px] text-center text-[0.9rem] text-muted">
              Detailed discussion themes and table allocations are shared with confirmed
              participants ahead of the event.
            </p>
          </Reveal>
        </Wrap>
      </Section>

      {/* Who's at the table */}
      <Section alt>
        <Wrap>
          <SectionHeading kicker="Who's at the Table" title="A curated circle of leaders" />
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {SEATS.map(([icon, label], i) => (
              <Reveal key={label} delay={(i % 4) * 80}>
                <RoomCard icon={icon} label={label} />
              </Reveal>
            ))}
          </div>
        </Wrap>
      </Section>

      <RegisterSection
        formUrl={EVENT.forms.leaders}
        ctaLabel="Register as a Leader"
        cal={{
          title: "IEEE CS Pro 2026 — Leadership Round Table",
          desc: "An exclusive leadership round-table forum. By invitation only. Leaders. Learners. Impact.",
          location: "Sheraton Grand Bangalore Hotel, Brigade Gateway",
        }}
      />

      <SiteFooter />
    </main>
  );
}
