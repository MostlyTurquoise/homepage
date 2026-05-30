// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [mdx(), sitemap()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Day Poster Black",
            cssVariable: "--font-day-poster-black",
            fallbacks: ["mono"],
            options: {
                variants: [
                    {
                        src: [
                            "./src/assets/fonts/Day Poster Black/DAYPBL__.ttf",
                        ],
                        weight: 400,
                        style: "normal",
                        display: "swap",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "DECTERM",
            cssVariable: "--font-decterm",
            fallbacks: ["mono"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/DECTERM/decterm.ttf"],
                        weight: 400,
                        style: "normal",
                        display: "swap",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Brass Mono",
            cssVariable: "--font-brass-mono",
            fallbacks: ["mono"],
            options: {
                variants: [
                    {
                        src: [
                            "./src/assets/fonts/Brass Mono/BrassMono-Regular.ttf",
                        ],
                        weight: "normal",
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: [
                            "./src/assets/fonts/Brass Mono/BrassMono-Bold.ttf",
                        ],
                        weight: "bold",
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: [
                            "./src/assets/fonts/Brass Mono/BrassMono-Italic.ttf",
                        ],
                        weight: "normal",
                        style: "italic",
                        display: "swap",
                    },
                    {
                        src: [
                            "./src/assets/fonts/Brass Mono/BrassMono-BoldItalic.ttf",
                        ],
                        weight: "bold",
                        style: "italic",
                        display: "swap",
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Roboto",
            cssVariable: "--font-roboto",
            fallbacks: ["mono"],
            options: {
                variants: [
                    {
                        src: ["./src/assets/fonts/Roboto/Roboto-Regular.ttf"],
                        weight: "normal",
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: ["./src/assets/fonts/Roboto/Roboto-Bold.ttf"],
                        weight: "bold",
                        style: "normal",
                        display: "swap",
                    },
                    {
                        src: ["./src/assets/fonts/Roboto/Roboto-Italic.ttf"],
                        weight: "normal",
                        style: "italic",
                        display: "swap",
                    },
                    {
                        src: [
                            "./src/assets/fonts/Roboto/Roboto-BoldItalic.ttf",
                        ],
                        weight: "bold",
                        style: "italic",
                        display: "swap",
                    },
                ],
            },
        },
    ],
});
