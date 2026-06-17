const WhoAmI = () => {
  return (
    <section className="border-b border-rule bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr] md:px-10">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            About
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Practical work, honest priorities.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-foreground/80">
            I build products that feel purposeful on the second week of use, not just the first impression. I care about predictable behavior, clear interfaces, and delivery that people can rely on.
          </p>
        </div>

        <div className="space-y-6 rounded-3xl border border-rule bg-surface p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Core focus
            </p>
            <p className="mt-2 text-foreground/90">Full-stack apps, AI workflows, and client-facing delivery.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Approach
            </p>
            <p className="mt-2 text-foreground/90">Ship a working version fast, then refine around real usage and edge cases.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Strongest signals
            </p>
            <p className="mt-2 text-foreground/90">Government client work, live deployed products, and AI systems with auth and persistence.</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Stack highlights
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-muted">
              {[
                "Next.js 16",
                "React 19",
                "Tailwind v4",
                "Prisma",
                "PostgreSQL",
                "Express",
                "Resend",
              ].map((item) => (
                <span key={item} className="rounded-full border border-rule px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
