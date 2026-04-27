import { projects } from "@/libs/content/projects";

export default function sitemap() {
    const staticRoutes = ["", "/about", "/projects", "/contact"].map((route) => ({
        lastModified: new Date(),
        changeFrequency: "Weekly",
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes = projects.map((project) => ({
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes];
}