/**
 * Contours — the signature topographic system.
 * Nested, non-crossing elevation rings of a single peak, drawn as if
 * plotted on a survey map. Faint, single-color, thin: it maps the mountain
 * the wine comes from. Used behind the hero and as section dividers.
 */

type ContoursProps = {
  className?: string;
  rings?: number;
  peak?: boolean;
};

// One irregular closed loop near the viewBox centre; every ring is a scaled
// copy about (300,300), so they nest cleanly and never intersect.
const BASE_PATH =
  "M300 262c22-2 44 10 50 30c7 22-2 44-22 54c-22 11-48 6-62-12c-13-17-11-44 4-58c9-9 19-13 30-14Z";

export default function Contours({
  className,
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
            style={{ opacity: 0.5 }}
          />
        );
      })}
      {peak && (
        <circle cx={300} cy={300} r={2.4} fill="var(--color-wine)" />
      )}
    </svg>
  );
}