"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event";

const TARGET = new Date(EVENT.countdownISO).getTime();

function pad(n: number) {
  return (n < 10 ? "0" : "") + n;
}

type Parts = { d: string; h: string; m: string; s: string; done: boolean };

function compute(): Parts {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: "00", h: "00", m: "00", s: "00", done: true };
  const s = Math.floor(diff / 1000);
  return {
    d: pad(Math.floor(s / 86400)),
    h: pad(Math.floor((s % 86400) / 3600)),
    m: pad(Math.floor((s % 3600) / 60)),
    s: pad(s % 60),
    done: false,
  };
}

export default function Countdown() {
  // Start zeroed so SSR and first client render match; fill in after mount.
  const [p, setP] = useState<Parts>({ d: "00", h: "00", m: "00", s: "00", done: false });

  useEffect(() => {
    const update = () => setP(compute());
    // defer the first tick out of the effect body (avoids cascading render)
    const raf = requestAnimationFrame(update);
    const id = setInterval(update, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  const units: [string, string][] = [
    [p.d, "Days"],
    [p.h, "Hours"],
    [p.m, "Minutes"],
    [p.s, "Seconds"],
  ];

  return (
    <div role="timer" aria-live="polite" className="mx-auto">
      <div className="flex items-start justify-center gap-[clamp(8px,3vw,30px)]">
        {units.map(([num, label], i) => (
          <div key={label} className="flex items-center gap-[clamp(8px,3vw,30px)]">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="font-serif text-gold/55 text-[clamp(2rem,6vw,3.6rem)] leading-[1.1]"
              >
                :
              </span>
            )}
            <div className="flex min-w-[56px] flex-col items-center">
              <span className="font-serif font-medium tabular-nums leading-none text-head text-[clamp(2.6rem,8vw,4.6rem)] [text-shadow:0_2px_30px_rgba(201,162,75,.2)]">
                {num}
              </span>
              <span className="mt-3 text-[0.62rem] uppercase tracking-[0.28em] text-gold-2">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-muted">
        {p.done ? "The day has arrived — welcome to IEEE CS Pro 2026." : "Bengaluru · IST"}
      </p>
    </div>
  );
}
