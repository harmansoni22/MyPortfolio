import CustomScroll from "../components/CustomScrollbar";
import AnimatedProjectCards from "../components/sections/Projects/AnimatedProjectCards";

export const metadata = {
	title: "Projects",
	description:
		"Frontend-focused developer building AI-driven projects with clean architecture and real-world problem solving.",
	openGraph: {
		title: "Projects | Harman Soni",
		description:
			"Selected software projects by Harman Soni, including AI workflow and platform engineering work.",
		images: ["/logo_no-bg.png"],
	},
};

export default function ProjectsPage() {
	return (
		<>
			<CustomScroll />
			<section className="relative w-full border-b border-rule bg-background">
				<div className="mx-auto max-w-8xl px-6 py-24 md:px-10 md:py-28">
					<div className="space-y-6">
						<div className="space-y-4">
							<p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
								Projects
							</p>

							<h1 className="font-sans text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-foreground">
								Practical work. Delivered systems.
							</h1>

							<p className="max-w-2xl text-base leading-8 text-foreground/75 md:text-lg">
								I build software that behaves the same way on day 1 and day
								100: predictable interfaces, honest risk, and delivery that
								survives real users, messy inputs, and changing requirements.
							</p>
						</div>

						<div className="pt-6">
							<AnimatedProjectCards onlyFeatured={false} />
						</div>
					</div>

					<div className="mt-14 border-t border-rule pt-8 text-sm text-foreground/70">
						<p>
							Each project includes the problem I targeted, what I built to
							solve it, outcomes, and architecture details when available.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
