import Link from "next/link"
import GradientText from "../components/effects/TextEffects/GradientText"
import { projects } from "../../libs/content/projects.js"
import CustomScroll from "../components/CustomScrollbar"

export default function ProjectsPage() {
  return (
    <>
		<CustomScroll />
    	<section className="max-w-6xl mx-auto px-6 py-20">

      		{/* Heading */}
      		<GradientText colors={["#0f23fa", "#0f85fa", "#0fe7fa"]}>
        		<h1 className="text-3xl md:text-4xl font-semibold">
          			Projects
        		</h1>
      		</GradientText>

      		{/* Intro */}
      		<p className="mt-6 text-neutral-400 max-w-2xl">
        		Projects where I focused on building things that actually work in real scenarios, not just demos.
      		</p>

      		{/* Grid */}
      		<div className="mt-10 grid md:grid-cols-2 gap-6">

        		{projects.map((project) => (
          			<Link
            			key={project.slug}
            			href={`/projects/${project.slug}`}
            			className="group p-6 border border-neutral-800 rounded-xl hover:border-neutral-600 transition block"
          			>
            			<h2 className="text-white text-lg font-medium">
              				{project.title}
            			</h2>

            			<p className="mt-2 text-neutral-400">
              				{project.description}
            			</p>

            			<span className="mt-4 inline-block text-sm text-white group-hover:translate-x-1 transition">
              				View Details →
            			</span>
          			</Link>
        		))}

      		</div>
		</section>
    </>
  )
}