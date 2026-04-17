import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navigation/Navbar";
import SplashCursor from "./components/effects/cursor/SplashCursor";
import SourceTracker from "@/components/analytics/SourceTracker";
import { satoshi, inter } from "@/libs/fonts";
import { Suspense } from "react";
import LenisProvider from "./components/providers/LenisProvider";
import Footer from "./components/layout/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harman Soni | Portfolio",
  description: "Frontend-focused developer building AI-driven projects with clean architecture and real-world problem solving.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SourceTracker />
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        {/* <SplashCursor
          SPLAT_RADIUS={0.07}
          DYE_RESOLUTION={1080}
          DENSITY_DISSIPATION={3.5}
          PRESSURE_ITERATIONS={5}
          className={"z-[-1]"}
        /> */}
        <main className="flex-1">
          <Suspense fallback={<h1>Loading...</h1>}>
            <LenisProvider>
              {children}
            </LenisProvider>
          </Suspense>
        </main>

        <Suspense fallback={<h1>Loading footer...</h1>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
