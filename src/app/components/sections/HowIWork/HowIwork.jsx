const HowIWork = () => {
  return (
    <section className="border-b border-rule bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-rule bg-surface p-10">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Deliver what works before adding what looks nice.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-foreground/80">
            <p>
              I start by building an honest baseline that works end-to-end, then refine the UI and edge cases around actual behavior and feedback.
            </p>
            <p>
              Real confidence comes from predictable state, clear error handling, and systems that handle the unexpected without failing loudly.
            </p>
            <p>
              My workflow is deliberately quiet: ship a stable version fast, monitor what matters, and improve the parts people rely on most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
