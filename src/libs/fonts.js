import localFont from "next/font/local";
import { Inter, JetBrains_Mono } from "next/font/google";

export const satoshi = localFont({
    src: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
    variable: "--font-satoshi",
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

// Monospace, used for metadata, labels, and spec-style annotations.
export const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
});
