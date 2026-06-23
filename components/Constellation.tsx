"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

/**
 * Animated gold constellation background.
 * Ported & tuned from the original script.js: calmer drift, softer glow,
 * links drawn under the stars. Disabled for prefers-reduced-motion.
 */
export default function Constellation({
  className = "",
  opacity = 1,
}: {
  className?: string;
  opacity?: number;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const dotColor = "rgba(226,197,126,";
    const lineColor = "rgba(201,162,75,";
    const LINK = 138;

    let w = 0;
    let h = 0;
    let pts: Point[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;

    function resize() {
      if (!canvas || !ctx) return;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(72, Math.floor((w * h) / 20000)));
      pts = [];
      for (let i = 0; i < count; i++) {
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.14,
          vy: (Math.random() - 0.5) * 0.14,
          r: Math.random() * 1.5 + 0.6,
          a: Math.random() * 0.4 + 0.5,
        });
      }
    }

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // links first (under the stars)
      for (let a = 0; a < pts.length; a++) {
        for (let b = a + 1; b < pts.length; b++) {
          const dx = pts[a].x - pts[b].x;
          const dy = pts[a].y - pts[b].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(pts[a].x, pts[a].y);
            ctx.lineTo(pts[b].x, pts[b].y);
            ctx.strokeStyle = lineColor + (0.2 * (1 - d / LINK)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 160) {
          p.x += dxm * 0.003;
          p.y += dym * 0.003;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor + p.a.toFixed(2) + ")";
        ctx.shadowColor = "rgba(226,197,126,0.55)";
        ctx.shadowBlur = 6;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const host = canvas.parentElement || document.body;
    host.addEventListener("mousemove", onMove);
    host.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);
    resize();
    frame();

    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("mousemove", onMove);
      host.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    />
  );
}
