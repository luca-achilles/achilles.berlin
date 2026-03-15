"use client";

import TickerContent from "@/components/TickerContent";

export default function TickerContainer() {
    return (
        <div
            className={"h-6 w-screen bg-black text-white dark:bg-white dark:text-black cursor-pointer select-none"}
            onClick={() => {
                window.open("https://open.spotify.com/playlist/5dJewzGb3nztOwmGXIBkSa?si=b1ec22f45f95454a", "_blank");
            }}
        >
            <TickerContent />
        </div>
    );
}