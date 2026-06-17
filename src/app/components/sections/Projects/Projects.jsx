import Link from "next/link";
import { projects } from "@/libs/content/projects";

const FEATURED_PROJECT_LIMIT = 3;

const ProjectSection = () => {
    const featured = projects
        .filter((project) => project.featured)
        .slice(0, FEATURED_PROJECT_LIMIT);

    return (
        <section className="border-b border-rule bg-background">
            <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
                <div className="max-w-3xl">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                        Selected Work
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                        Projects currently shaping my focus.
                    </h2>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70">
                        Projects spanning education technology, productivity
                        systems, AI-assisted workflows, and client-facing web
                        applications.
                    </p>
                </div>

                <div className="mt-12 space-y-8">
                    {featured.map((project, index) => (
                        <article
                            key={project.slug}
                            className="group rounded-3xl border border-rule bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                <div className="space-y-3">
                                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h3 className="text-2xl font-semibold text-foreground">
                                        {project.title}
                                    </h3>

                                    <p className="max-w-2xl text-sm leading-7 text-foreground/80">
                                        {project.tagline}
                                    </p>

                                    {project.tech?.length ? (
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tech
                                                .slice(0, 5)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full border border-rule px-3 py-1 text-xs text-muted"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                        </div>
                                    ) : null}
                                </div>

                                <dl className="grid gap-4 text-xs font-mono uppercase tracking-[0.2em] text-muted sm:grid-cols-3 lg:text-right">
                                    <div>
                                        <dt>Year</dt>
                                        <dd className="mt-1 text-foreground/90">
                                            {project.year}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt>Status</dt>
                                        <dd className="mt-1 text-foreground/90">
                                            {project.status}
                                        </dd>
                                    </div>

                                    <div>
                                        <dt>Role</dt>
                                        <dd className="mt-1 text-foreground/90">
                                            {project.role}
                                        </dd>
                                    </div>
                                </dl>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
                                {project.links?.live ? (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent underline decoration-accent/20 underline-offset-4 transition hover:text-foreground"
                                    >
                                        Live Demo
                                        <span
                                            aria-hidden="true"
                                            className="ml-1"
                                        >
                                            ↗
                                        </span>
                                        <span className="sr-only">
                                            Opens in new tab
                                        </span>
                                    </a>
                                ) : null}

                                {project.links?.github ? (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted underline decoration-transparent underline-offset-4 transition hover:text-foreground"
                                    >
                                        GitHub
                                        <span
                                            aria-hidden="true"
                                            className="ml-1"
                                        >
                                            ↗
                                        </span>
                                        <span className="sr-only">
                                            Opens in new tab
                                        </span>
                                    </a>
                                ) : null}

                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-muted underline decoration-transparent underline-offset-4 transition hover:text-foreground"
                                >
                                    Case Study →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 font-medium text-accent underline decoration-accent/20 underline-offset-4 transition hover:text-foreground"
                    >
                        View all projects
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
