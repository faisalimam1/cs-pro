/* eslint-disable @next/next/no-img-element */
import { EVENT } from "@/lib/event";

export default function SiteFooter() {
  return (
    <footer className="relative z-[2] border-t border-line bg-bg-deep px-7 pb-7 pt-[72px] text-body">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 items-start gap-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <img
            src="/assets/logos/ieee-master.svg"
            alt="IEEE"
            className="mb-[18px] h-[38px] w-auto opacity-90 [filter:brightness(0)_invert(1)]"
          />
          <p className="m-0 mb-1 text-[0.95rem] text-strong">{EVENT.organiser}</p>
          <p className="m-0 text-[0.82rem] text-muted">{EVENT.association}</p>
        </div>

        <div>
          <p className="mb-4 text-[0.68rem] uppercase tracking-[0.26em] text-gold-2">
            Connect
          </p>
          <a
            className="mb-2.5 block text-[0.92rem] transition-colors hover:text-gold-2"
            href={`mailto:${EVENT.contactEmail}`}
          >
            {EVENT.contactEmail}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-[50px] flex w-full max-w-[1140px] flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[0.8rem] text-muted">
        <span>© 2026 IEEE Computer Society, Bangalore Chapter.</span>
        <a className="transition-colors hover:text-gold-2" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
