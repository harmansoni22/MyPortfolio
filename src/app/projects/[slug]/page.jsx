import { projects } from "@/libs/content/projects.js";
import Link from "next/link";
import { notFound } from "next/navigation";
import SystemDiagram from "@/app/components/ui/SystemDiagram";

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = projects.find(
		(project) => project.slug.toLowerCase() === slug.toLowerCase()
	);

	if (!project) {
		return {
			title: "Project Not Found",
			robots: { index: false, follow: false },
		};
	}

	return {
		title: project.title,
		description: project.description,
		openGraph: {
			title: `${project.title} | Harman Soni`,
			description: project.description,
			type: "article",
			images: ["/logo_no-bg.png"],
		},
		twitter: {
			card: "summary_large_image",
			title: `${project.title} | Harman Soni`,
			description: project.description,
			images: ["/logo_no-bg.png"],
		},
	};
}

export default async function ProjectPage({ params }) {
	const { slug } = await params;

	const index = projects.findIndex(
		(p) => p.slug.toLowerCase() === slug.toLowerCase()
	);
	const project = projects[index];

	if (!project) notFound();

	const number = String(index + 1).padStart(2, "0");
	const prev = index > 0 ? projects[index - 1] : null;
	const next = index < projects.length - 1 ? projects[index + 1] : null;

	const meta = [project.year, project.role].filter(Boolean);

	const sections = [
		{ label: "Problem", body: project.problem },
		{ label: "What I built", body: project.build },
		{ label: "Outcome", body: project.outcome },
	].filter((s) => s.body);

	return (
		<article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
			<Link
				href="/projects"
				className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
			>
				← Projects
			</Link>

			{/* masthead */}
			<header className="mt-10 border-b border-rule pb-8">
				<p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
					Project / {number}
				</p>

				<h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
					{project.title}
				</h1>

				{project.tagline ? (
					<p className="mt-3 text-lg text-muted">{project.tagline}</p>
				) : null}

				{/* meta row */}
				<div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
					{meta.map((m) => (
						<span key={m}>{m}</span>
					))}
					{project.status ? (
						<span className="inline-flex items-center gap-1.5 text-foreground">
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
							{project.status}
						</span>
					) : null}
				</div>

				{project.client ? (
					<p className="mt-4 text-sm text-muted">
						<span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
							Client&nbsp;—&nbsp;
						</span>
						<span className="text-foreground/90">{project.client}</span>
					</p>
				) : null}

				{/* stack */}
				{project.stack?.length ? (
					<div className="mt-6 flex flex-wrap gap-2">
						{project.stack.map((tech) => (
							<span
								key={tech}
								className="rounded-full border border-rule px-3 py-1 font-mono text-[11px] text-muted"
							>
								{tech}
							</span>
						))}
					</div>
				) : null}

				{/* primary links */}
				{project.links?.live || project.links?.github ? (
					<div className="mt-7 flex flex-wrap items-center gap-5">
						{project.links?.live ? (
							<a
								href={project.links.live}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm font-medium text-accent underline underline-offset-4 hover:opacity-80"
							>
								Visit live site ↗
							</a>
						) : null}
						{project.links?.github ? (
							<a
								href={project.links.github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
							>
								View source ↗
							</a>
						) : null}
					</div>
				) : null}
			</header>

			{/* body sections */}
			<div className="mt-12 space-y-12">
				{sections.map((section, i) => (
					<section key={section.label} className="grid gap-3 md:grid-cols-[7rem_1fr] md:gap-8">
						<div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
							<span className="text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
							<span className="ml-3 md:ml-0 md:mt-1 md:block">{section.label}</span>
						</div>
						<p className="font-body text-[15px] leading-relaxed text-foreground/85">
							{section.body}
						</p>
					</section>
				))}

				{project.architecture ? (
					<section className="grid gap-3 md:grid-cols-[7rem_1fr] md:gap-8">
						<div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
							<span className="text-foreground/40">
								{String(sections.length + 1).padStart(2, "0")}
							</span>
							<span className="ml-3 md:ml-0 md:mt-1 md:block">Architecture</span>
						</div>
						<SystemDiagram architecture={project.architecture} />
					</section>
				) : null}
			</div>

			{/* prev / next */}
			<nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-rule pt-8">
				{prev ? (
					<Link href={`/projects/${prev.slug}`} className="group max-w-[48%]">
						<span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
							← Prev
						</span>
						<span className="mt-1 block text-sm text-muted transition-colors group-hover:text-foreground">
							{prev.title}
						</span>
					</Link>
				) : (
					<span />
				)}
				{next ? (
					<Link href={`/projects/${next.slug}`} className="group max-w-[48%] text-right">
						<span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
							Next →
						</span>
						<span className="mt-1 block text-sm text-muted transition-colors group-hover:text-foreground">
							{next.title}
						</span>
					</Link>
				) : (
					<span />
				)}
			</nav>
		</article>
	);
}
