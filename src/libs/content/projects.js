// Project data is sourced from real repositories under
// https://github.com/harmansoni22 and verified before publishing.
// Live URLs are only included when the deployment was confirmed to load.
// Keep copy factual — do not add claims that aren't backed by the repo or the client.
//
// FLAGGED FOR CONFIRMATION (do not guess — Harman to verify):
//   - MPRVVN: exact official portal title / scope wording.
//   - BaghPrints: exact District Collector's office name + project scope.

export const projects = [
  {
    slug: "techseekho",
    title: "TechSeekho",
    tagline: "Operations platform for a training company",
    description:
      "Full-stack platform that runs batch-based AI & coding training for schools, colleges, and corporates.",
    year: "2026",
    role: "Full-stack developer",
    status: "In development",
    client: null,
    featured: true,
    stack: [
      "Next.js 16",
      "React 19",
      "Express 5",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Turborepo",
    ],
    problem:
      "Koshalyam Learning Solutions delivers AI and coding training to institutions and needed an operations system scoped to how they actually work — institution to batch to trainers to students — rather than a generic consumer LMS.",
    build:
      "A monorepo app with role-based access across Super Admin, Admin, Coordinator, Trainer, and Student. It handles attendance and assignments, projection-based reporting that separates operational data from how it's presented, audit logging on administrative actions, and a prompt-based AI assistant.",
    outcome:
      "The schools and colleges operational model is complete; corporate training is onboarded and its workflows are next.",
    architecture: {
      caption: "Request path, simplified.",
      flow: [
        { label: "Next.js 16", sub: "React 19 UI" },
        { label: "Express 5 API", sub: "REST · auth · RBAC" },
        { label: "Prisma ORM", sub: "schema + queries" },
        { label: "PostgreSQL", sub: "operational data" },
      ],
      note: "RBAC roles: Super Admin · Admin · Coordinator · Trainer · Student",
    },
    links: {
      github: "https://github.com/harmansoni22/TechSeekho",
    },
  },
  {
    slug: "mprvvn",
    title: "MPRVVN",
    tagline: "Web portal for a state forest-development body",
    description:
      "A deployed web portal for MP Rajya Van Vikas Nigam (MPRVVN), commissioned via a District Forest Officer.",
    year: "2026",
    role: "Frontend developer",
    status: "Live · Client work",
    client: "MP Rajya Van Vikas Nigam (MPRVVN) — commissioned via a District Forest Officer (DFO)",
    featured: true,
    stack: ["JavaScript", "Vercel"],
    problem:
      "A state forest-development body needed a clear public-facing web portal, commissioned through a District Forest Officer.",
    build:
      "A deployed informational web portal, built with JavaScript and hosted on Vercel. [Exact portal title and full scope to be confirmed.]",
    outcome: "Live and reachable at the deployment below.",
    links: {
      live: "https://mpfsdc.vercel.app",
      github: "https://github.com/harmansoni22/MPFSDC",
    },
  },
  {
    slug: "baghprints",
    title: "BaghPrints",
    tagline: "Client web project for a District Collector's office",
    description:
      "A web project delivered as client work for a District Collector's office.",
    year: "2026",
    role: "Frontend developer",
    status: "Client work · Demo offline",
    client: "District Collector's office",
    featured: true,
    stack: ["HTML", "JavaScript"],
    problem:
      "Client work delivered for a District Collector's office. [Exact office name and full scope to be confirmed.]",
    build:
      "A web project built and delivered for the client. The previous public demo is currently offline, so no live link is listed.",
    outcome:
      "Delivered as client work. The earlier deployment is offline; source is available below.",
    links: {
      github: "https://github.com/harmansoni22/BaghPrints",
    },
  },
  {
    slug: "llm-chat-app",
    title: "LLM Chat App",
    tagline: "Production-oriented AI chat with bring-your-own-key",
    description:
      "Full-stack AI chat app with authentication, persistent history, and pluggable model providers.",
    year: "2026",
    role: "Full-stack developer",
    status: "In development",
    client: null,
    featured: false,
    stack: ["Wasp", "React", "Prisma", "PostgreSQL", "Hugging Face", "OpenRouter"],
    problem:
      "Most chat demos throw away state and lock you to one model. I wanted something closer to production: real accounts, conversations that persist, and the freedom to switch model providers.",
    build:
      "Built on the Wasp full-stack framework with email/password auth and per-user conversation and message history. Every chat operation validates input and verifies ownership. A free Hugging Face model is the default, and OpenRouter lets users bring their own API key for premium models.",
    outcome:
      "Functional end to end. No public demo — it requires a server environment and database to run.",
    architecture: {
      caption: "Request path, simplified.",
      flow: [
        { label: "React UI", sub: "Wasp client" },
        { label: "Wasp server", sub: "auth · ownership checks" },
        { label: "Model provider", sub: "Hugging Face / OpenRouter" },
        { label: "PostgreSQL", sub: "users · conversations" },
      ],
      note: "Default: free Hugging Face model · Premium: user-supplied OpenRouter key",
    },
    links: {
      github: "https://github.com/harmansoni22/LLMChatApp",
    },
  },
  {
    slug: "taskiva",
    title: "Taskiva",
    tagline: "Task & team management web app",
    description:
      "A deployed task-management app organized into dashboard, tasks, profile, and store sections.",
    year: "2026",
    role: "Developer",
    status: "Live",
    client: null,
    featured: false,
    stack: ["Next.js", "React", "JavaScript", "Vercel"],
    problem:
      "I wanted a focused space to manage tasks without the overhead of a heavy project-management tool.",
    build:
      "A single-page app split into Dashboard, Tasks, Profile, and Store views, deployed on Vercel.",
    outcome: "Live and reachable at the deployment below.",
    links: {
      live: "https://taskiva-kappa.vercel.app",
      github: "https://github.com/harmansoni22/Taskiva",
    },
  },
  {
    slug: "omnistart",
    title: "OmniStart",
    tagline: "Lightweight task & team tool for startups (MVP)",
    description:
      "An early MVP exploring a lightweight task and team management tool for startups.",
    year: "2025",
    role: "Developer",
    status: "MVP · Archived",
    client: null,
    featured: false,
    stack: ["HTML", "CSS", "Bootstrap 5"],
    problem:
      "Early exploration of a simple, cheap way for small startup teams to track tasks and team work.",
    build:
      "A v0.1 MVP with task cards and team-management placeholders, built with HTML, CSS, and Bootstrap 5 for a responsive layout.",
    outcome:
      "An early prototype. The original roadmap planned a move to Tailwind and a React rewrite, which evolved into later projects.",
    links: {
      github: "https://github.com/harmansoni22/OmniStart",
    },
  },
];
