import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";

import netlify from "@astrojs/netlify";
import { spectreDark } from "./src/ec-theme";

// https://astro.build/config
const config = defineConfig({
	site: "https://harshmpatil.netlify.app/",
	output: "static",
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Harshwardhan",
			themeColor: "#10B981",
			openGraph: {
				home: {
					title: "Harshwardhan",
					description: "Harshwardhan's portfolio",
				},
				blog: {
					title: "Blog",
					description: "Blogs by Harsh.",
				},
				projects: {
					title: "Projects",
				},
			},
		}),
	],
	adapter: netlify(),
});

export default config;
