"use client";

import { useEffect, useRef, useState } from "react";
import {
  googleCalUrl,
  outlookCalUrl,
  icsContent,
  type CalEvent,
} from "@/lib/event";

export default function AddToCalendar({ event }: { event: CalEvent }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function downloadIcs() {
    const blob = new Blob([icsContent(event)], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "IEEE-CS-Pro-2026.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const itemCls =
    "block rounded px-4 py-3 text-[0.86rem] tracking-[0.04em] text-strong transition-colors hover:bg-gold/10 hover:text-gold-2";

  return (
    <div ref={ref} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="inline-block cursor-pointer rounded-sm border border-white/30 px-[34px] py-4 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-strong transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-2 hover:text-gold-2"
      >
        Add to Calendar ▾
      </button>
      <div
        role="menu"
        className={`absolute left-1/2 top-[calc(100%+10px)] z-10 min-w-[210px] -translate-x-1/2 rounded-md border border-line-gold bg-panel-2 p-1.5 shadow-[0_24px_48px_-20px_rgba(0,0,0,.7)] transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0"
        }`}
      >
        <a
          role="menuitem"
          className={itemCls}
          href={googleCalUrl(event)}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          Google Calendar
        </a>
        <button
          type="button"
          role="menuitem"
          className={`w-full text-left ${itemCls}`}
          onClick={() => {
            downloadIcs();
            setOpen(false);
          }}
        >
          Apple Calendar (.ics)
        </button>
        <a
          role="menuitem"
          className={itemCls}
          href={outlookCalUrl(event)}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          Outlook
        </a>
      </div>
    </div>
  );
}
