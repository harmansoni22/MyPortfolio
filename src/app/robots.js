import { siteUrl } from "@/libs/site";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
