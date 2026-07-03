import Image from "next/image";

type PhotoPlateProps = {
  /** Drop a real photo in later; empty renders an intentional survey plate. */
  src?: string;
  alt?: string;
  caption: string;
  meta?: string;
  className?: string;
  /** aspect-ratio, e.g. "4 / 5" */
  ratio?: string;
  tone?: "stone" | "night";
  position?: string;
  priority?: boolean;
};

export default function PhotoPlate({
  src,
  alt = "",
  caption,
  meta,
  className = "",
  ratio = "4 / 5",
  tone = "stone",
  position = "center",
  priority = false,
}: PhotoPlateProps) {
  const dark = tone === "night";

  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden ${
          dark ? "bg-white/[0.04]" : "bg-stone-deep"
        }`}
        style={{ aspectRatio: ratio }}
      >
        {src ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover saturate-[0.82] contrast-[0.96]"
              style={{ objectPosition: position }}
            />
            <span className="pointer-events-none absolute inset-0 bg-sage/10 mix-blend-multiply" />
          </>
        ) : (
          <>
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.24em] ${
                dark ? "text-stone/35" : "text-slate-soft/45"
              }`}
            >
              PLATE
            </span>
          </>
        )}
        {/* survey framing corners — reads as a plotted plate, not a broken image */}
        <PlateCorner className="left-3 top-3" dark={dark} />
        <PlateCorner className="right-3 top-3 rotate-90" dark={dark} />
        <PlateCorner className="bottom-3 right-3 rotate-180" dark={dark} />
        <PlateCorner className="bottom-3 left-3 -rotate-90" dark={dark} />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4">
        <span
          className={`font-mono text-[11px] tracking-[0.14em] ${
            dark ? "text-stone/70" : "text-slate-soft"
          }`}
        >
          {caption}
        </span>
        {meta && (
          <span
            className={`font-mono text-[11px] tracking-[0.14em] ${
              dark ? "text-stone/40" : "text-frost"
            }`}
          >
            {meta}
          </span>
        )}
      </figcaption>
    </figure>
  );
}

function PlateCorner({ className, dark }: { className: string; dark: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute h-4 w-4 border-l border-t ${
        dark ? "border-stone/25" : "border-sage/60"
      } ${className}`}
    />
  );
}
