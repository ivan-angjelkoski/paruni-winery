/**
 * Contours — the signature topographic system.
 * Nested, non-crossing elevation rings of a single peak, drawn as if
 * plotted on a survey map. Faint, single-color, thin: it maps the mountain
 * the wine comes from. Used behind the hero and as section dividers.
 */

type ContoursProps = {
  className?: string;
  draw?: boolean;
  rings?: number;
  peak?: boolean;
};

// One irregular closed loop near the viewBox centre; every ring is a scaled
// copy about (300,300), so they nest cleanly and never intersect.
const BASE_PATH =
  "M300 262c22-2 44 10 50 30c7 22-2 44-22 54c-22 11-48 6-62-12c-13-17-11-44 4-58c9-9 19-13 30-14Z";

export default function Contours({
  className,
  draw = false,
  rings = 9,
  peak = true,
}: ContoursProps) {
  const scales = Array.from({ length: rings }, (_, i) => 1 + i * 0.62);

  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {scales.map((s, i) => {
        // slight per-ring drift so the survey reads hand-plotted, not machined
        const dy = i * -3.2;
        const dx = i * 1.4;
        return (
          <path
            key={i}
            d={BASE_PATH}
            transform={`translate(${300 + dx} ${300 + dy}) scale(${s}) translate(-300 -300)`}
            stroke="var(--color-sage)"
            strokeWidth={0.9 / s}
            strokeLinecap="round"
            pathLength={1}
            style={
              draw
                ? {
                    ["--dash" as string]: 1,
                    strokeDasharray: 1,
                    animation: `contour-draw 2.4s cubic-bezier(0.22,1,0.36,1) forwards`,
                    animationDelay: `${0.15 + i * 0.12}s`,
                    opacity: 0,
                  }
                : { opacity: 0.5 }
            }
          />
        );
      })}
      {peak && (
        <circle
          cx={300}
          cy={300}
          r={2.4}
          fill="var(--color-wine)"
          style={
            draw
              ? {
                  animation: "rise-in 0.8s ease forwards",
                  animationDelay: `${0.15 + rings * 0.12}s`,
                  opacity: 0,
                }
              : undefined
          }
        />
      )}
    </svg>
  );
}
