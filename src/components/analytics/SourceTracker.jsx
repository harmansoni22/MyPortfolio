"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SourceTracker() {
    const searchParams = useSearchParams();
    const pathName = usePathname();

    useEffect(() => {
        const utm = searchParams.get('use_source');
        if (utm) {
            localStorage.setItem('source', utm);
        } else {
            const routeSource = pathName.replace("/", "") || "home";
            localStorage.setItem("source", routeSource);
        }
    }, [searchParams, pathName]);

    return null;
} 