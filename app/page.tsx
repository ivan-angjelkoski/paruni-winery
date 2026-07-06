import Contours from "./components/Contours";
import AltitudeRail from "./components/AltitudeRail";
import PhotoPlate from "./components/PhotoPlate";

/* ------------------------------------------------------------------ */
/*  Small shared pieces                                                */
/* ------------------------------------------------------------------ */

function Eyebrow({
  m,
  label,
  dark = false,
}: {
  m: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono text-[11px] font-medium tracking-[0.16em] ${dark ? "text-wine-bright" : "text-wine"}`}>
        {m}&nbsp;M
      </span>
      <span aria-hidden className={`h-px w-6 ${dark ? "bg-stone/30" : "bg-frost"}`} />
      <span className={`font-mono text-[11px] tracking-[0.22em] uppercase ${dark ? "text-stone/60" : "text-slate-soft"}`}>
        {label}
      </span>
    </div>
  );
}

function PrimaryCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2.5 bg-wine px-6 py-3.5 text-sm tracking-wide text-stone transition-colors duration-300 hover:bg-wine-bright"
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

function GhostCta({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 border-b py-1 text-sm tracking-wide transition-colors duration-300 ${
        dark
          ? "border-stone/30 text-stone hover:border-stone"
          : "border-slate/30 text-slate hover:border-wine hover:text-wine"
      }`}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const WINES = [
  {
    name: "Reserve Red",
    kind: "Red",
    notes: ["dark cherry", "blackberry", "oak", "warm spice"],
    body:
      "A full-bodied red with smooth tannins and a long, elegant finish. Made for refined dinners and quiet evenings.",
  },
  {
    name: "White Selection",
    kind: "White",
    notes: ["green apple", "citrus", "pear", "soft floral"],
    body:
      "Crisp and balanced, fresh and graceful. A white built for lighter dishes and the first hours of the evening.",
  },
  {
    name: "Rosé",
    kind: "Rosé",
    notes: ["wild strawberry", "rose petal", "red currant"],
    body:
      "Delicate and expressive, with freshness, texture, and a clean finish. Sophisticated without ever raising its voice.",
  },
  {
    name: "Limited Vintage",
    kind: "Limited",
    notes: ["deep", "layered", "cellar-aged"],
    body:
      "A small-batch release made only in selected years — the most distinctive expression our cellar has to offer.",
  },
];

const TASTINGS = [
  {
    title: "Signature Tasting",
    body: "A guided tasting of three selected Paruni wines, paired with light regional bites.",
    meta: "3 WINES",
  },
  {
    title: "Cellar Experience",
    body: "An intimate tour through our production and aging spaces, followed by a premium tasting.",
    meta: "TOUR + TASTING",
  },
  {
    title: "Private Evening",
    body: "A reserved experience for small groups, featuring our limited wines and a curated pairing menu.",
    meta: "BY GROUP",
  },
];

const IMAGES = {
  reserveRed: "/image-1.png",
  tastingRoom: "/image-2.png",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <a
        href="#collection"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-wine focus:px-4 focus:py-2 focus:text-sm focus:text-stone"
      >
        Skip to wines
      </a>

      <AltitudeRail />

      <div className="lg:pl-[var(--rail-width)]">
        {/* ---------------------------------------------------------- */}
        {/*  Header                                                     */}
        {/* ---------------------------------------------------------- */}
        <header className="sticky top-0 z-30 border-b border-frost/60 bg-stone/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
            <a href="#top" className="font-display text-xl font-medium tracking-tight text-slate">
              Paruni
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {[
                ["Wines", "#collection"],
                ["Visit", "#visit"],
                ["Events", "#events"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-soft transition-colors hover:text-wine"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#visit"
              className="font-mono text-[11px] tracking-[0.16em] uppercase text-wine md:hidden"
            >
              Book →
            </a>
          </div>
        </header>

        <main id="top">
          {/* -------------------------------------------------------- */}
          {/*  Hero — 512 M                                            */}
          {/* -------------------------------------------------------- */}
          <section className="relative overflow-hidden">
            <Contours className="pointer-events-none absolute -right-[18%] -top-[22%] h-[130%] w-[75%] opacity-70 sm:opacity-100" />
            <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-28 lg:pt-24">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-6 bg-wine" />
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-slate-soft">
                    Gostivar · Macedonia
                  </span>
                </div>
                <h1 className="display-xl mt-8 text-slate">
                  Elegant wines
                  <br />
                  from the{" "}
                  <em className="font-normal not-italic text-wine [font-variation-settings:'SOFT'_60]">
                    highlands
                  </em>
                  <br />
                  of Macedonia
                </h1>
                <p className="mt-8 max-w-md text-slate-soft">
                  Set in the quiet landscapes of Gostivar, Paruni is a boutique
                  winery shaped by tradition, patience, and a deep respect for the
                  land. Each bottle expresses balance, character, and the subtle
                  richness of our region.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <PrimaryCta href="#collection">Explore our wines</PrimaryCta>
                  <GhostCta href="#visit">Visit the winery</GhostCta>
                </div>
              </div>

              <div className="flex items-center">
                <PhotoPlate
                  src={IMAGES.reserveRed}
                  alt="Paruni Reserve Red bottle in the winery cellar"
                  caption="RESERVE RED"
                  meta="THE CELLAR"
                  ratio="3 / 4"
                  className="mx-auto w-full max-w-[26rem]"
                  position="50% 42%"
                  priority
                />
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Intro                                                   */}
          {/* -------------------------------------------------------- */}
          <section className="border-t border-frost/60">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
                <p className="font-display text-2xl font-light leading-snug text-slate lg:text-[1.75rem]">
                  At Paruni, wine is more than a product. It is a reflection of
                  place, climate, heritage, and time.
                </p>
                <div className="space-y-5 text-slate-soft">
                  <p>
                    From carefully selected grapes to small-batch production, every
                    detail is guided by precision and restraint.
                  </p>
                  <p>
                    Our wines are made for those who appreciate depth without
                    excess, elegance without pretension, and craftsmanship that
                    speaks quietly but confidently.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  About — 640 M                                           */}
          {/* -------------------------------------------------------- */}
          <section id="about" className="border-t border-frost/60 scroll-mt-20">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div className="order-2 lg:order-1">
                  <PhotoPlate
                    src={IMAGES.tastingRoom}
                    alt="A Paruni host presenting rosé inside the tasting room"
                    caption="THE TASTING ROOM"
                    meta="GOSTIVAR"
                    ratio="4 / 5"
                    position="54% 42%"
                  />
                </div>
                <div className="order-1 flex flex-col justify-center lg:order-2">
                  <Eyebrow m="640" label="About" />
                  <h2 className="display-lg mt-6 text-slate">
                    A winery rooted in Gostivar
                  </h2>
                  <div className="mt-7 space-y-5 text-slate-soft">
                    <p>
                      Located in Gostivar, Macedonia, Paruni draws inspiration from
                      the surrounding mountains, clean air, and rich regional
                      culture. Our approach combines traditional winemaking values
                      with a refined modern sensibility.
                    </p>
                    <p>
                      Great wine begins long before the harvest. It begins with the
                      soil, the seasons, and the discipline to let nature guide the
                      process. Every vintage tells a different story — shaped by the
                      year, the vineyard, and the hands that bring it to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Philosophy — 780 M — a quiet statement band             */}
          {/* -------------------------------------------------------- */}
          <section className="relative overflow-hidden border-t border-frost/60 bg-stone-deep/50">
            <Contours className="pointer-events-none absolute -left-[10%] top-1/2 h-[180%] w-[40%] -translate-y-1/2 opacity-60" rings={7} peak={false} />
            <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-32">
              <div className="mx-auto max-w-3xl text-center">
                <Eyebrow m="780" label="Philosophy" />
                <h2 className="display-lg mt-6 text-slate [&>*]:inline">
                  Crafted with patience.
                  <br className="hidden sm:block" /> Defined by character.
                </h2>
                <p className="mx-auto mt-8 max-w-xl text-slate-soft">
                  Our philosophy is simple: wines with structure, harmony, and a
                  clear sense of origin. Limited production, careful aging, and
                  thoughtful blending — composed, expressive, memorable.
                </p>
                <p className="mt-6 font-display text-xl font-light italic text-wine">
                  Nothing is rushed. Nothing is excessive.
                </p>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Collection — 1180 M                                     */}
          {/* -------------------------------------------------------- */}
          <section id="collection" className="border-t border-frost/60 scroll-mt-20">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <Eyebrow m="1180" label="The Collection" />
                  <h2 className="display-lg mt-6 text-slate">Our collection</h2>
                </div>
                <p className="max-w-xs text-sm text-slate-soft">
                  Four expressions of one highland terroir — each made in small
                  batches, each true to the year.
                </p>
              </div>

              <ul className="mt-14 flex flex-col">
                {WINES.map((w, i) => (
                  <li
                    key={w.name}
                    className="grid grid-cols-1 gap-6 border-t border-frost/70 py-10 md:grid-cols-[0.3fr_0.7fr] md:gap-12 md:py-12"
                  >
                    <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                      <PhotoPlate
                        src={
                          w.kind === "Red" || w.kind === "Limited"
                            ? IMAGES.reserveRed
                            : IMAGES.tastingRoom
                        }
                        alt={
                          w.kind === "Red"
                            ? "Paruni Reserve Red bottle with cellar barrels"
                            : w.kind === "Limited"
                              ? "Paruni cellar bottle detail for a limited vintage presentation"
                              : w.kind === "White"
                                ? "Paruni tasting room service with a wine bottle"
                                : "A Paruni rosé bottle held during a guided tasting"
                        }
                        caption={w.kind.toUpperCase()}
                        meta={`N°${i + 1}`}
                        ratio="4 / 5"
                        className="max-w-[16rem]"
                        position={
                          w.kind === "Rosé"
                            ? "30% 55%"
                            : w.kind === "White"
                              ? "28% 55%"
                              : "50% 42%"
                        }
                      />
                    </div>
                    <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="flex items-baseline gap-4">
                        <h3 className="display-md text-slate">Paruni {w.name}</h3>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                        {w.notes.map((n, ni) => (
                          <span key={n} className="font-mono text-[11px] tracking-[0.1em] text-slate-soft">
                            {n}
                            {ni < w.notes.length - 1 && (
                              <span className="ml-2 text-wine">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="mt-5 max-w-md text-slate-soft">{w.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Experience / Visit — 1690 M                             */}
          {/* -------------------------------------------------------- */}
          <section id="visit" className="border-t border-frost/60 bg-stone-deep/50 scroll-mt-20">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:gap-16">
                <div className="flex flex-col justify-center">
                  <Eyebrow m="1690" label="Visit" />
                  <h2 className="display-lg mt-6 text-slate">Visit Paruni</h2>
                  <p className="mt-7 max-w-md text-slate-soft">
                    We welcome guests through curated tastings, private tours, and
                    seasonal events. Discover our process, explore the cellar, and
                    enjoy selected wines in an atmosphere made for calm,
                    conversation, and appreciation.
                  </p>
                  <div className="mt-9">
                    <PrimaryCta href="#contact">Book a tasting</PrimaryCta>
                  </div>
                </div>
                <div className="space-y-5 self-end">
                  <PhotoPlate
                    src={IMAGES.tastingRoom}
                    alt="Paruni tasting host holding a rosé bottle in the cellar"
                    caption="SIGNATURE TASTING"
                    meta="BY APPOINTMENT"
                    ratio="5 / 4"
                    position="50% 42%"
                  />
                  <p className="font-display text-xl font-light leading-relaxed text-slate lg:text-2xl">
                    A quiet escape into the world of Macedonian wine — for the
                    enthusiast, the traveler, or anyone seeking a refined hour in
                    the highlands.
                  </p>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-frost/70 bg-frost/70 sm:grid-cols-3">
                {TASTINGS.map((t, i) => (
                  <article
                    key={t.title}
                    className="flex flex-col gap-4 bg-stone p-8 transition-colors duration-300 hover:bg-stone-deep"
                  >
                    <PhotoPlate
                      src={i === 1 ? IMAGES.reserveRed : IMAGES.tastingRoom}
                      alt={`${t.title} at Paruni Winery`}
                      caption={t.meta}
                      meta="TASTING"
                      ratio="4 / 3"
                      position={i === 1 ? "50% 45%" : "42% 45%"}
                    />
                    <h3 className="font-display text-xl font-medium text-slate">
                      {t.title}
                    </h3>
                    <p className="text-sm text-slate-soft">{t.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Region — 1900 M — full band                            */}
          {/* -------------------------------------------------------- */}
          <section className="relative overflow-hidden border-t border-frost/60">
            <Contours className="pointer-events-none absolute -right-[8%] -bottom-[40%] h-[160%] w-[45%] opacity-60" rings={8} peak={false} />
            <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div className="flex flex-col justify-center">
                  <Eyebrow m="1900" label="The Region" />
                  <h2 className="display-lg mt-6 text-slate">
                    The landscape behind the wine
                  </h2>
                  <div className="mt-7 space-y-5 text-slate-soft">
                    <p>
                      Gostivar&apos;s natural surroundings give Paruni its
                      distinctive foundation. Mountain air, seasonal contrast, and
                      fertile Macedonian land let our grapes develop depth,
                      freshness, and complexity.
                    </p>
                    <p>
                      Our wines are shaped by this environment — elegant, grounded,
                      and quietly expressive.
                    </p>
                  </div>
                </div>
                <div>
                  <PhotoPlate
                    src={IMAGES.reserveRed}
                    alt="Paruni bottle label with a mountain-line illustration"
                    caption="MOUNTAIN LABEL"
                    meta="1900 M"
                    ratio="5 / 4"
                    position="50% 58%"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Pairing                                                 */}
          {/* -------------------------------------------------------- */}
          <section className="border-t border-frost/60 bg-stone-deep/50">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div>
                <Eyebrow m="2050" label="At the Table" />
                <h2 className="display-lg mt-6 text-slate">Pairing notes</h2>
              </div>
              <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
                {[
                  {
                    k: "Reds",
                    v: "Roasted meats, aged cheeses, and rich Macedonian dishes.",
                  },
                  {
                    k: "Whites",
                    v: "Seafood, fresh salads, and soft, delicate cheeses.",
                  },
                  {
                    k: "Rosé",
                    v: "Aperitifs, summer plates, and light, delicate desserts.",
                  },
                ].map((p) => (
                  <div key={p.k} className="border-t border-frost/70 pt-5">
                    <h3 className="font-display text-lg font-medium text-wine">
                      {p.k}
                    </h3>
                    <p className="mt-3 text-sm text-slate-soft">{p.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Events — 2280 M                                         */}
          {/* -------------------------------------------------------- */}
          <section id="events" className="border-t border-frost/60 scroll-mt-20">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.6fr_0.4fr]">
                <div>
                  <Eyebrow m="2280" label="Gatherings" />
                  <h2 className="display-lg mt-6 text-slate">
                    Private events &amp; celebrations
                  </h2>
                  <p className="mt-7 max-w-lg text-slate-soft">
                    Paruni offers a refined setting for private gatherings,
                    corporate tastings, and special occasions. Elegant wines,
                    thoughtful service, and a serene atmosphere make every event
                    feel personal and memorable.
                  </p>
                </div>
                <div className="lg:justify-self-end">
                  <PrimaryCta href="#contact">Plan your event</PrimaryCta>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  Testimonials                                            */}
          {/* -------------------------------------------------------- */}
          <section className="border-t border-frost/60 bg-stone-deep/50">
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
              <div>
                <Eyebrow m="2480" label="Guest Voices" />
                <h2 className="display-lg mt-6 text-slate">What guests say</h2>
              </div>
              <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
                {[
                  {
                    q: "An elegant winery experience with a warm Macedonian soul. The wines were beautifully balanced and the setting unforgettable.",
                    a: "Visiting guest",
                  },
                  {
                    q: "Paruni feels intimate, refined, and authentic. A hidden gem in Gostivar.",
                    a: "Wine traveler",
                  },
                  {
                    q: "Every wine had character. The tasting was calm, personal, and beautifully presented.",
                    a: "Tasting guest",
                  },
                ].map((t, i) => (
                  <figure key={i} className="flex flex-col">
                    <span aria-hidden className="font-display text-4xl leading-none text-wine/40">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 font-display text-lg font-light leading-relaxed text-slate">
                      {t.q}
                    </blockquote>
                    <figcaption className="mt-5 font-mono text-[11px] tracking-[0.16em] uppercase text-slate-soft">
                      — {t.a}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* -------------------------------------------------------- */}
          {/*  SUMMIT — night-toned finale: newsletter + contact       */}
          {/* -------------------------------------------------------- */}
          <section className="relative overflow-hidden bg-night text-stone">
            <Contours className="pointer-events-none absolute -left-[6%] -top-[30%] h-[150%] w-[42%] opacity-30" rings={9} />
            <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
              {/* Newsletter */}
              <div className="border-b border-white/10 py-20 lg:py-28">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
                  <div>
                    <Eyebrow m="2700" label="Newsletter" dark />
                    <h2 className="display-lg mt-6 text-stone">
                      Stay close to the cellar
                    </h2>
                    <p className="mt-6 max-w-md text-stone/60">
                      Updates on new vintages, private tastings, seasonal releases,
                      and exclusive Paruni events.
                    </p>
                  </div>
                  <form
                    className="flex flex-col gap-3 sm:flex-row"
                    aria-label="Newsletter signup"
                  >
                    <label htmlFor="email" className="sr-only">
                      Enter your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full border-b border-white/25 bg-transparent px-1 py-3 text-stone placeholder:text-stone/40 focus:border-wine-bright focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-stone px-6 py-3 text-sm tracking-wide text-night transition-colors duration-300 hover:bg-wine-bright hover:text-stone"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact */}
              <div id="contact" className="scroll-mt-20 py-20 lg:py-28">
                <Eyebrow m="2748" label="Visit Us · Summit" dark />
                <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <h2 className="display-md text-stone">Paruni Winery</h2>
                    <p className="mt-3 text-stone/60">Gostivar, Macedonia</p>
                    <div className="mt-8">
                      <GhostCta href="#" dark>
                        Get directions →
                      </GhostCta>
                    </div>
                  </div>
                  <dl className="space-y-6 font-mono text-sm">
                    <div>
                      <dt className="text-[11px] tracking-[0.16em] uppercase text-stone/40">
                        Email
                      </dt>
                      <dd className="mt-1">
                        <a href="mailto:hello@paruni.mk" className="text-stone hover:text-wine-bright">
                          hello@paruni.mk
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.16em] uppercase text-stone/40">
                        Phone
                      </dt>
                      <dd className="mt-1 text-stone">+389 XX XXX XXX</dd>
                    </div>
                  </dl>
                  <div>
                    <p className="text-[11px] font-mono tracking-[0.16em] uppercase text-stone/40">
                      Opening Hours
                    </p>
                    <p className="mt-3 text-stone/80">Monday – Saturday</p>
                    <p className="font-mono text-sm text-stone">10:00 – 18:00</p>
                    <p className="mt-3 text-stone/80">Sunday</p>
                    <p className="font-mono text-sm text-stone">By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="relative border-t border-white/10">
              <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-sm">
                    <span className="font-display text-2xl font-medium text-stone">
                      Paruni
                    </span>
                    <p className="mt-4 text-sm text-stone/50">
                      A boutique Macedonian winery in Gostivar, dedicated to elegant
                      wines, thoughtful craftsmanship, and refined hospitality.
                    </p>
                  </div>
                  <nav className="flex flex-wrap gap-x-8 gap-y-3">
                    {[
                      ["Our Wines", "#collection"],
                      ["Visit", "#visit"],
                      ["Events", "#events"],
                      ["About", "#about"],
                      ["Contact", "#contact"],
                    ].map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        className="font-mono text-[11px] tracking-[0.16em] uppercase text-stone/60 transition-colors hover:text-stone"
                      >
                        {label}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-stone/40">
                    © 2026 Paruni Winery. All rights reserved.
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-stone/40">
                    512 M – 2748 M · ŠAR PLANINA
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}
