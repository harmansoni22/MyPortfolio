// Single source of truth for the site's absolute base URL.
// - Set NEXT_PUBLIC_SITE_URL to your final/custom domain to override.
// - On Vercel, falls back to the stable production domain automatically.
// - In local dev, falls back to localhost.
export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ||
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "http://localhost:3000");
