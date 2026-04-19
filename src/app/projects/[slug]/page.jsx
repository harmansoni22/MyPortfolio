import { projects } from "@/libs/content/projects.js"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProjectPage({ params }) {
  const { slug } = await params

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  )

  if (!project) {
    notFound()
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold">
        {project.title}
      </h1>

      <p className="mt-4 text-neutral-400">
        {project.description}
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Problem</h2>
        <p className="mt-2 text-neutral-400">
          {project.problem}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">What I Built</h2>
        <p className="mt-2 text-neutral-400">
          {project.solution}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">How It Works</h2>
        <p className="mt-2 text-neutral-400">
          {project.flow}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Key Decisions</h2>
        <p className="mt-2 text-neutral-400">
          {project.decisions}
        </p>
      </div>

      <div className="mt-12">
        <Link
          href="/projects"
          className="text-sm text-neutral-400 hover:text-white"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  )
}