"use client";

import { useEffect, useRef, useState } from "react";

const BASE_M = 512; // Gostivar town — where the climb begins
const SUMMIT_M = 2748; // Titov Vrv, Šar Planina — the summit / footer

// Elevation ticks the ascent passes through, as a share of the scroll.
const TICKS = [
  { at: 0.0, m: 512 },
  { at: 0.22, m: 780 },
  { at: 0.44, m: 1180 },
  { at: 0.66, m: 1690 },
  { at: 0.86, m: 2280 },
  { at: 1.0, m: 2748 },
];

export default function AltitudeRail() {
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
        frame.current = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  const current = Math.round(BASE_M + progress * (SUMMIT_M - BASE_M));

  return (
    <>
      {/* Mobile / tablet: a thin summit-progress line pinned to the top */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-40 h-[2px] bg-frost/50 lg:hidden"
      >
        <div
          className="h-full origin-left bg-wine transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Desktop: the altitude rail — scrolling is ascending the mountain */}
      <aside
        aria-hidden
        className="fixed left-0 top-0 z-40 hidden h-screen w-[var(--rail-width)] flex-col items-center justify-center lg:flex"
      >
        <div className="relative h-[62vh] w-full">
          {/* the survey line */}
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-frost" />

          {/* elevation ticks */}
          {TICKS.map((t) => (
            <div
              key={t.m}
              className="absolute left-1/2 flex -translate-x-1/2 items-center"
              style={{ top: `${t.at * 100}%` }}
            >
              <span className="absolute left-1/2 h-px w-2.5 -translate-x-1/2 bg-sage" />
              <span
                className="absolute right-full mr-3 whitespace-nowrap font-mono text-[10px] tracking-[0.18em] text-slate-soft/70"
                style={{ writingMode: "vertical-rl" }}
              >
                {t.m}
              </span>
            </div>
          ))}

          {/* the climbing marker + live elevation readout */}
          <div
            className="absolute left-1/2 z-10 -translate-x-1/2 transition-[top] duration-150 ease-out"
            style={{ top: `${progress * 100}%` }}
          >
            <span className="block h-2 w-2 -translate-y-1/2 rounded-full bg-wine ring-4 ring-stone" />
            <span className="absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] font-medium tracking-[0.16em] text-wine">
              {current}
              <span className="text-slate-soft/60"> M</span>
            </span>
          </div>
        </div>

        <span
          className="absolute bottom-8 font-mono text-[10px] tracking-[0.2em] text-slate-soft/50"
          style={{ writingMode: "vertical-rl" }}
        >
          ŠAR&nbsp;PLANINA
        </span>
      </aside>
    </>
  );
}
