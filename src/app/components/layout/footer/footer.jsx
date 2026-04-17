"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-neutral-800/70 bg-black/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        {/* left: brand + line */}
        <div className="space-y-2 text-sm text-neutral-400">
          <p className="font-medium text-neutral-200">
            Harman Soni • Building small things that actually ship
          </p>
          <p className="text-xs text-neutral-500">
            Crafted with React, Next.js, Tailwind and a lot of coffee.
          </p>
        </div>

        {/* middle: links */}
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-neutral-400">
          <Link
            href="/"
            className="hover:text-sky-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-sky-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-sky-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-sky-300 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* right: socials */}
        <div className="flex items-center gap-3 text-neutral-400">
          <a
            href="https://github.com/harmansoni22"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700/70 bg-neutral-900/70 px-3 py-1 text-xs hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/harmansoni"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700/70 bg-neutral-900/70 px-3 py-1 text-xs hover:border-sky-400 hover:text-sky-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:harman.codes.dev@gmail.com"
            className="rounded-full border border-neutral-700/70 bg-neutral-900/70 px-3 py-1 text-xs hover:border-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Say hi
          </a>
        </div>
      </div>

      {/* bottom strip */}
      <div className="border-t border-neutral-900/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-3 text-[11px] text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Harman Soni. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span className="text-neutral-600">Last updated:</span>
            <span className="text-neutral-300">manually, not by a script (yet).</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;