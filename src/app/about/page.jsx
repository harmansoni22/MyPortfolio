 "use client";

import CustomScroll from "../components/CustomScrollbar";
import MagicBento from "../components/effects/MagicBento";

const AboutPage = () => {
  return (
    <>
      <CustomScroll />

      {/* Hero */}
      <section className="relative w-full border-b border-rule bg-background">
        <div className="mx-auto flex w-full max-w-6xl min-h-[72vh] flex-col justify-center gap-10 px-6 py-20 md:px-10 lg:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">About</p>

            <h1 className="font-sans text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground">
              Practical AI + reliable engineering.
            </h1>

            <p className="max-w-2xl text-base leading-[1.95] text-foreground/80 md:text-lg">
              I build full-stack products and AI workflows that hold up beyond the demo: slow connections, messy inputs, real users, and changing requirements.
              My goal is simple—systems that are clear to maintain, honest about risk, and genuinely useful.
            </p>

            <div className="grid max-w-xl grid-cols-[9rem_1fr] gap-x-8 gap-y-4 border-t border-rule pt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:grid-cols-[8.5rem_1fr]">
              <div className="text-muted">Focus</div>
              <div className="text-foreground/90">Full-stack · AI workflows</div>

              <div className="text-muted">Style</div>
              <div className="text-foreground/90">Predictable behavior</div>

              <div className="text-muted">Outcomes</div>
              <div className="text-foreground/90">Ship fast, refine safely</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">What I build</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Interfaces with integrity.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-foreground/70">
              From auth + persistence to workflow automation, I design systems that behave the same way on day 1 and day 100.
            </p>
          </div>

          <div className="mt-10">
            <MagicBento />
          </div>
        </div>
      </section>

      {/* Core card */}
      <section className="border-t border-rule bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-3xl border border-rule bg-surface p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Core focus</p>
                <p className="mt-3 text-base leading-7 text-foreground/90">
                  Full-stack apps, AI workflows, and client-facing delivery—built for maintainability and operational reality.
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Approach</p>
                <p className="mt-3 text-base leading-7 text-foreground/90">
                  Ship a working version fast, then refine around real usage, edge cases, and clear feedback loops.
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Strongest signals</p>
                <p className="mt-3 text-base leading-7 text-foreground/90">
                  Government client work, live deployed products, and AI systems with auth + persistence.
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Stack highlights</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Next.js 16", "React 19", "Tailwind v4", "Prisma", "PostgreSQL", "Express", "Resend"].map(
                    (item) => (
                      <span key={item} className="rounded-full border border-rule px-3 py-1 text-[11px] text-muted">
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-rule pt-8 text-sm leading-6 text-foreground/70">
              <p>
                Most learning comes from building, breaking, and fixing. That loop keeps my work focused on what lasts—not what only looks good.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;


