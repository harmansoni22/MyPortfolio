"use client";

import Link from "next/link";
import { useMemo } from "react";
import { projects } from "@/libs/content/projects";

const AnimatedProjectCards = ({ onlyFeatured = true, count = 6 }) => {
	const list = useMemo(() => {
		const src = onlyFeatured ? projects.filter((p) => p.featured) : projects;
		return src.slice(0, count);
	}, [onlyFeatured, count]);

	return (
		<div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3" aria-label="Project cards">
			{list.map((project, idx) => (
				<article
					key={project.slug}
					className="group relative rounded-3xl border border-rule bg-surface p-6 md:p-8 overflow-hidden"
				>
					{/* Non-animated highlight (no pointer interception) */}
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						style={{
							background:
								"radial-gradient(500px circle at 50% 50%, rgba(132, 0, 255, 0.18), transparent 60%)",
						}}
					/>

					<div className="space-y-5">
						<div className="flex flex-col gap-3">
							<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
								{String(idx + 1).padStart(2, "0")} · {project.year}
							</p>

							<h2 className="text-2xl font-semibold tracking-tight text-foreground">
								{project.title}
							</h2>

							{project.tagline ? (
								<p className="text-sm leading-7 text-foreground/80">
									{project.tagline}
								</p>
							) : null}
						</div>

						<p className="text-sm leading-7 text-foreground/70">
							{project.description}
						</p>

						<div className="flex flex-wrap items-center gap-2">
							{project.stack?.slice(0, 4)?.map((tech) => (
								<span
									key={tech}
									className="rounded-full border border-rule px-3 py-1 font-mono text-[11px] text-muted"
								>
									{tech}
								</span>
							))}
							{project.stack && project.stack.length > 4 ? (
								<span className="rounded-full border border-rule px-3 py-1 font-mono text-[11px] text-muted">
									+{project.stack.length - 4}
								</span>
							) : null}
						</div>
					</div>

					<div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
						<Link
							href={`/projects/${project.slug}`}
							className="inline-flex items-center gap-2 font-medium text-accent underline underline-offset-4 decoration-accent/20 transition hover:text-foreground"
						>
							Details <span aria-hidden="true">→</span>
						</Link>

						{project.links?.live ? (
							<a
								href={project.links.live}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted underline underline-offset-4 decoration-transparent transition hover:text-foreground hover:decoration-accent/20"
							>
								Live ↗
							</a>
						) : null}

						{project.links?.github ? (
							<a
								href={project.links.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted underline underline-offset-4 decoration-transparent transition hover:text-foreground hover:decoration-accent/20"
							>
								GitHub ↗
							</a>
						) : null}
					</div>
				</article>
			))}
		</div>
	);
};

export default AnimatedProjectCards;
