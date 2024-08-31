/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,svelte,ts}"],
	theme: {
		extend: {
			width: {
				"icon-1": "22px",
				"icon-2": "24px",
				"90vw": "90vw",
			},
			spacing: {
				128: "32rem",
				112: "28rem",
				104: "26rem",
				92: "23rem",
				88: "22rem",
				84: "21rem",
			},
			height: {
				"icon-1": "22px",
				"icon-2": "19px",
				"icon-3": "24px",
				"90dvh": "90dvh",
				76: "19rem",
				80: "20rem",
				18: "4.5rem",
			},
			colors: {
				"custom-orange": "#e95d3c",
			},
			transitionProperty: {
				"max-h": "max-height",
			},
			fontSize: {
				"4-halfxl": "2.5rem",
			},
			borderWidth: {
				3: "3px",
			},
		},
		fontFamily: {
			serif: ["Roboto Condensed", "serif"],
		},
	},
	plugins: [],
};
