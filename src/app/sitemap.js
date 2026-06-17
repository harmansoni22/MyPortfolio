import { projects } from "@/libs/content/projects";
import { siteUrl } from "@/libs/site";

export default function sitemap() {
    const now = new Date();

    const staticRoutes = ["", "/about", "/projects", "/contact"].map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes];
}
