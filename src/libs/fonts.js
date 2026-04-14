import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const satoshi = localFont({
    src: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
    variable: "--font-satoshi",
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap"
})