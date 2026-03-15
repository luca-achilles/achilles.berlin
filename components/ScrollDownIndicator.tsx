"use client";

import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function ScrollDownIndicator() {
    const [hidden, setHidden] = useState(true);

    const onScroll = useCallback(() => {
        const value = window.scrollY > 10;
        setHidden(prev => prev === value ? prev : value);
    }, []);

    useEffect(() => {
        const id = requestAnimationFrame(onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener("scroll", onScroll);
        }
    }, [onScroll]);

    return (
        <ChevronDown
            suppressHydrationWarning
            className={"animate-pushdown transition-opacity duration-300 cursor-pointer " + (hidden ? "opacity-0" : "")}
            onClick={() => {
                window.scrollTo({ top: window.innerHeight / 3, behavior: "smooth" });
            }}
        />
    );
}