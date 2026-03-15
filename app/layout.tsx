import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["500", "600"] // 400 font-normal, font-medium font-semibold
});

export const metadata: Metadata = {
    title: "achilles.berlin",
    description: "Luca Achilles' personal website",
    icons: {
        icon: [
            {
                rel: 'icon',
                type: 'image/svg+xml',
                url: '/favicon-light.svg',
                media: '(prefers-color-scheme: light)',
            },
            {
                rel: 'icon',
                type: 'image/svg+xml',
                url: '/favicon-dark.svg',
                media: '(prefers-color-scheme: dark)',
            },
        ],
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
