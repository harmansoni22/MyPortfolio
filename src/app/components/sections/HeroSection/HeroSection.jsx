import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full border-b border-rule bg-background">
      <div className="mx-auto flex min-h-[84vh] w-full max-w-6xl flex-col justify-center gap-10 px-6 py-20 md:px-10 lg:py-24">
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
            Full-stack & AI developer  from Dhar, Madhya Pradesh, India
          </p>

          <h1 className="font-sans text-[clamp(2.5rem,8vw,10rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-foreground">
            Harman Soni
          </h1>

          <p className="max-w-2xl text-base leading-[1.95] text-foreground/80 md:text-lg">
            I build dependable full-stack products and AI tools that serve actual workflows — from government client portals to production-capable chat systems and internal operations platforms.
          </p>

          <div className="grid max-w-xl grid-cols-[6.5rem_1fr] gap-x-8 gap-y-4 border-t border-rule pt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:grid-cols-[8rem_1fr]">
            <dt className="text-muted">Focus</dt>
            <dd className="text-foreground/90">Full-stack · AI</dd>
            <dt className="text-muted">Based in</dt>
            <dd className="text-foreground/90">Madhya Pradesh, India</dd>
            <dt className="text-muted">Status</dt>
            <dd className="inline-flex items-center gap-2 text-foreground/90">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available
            </dd>
          </div>

          <div className="flex flex-wrap items-center gap-6 border-t border-rule pt-8 text-sm">
            <Link
              href="/projects"
              className="font-medium text-accent underline decoration-accent/20 underline-offset-4 transition hover:text-foreground"
            >
              Selected work →
            </Link>
            <a
              href="https://github.com/harmansoni22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-transparent underline-offset-4 transition hover:text-foreground hover:decoration-rule"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
