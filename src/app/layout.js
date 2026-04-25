import "./globals.css";
import Navbar from "./components/layout/navigation/Navbar";
import SourceTracker from "@/components/analytics/SourceTracker";
import { satoshi, inter } from "@/libs/fonts";
import { Suspense } from "react";
import LenisProvider from "./components/providers/LenisProvider";
import Footer from "./components/layout/footer/footer";
import PreLoaderProvider from "./components/pre-loader/PreLoaderProvider";

export const metadata = {
  	title: {
		default: "Harman Soni | Developer | Student",
		template: "%s | Harman Soni"
	},
  	description: "Frontend-focused developer building AI-driven projects with clean architecture and real-world problem solving.",
	keywords: [
		"Harman Soni",
		"Frontend Developer",
		"Next.js",
		"React",
		"React JS",
		"Portfolio",
		"Vue.JS",
		"TezJS",
		"AI Projects",
		"Developer from Dhar",
		"Developer from India"
	],
	openGraph: {
		type: "website",
		siteName: "Harman Soni's Portfolio",
		title: "Harman Soni | Developer",
		description:
			"Frontend-focused developer building AI-driven projects with clean architecture and real-world problem solving.",
		images: [
			{
				url: "/logo_no-bg.png",
				width: 1200,
				height: 1200,
				alt: "Harman's Portfolio"
			},
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Harman Soni | Developer",
		description:
			      "Frontend-focused developer building AI-driven projects with clean architecture and real-world problem solving.",
		images: ["/logo_no-bg.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/logo-white_no-bg.png",
		shortcut: "/logo-white_no-bg.png",
		apple: "/logo-white_no-bg.png",
	},
};

export default function RootLayout({ children }) {
  	return (
    	<html
      		lang="en"
      		className={`${satoshi.variable} ${inter.variable} h-full antialiased`}
      		suppressHydrationWarning
    	>
      		<body className="min-h-full flex flex-col">
        		<SourceTracker />
        		<PreLoaderProvider>
        		<Suspense fallback={null}>
          			<Navbar />
        		</Suspense>
        		<main className="flex-1">
          			<Suspense fallback={<PreLoaderProvider />}>
            			<LenisProvider>
              				{children}
            			</LenisProvider>
          			</Suspense>
        		</main>

        		<Suspense fallback={<h1>Loading footer...</h1>}>
          			<Footer />
        		</Suspense>
        		</PreLoaderProvider>
      		</body>
    	</html>
  	);
}
