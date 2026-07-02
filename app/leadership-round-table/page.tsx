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
  ["10:45 AM", "Moderator summary & group photograph"],
  ["10:55 AM", "Rapid Fire Leadership Exchange"],
  ["11:15 AM", "Leadership Insights Presentation"],
  ["11:30 AM", "Tea Break & Professional Connect Networking"],
  ["1:00 PM", "Lunch"],
];

const ROUND_TABLES = [
  {
    no: "I",
    title: "Driving Organisational Transformation",
    line: "Explore how organisations have driven transformation through decisive actions, implemented strategic changes, and achieved measurable outcomes, with leaders sharing practical experiences, lessons learned, and real-world case studies.",
  },
  {
    no: "II",
    title: "Building the AI-Ready Workforce",
    line: "Discuss how startups, industry, and academia can work together to build an AI-ready workforce through stronger partnerships, internships, experiential learning, curriculum modernisation, and future-focused hiring practices.",
  },
  {
    no: "III",
    title: "Beyond the Machine",
    line: "Examine how organisations can foster human-centred, ethical, and purpose-driven innovation by building trust, strengthening leadership, and ensuring technological progress remains aligned with human values.",
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
        title="Leadership Round Table"
        intro="A closed forum for the decision-makers who drive industry, academia, business and startups forward, convened for focused round-table dialogue and not scripted panels."
      />

      {/* Invitation statement */}
      <Section>
        <Wrap narrow className="text-center">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,2.6vw,1.95rem)] leading-[1.5] text-head">
              It is our privilege to invite you to lead the conversation at an
              exclusive half-day Leadership Round Table. Join fellow leaders in
              exchanging practical insights, exploring shared challenges, and
              fostering collaborations that will help shape the future.
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
          />
          <Agenda items={AGENDA} />
        </Wrap>
      </Section>

      {/* The round tables */}
      <Section>
        <Wrap>
          <SectionHeading
            kicker="The Round Tables"
            title="Three Conversations That Matter"
            sub="10:00 AM – 10:45 AM | Three Parallel Round Table Discussions"
          />
          <div className="mt-14 grid grid-cols-1 gap-[26px] md:grid-cols-3">
            {ROUND_TABLES.map((rt, i) => (
              <Reveal key={rt.no} delay={i * 120}>
                <article className="group relative h-full overflow-hidden rounded-lg border border-line bg-gradient-to-b from-panel to-panel/50 px-8 pb-9 pt-10 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-line-gold hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.7)]">
                  <span className="mb-[18px] block font-serif text-[2.4rem] font-medium italic leading-none text-gold-2/90">
                    {rt.no}
                  </span>
                  <h3 className="m-0 mb-3 font-serif text-[1.4rem] font-semibold leading-[1.2] text-head">
                    {rt.title}
                  </h3>
                  <p className="m-0 font-serif text-[1.15rem] leading-[1.6] text-body/90">{rt.line}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mx-auto mt-10 max-w-[620px] text-center text-[1.15rem] text-muted">
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
          desc: "An exclusive leadership round-table forum. By invitation only. Meet. Connect. Collaborate.",
          location: "Sheraton Grand Bangalore Hotel, Brigade Gateway",
        }}
      />

      <SiteFooter />
    </main>
  );
}
