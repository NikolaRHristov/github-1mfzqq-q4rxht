import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import { defineConfig } from "astro/config";

export default defineConfig({
	output: "static",
	compressHTML: true,
	integrations: [
		svelte(),
		tailwind(),
		playformCompress({
			HTML: {
				"html-minifier-terser": {
					ignoreCustomFragments: [],
					// ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[\s\S]\*?\?>/],
				},
			},
		}),
	],
	prefetch: true,
});
