import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class", '[data-mantine-color-scheme="dark"]'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		// fontFamily: {
		//   sans: "var(--mantine-font-family)",
		//   serif: ["Merriweather", "serif"],
		//   mono: "var(--mantine-font-family-monospace)",
		// },
		extend: {
			screens: {
				"mtn-xs": "576px", // 36em
				"mtn-sm": "768px", // 48em
				"mtn-md": "992px", // 62em
				"mtn-lg": "1200px", // 75em
				"mtn-xl": "1408px", // 88em
			},
			lineHeight: {
				"mtn-xs": "var(--mantine-line-height-xs)",
				"mtn-sm": "var(--mantine-line-height-sm)",
				"mtn-md": "var(--mantine-line-height-md)",
				"mtn-lg": "var(--mantine-line-height-lg)",
				"mtn-xl": "var(--mantine-line-height-xl)",
			},
			fontSize: {
				xs: "var(--mantine-font-size-xs)",
				sm: "var(--mantine-font-size-sm)",
				md: "var(--mantine-font-size-md)",
				lg: "var(--mantine-font-size-lg)",
				xl: "var(--mantine-font-size-xl)",
				h1: "var(--mantine-h1-font-size)",
				h2: "var(--mantine-h2-font-size)",
				h3: "var(--mantine-h3-font-size)",
				h4: "var(--mantine-h4-font-size)",
				h5: "var(--mantine-h5-font-size)",
				h6: "var(--mantine-h6-font-size)",
			},
			spacing: {
				"mtn-xs": "var(--mantine-spacing-xs)",
				"mtn-sm": "var(--mantine-spacing-sm)",
				"mtn-md": "var(--mantine-spacing-md)",
				"mtn-lg": "var(--mantine-spacing-lg)",
				"mtn-xl": "var(--mantine-spacing-xl)",
			},
			colors: {
				light: {
					bright: "var(--mantine-color-bright)",
					text: "var(--mantine-color-text)",
					body: "var(--mantine-color-body)",
					error: "var(--mantine-color-error)",
					placeholder: "var(--mantine-color-placeholder)",
					anchor: "var(--mantine-color-anchor)",
					default: "var(--mantine-color-default)",
					"default-hover": "var(--mantine-color-default-hover)",
					"default-color": "var(--mantine-color-default-color)",
					"default-border": "var(--mantine-color-default-border)",
					dimmed: "var(--mantine-color-dimmed)",
					"dark-filled": "var(--mantine-color-dark-filled)",
					"dark-filled-hover": "var(--mantine-color-dark-filled-hover)",
					"dark-light": "var(--mantine-color-dark-light)",
					"dark-light-hover": "var(--mantine-color-dark-light-hover)",
					"dark-light-color": "var(--mantine-color-dark-light-color)",
					"dark-outline": "var(--mantine-color-dark-outline)",
					"dark-outline-hover": "var(--mantine-color-dark-outline-hover)",
					"gray-filled": "var(--mantine-color-gray-filled)",
					"gray-filled-hover": "var(--mantine-color-gray-filled-hover)",
					"gray-light": "var(--mantine-color-gray-light)",
					"gray-light-hover": "var(--mantine-color-gray-light-hover)",
					"gray-light-color": "var(--mantine-color-gray-light-color)",
					"gray-outline": "var(--mantine-color-gray-outline)",
					"gray-outline-hover": "var(--mantine-color-gray-outline-hover)",
					"red-filled": "var(--mantine-color-red-filled)",
					"red-filled-hover": "var(--mantine-color-red-filled-hover)",
					"red-light": "var(--mantine-color-red-light)",
					"red-light-hover": "var(--mantine-color-red-light-hover)",
					"red-light-color": "var(--mantine-color-red-light-color)",
					"red-outline": "var(--mantine-color-red-outline)",
					"red-outline-hover": "var(--mantine-color-red-outline-hover)",
					"pink-filled": "var(--mantine-color-pink-filled)",
					"pink-filled-hover": "var(--mantine-color-pink-filled-hover)",
					"pink-light": "var(--mantine-color-pink-light)",
					"pink-light-hover": "var(--mantine-color-pink-light-hover)",
					"pink-light-color": "var(--mantine-color-pink-light-color)",
					"pink-outline": "var(--mantine-color-pink-outline)",
					"pink-outline-hover": "var(--mantine-color-pink-outline-hover)",
					"grape-filled": "var(--mantine-color-grape-filled)",
					"grape-filled-hover": "var(--mantine-color-grape-filled-hover)",
					"grape-light": "var(--mantine-color-grape-light)",
					"grape-light-hover": "var(--mantine-color-grape-light-hover)",
					"grape-light-color": "var(--mantine-color-grape-light-color)",
					"grape-outline": "var(--mantine-color-grape-outline)",
					"grape-outline-hover": "var(--mantine-color-grape-outline-hover)",
					"violet-filled": "var(--mantine-color-violet-filled)",
					"violet-filled-hover": "var(--mantine-color-violet-filled-hover)",
					"violet-light": "var(--mantine-color-violet-light)",
					"violet-light-hover": "var(--mantine-color-violet-light-hover)",
					"violet-light-color": "var(--mantine-color-violet-light-color)",
					"violet-outline": "var(--mantine-color-violet-outline)",
					"violet-outline-hover": "var(--mantine-color-violet-outline-hover)",
					"indigo-filled": "var(--mantine-color-indigo-filled)",
					"indigo-filled-hover": "var(--mantine-color-indigo-filled-hover)",
					"indigo-light": "var(--mantine-color-indigo-light)",
					"indigo-light-hover": "var(--mantine-color-indigo-light-hover)",
					"indigo-light-color": "var(--mantine-color-indigo-light-color)",
					"indigo-outline": "var(--mantine-color-indigo-outline)",
					"indigo-outline-hover": "var(--mantine-color-indigo-outline-hover)",
					"blue-filled": "var(--mantine-color-blue-filled)",
					"blue-filled-hover": "var(--mantine-color-blue-filled-hover)",
					"blue-light": "var(--mantine-color-blue-light)",
					"blue-light-hover": "var(--mantine-color-blue-light-hover)",
					"blue-light-color": "var(--mantine-color-blue-light-color)",
					"blue-outline": "var(--mantine-color-blue-outline)",
					"blue-outline-hover": "var(--mantine-color-blue-outline-hover)",
					"cyan-filled": "var(--mantine-color-cyan-filled)",
					"cyan-filled-hover": "var(--mantine-color-cyan-filled-hover)",
					"cyan-light": "var(--mantine-color-cyan-light)",
					"cyan-light-hover": "var(--mantine-color-cyan-light-hover)",
					"cyan-light-color": "var(--mantine-color-cyan-light-color)",
					"cyan-outline": "var(--mantine-color-cyan-outline)",
					"cyan-outline-hover": "var(--mantine-color-cyan-outline-hover)",
					"teal-filled": "var(--mantine-color-teal-filled)",
					"teal-filled-hover": "var(--mantine-color-teal-filled-hover)",
					"teal-light": "var(--mantine-color-teal-light)",
					"teal-light-hover": "var(--mantine-color-teal-light-hover)",
					"teal-light-color": "var(--mantine-color-teal-light-color)",
					"teal-outline": "var(--mantine-color-teal-outline)",
					"teal-outline-hover": "var(--mantine-color-teal-outline-hover)",
					"green-filled": "var(--mantine-color-green-filled)",
					"green-filled-hover": "var(--mantine-color-green-filled-hover)",
					"green-light": "var(--mantine-color-green-light)",
					"green-light-hover": "var(--mantine-color-green-light-hover)",
					"green-light-color": "var(--mantine-color-green-light-color)",
					"green-outline": "var(--mantine-color-green-outline)",
					"green-outline-hover": "var(--mantine-color-green-outline-hover)",
					"lime-filled": "var(--mantine-color-lime-filled)",
					"lime-filled-hover": "var(--mantine-color-lime-filled-hover)",
					"lime-light": "var(--mantine-color-lime-light)",
					"lime-light-hover": "var(--mantine-color-lime-light-hover)",
					"lime-light-color": "var(--mantine-color-lime-light-color)",
					"lime-outline": "var(--mantine-color-lime-outline)",
					"lime-outline-hover": "var(--mantine-color-lime-outline-hover)",
					"yellow-filled": "var(--mantine-color-yellow-filled)",
					"yellow-filled-hover": "var(--mantine-color-yellow-filled-hover)",
					"yellow-light": "var(--mantine-color-yellow-light)",
					"yellow-light-hover": "var(--mantine-color-yellow-light-hover)",
					"yellow-light-color": "var(--mantine-color-yellow-light-color)",
					"yellow-outline": "var(--mantine-color-yellow-outline)",
					"yellow-outline-hover": "var(--mantine-color-yellow-outline-hover)",
					"orange-filled": "var(--mantine-color-orange-filled)",
					"orange-filled-hover": "var(--mantine-color-orange-filled-hover)",
					"orange-light": "var(--mantine-color-orange-light)",
					"orange-light-hover": "var(--mantine-color-orange-light-hover)",
					"orange-light-color": "var(--mantine-color-orange-light-color)",
					"orange-outline": "var(--mantine-color-orange-outline)",
					"orange-outline-hover": "var(--mantine-color-orange-outline-hover)",
				},
				dark: {
					bright: "var(--mantine-color-bright)",
					text: "var(--mantine-color-text)",
					body: "var(--mantine-color-body)",
					error: "var(--mantine-color-error)",
					placeholder: "var(--mantine-color-placeholder)",
					anchor: "var(--mantine-color-anchor)",
					default: "var(--mantine-color-default)",
					"default-hover": "var(--mantine-color-default-hover)",
					"default-color": "var(--mantine-color-default-color)",
					"default-border": "var(--mantine-color-default-border)",
					dimmed: "var(--mantine-color-dimmed)",
					"dark-filled": "var(--mantine-color-dark-filled)",
					"dark-filled-hover": "var(--mantine-color-dark-filled-hover)",
					"dark-light": "var(--mantine-color-dark-light)",
					"dark-light-hover": "var(--mantine-color-dark-light-hover)",
					"dark-light-color": "var(--mantine-color-dark-light-color)",
					"dark-outline": "var(--mantine-color-dark-outline)",
					"dark-outline-hover": "var(--mantine-color-dark-outline-hover)",
					"gray-filled": "var(--mantine-color-gray-filled)",
					"gray-filled-hover": "var(--mantine-color-gray-filled-hover)",
					"gray-light": "var(--mantine-color-gray-light)",
					"gray-light-hover": "var(--mantine-color-gray-light-hover)",
					"gray-light-color": "var(--mantine-color-gray-light-color)",
					"gray-outline": "var(--mantine-color-gray-outline)",
					"gray-outline-hover": "var(--mantine-color-gray-outline-hover)",
					"red-filled": "var(--mantine-color-red-filled)",
					"red-filled-hover": "var(--mantine-color-red-filled-hover)",
					"red-light": "var(--mantine-color-red-light)",
					"red-light-hover": "var(--mantine-color-red-light-hover)",
					"red-light-color": "var(--mantine-color-red-light-color)",
					"red-outline": "var(--mantine-color-red-outline)",
					"red-outline-hover": "var(--mantine-color-red-outline-hover)",
					"pink-filled": "var(--mantine-color-pink-filled)",
					"pink-filled-hover": "var(--mantine-color-pink-filled-hover)",
					"pink-light": "var(--mantine-color-pink-light)",
					"pink-light-hover": "var(--mantine-color-pink-light-hover)",
					"pink-light-color": "var(--mantine-color-pink-light-color)",
					"pink-outline": "var(--mantine-color-pink-outline)",
					"pink-outline-hover": "var(--mantine-color-pink-outline-hover)",
					"grape-filled": "var(--mantine-color-grape-filled)",
					"grape-filled-hover": "var(--mantine-color-grape-filled-hover)",
					"grape-light": "var(--mantine-color-grape-light)",
					"grape-light-hover": "var(--mantine-color-grape-light-hover)",
					"grape-light-color": "var(--mantine-color-grape-light-color)",
					"grape-outline": "var(--mantine-color-grape-outline)",
					"grape-outline-hover": "var(--mantine-color-grape-outline-hover)",
					"violet-filled": "var(--mantine-color-violet-filled)",
					"violet-filled-hover": "var(--mantine-color-violet-filled-hover)",
					"violet-light": "var(--mantine-color-violet-light)",
					"violet-light-hover": "var(--mantine-color-violet-light-hover)",
					"violet-light-color": "var(--mantine-color-violet-light-color)",
					"violet-outline": "var(--mantine-color-violet-outline)",
					"violet-outline-hover": "var(--mantine-color-violet-outline-hover)",
					"indigo-filled": "var(--mantine-color-indigo-filled)",
					"indigo-filled-hover": "var(--mantine-color-indigo-filled-hover)",
					"indigo-light": "var(--mantine-color-indigo-light)",
					"indigo-light-hover": "var(--mantine-color-indigo-light-hover)",
					"indigo-light-color": "var(--mantine-color-indigo-light-color)",
					"indigo-outline": "var(--mantine-color-indigo-outline)",
					"indigo-outline-hover": "var(--mantine-color-indigo-outline-hover)",
					"blue-filled": "var(--mantine-color-blue-filled)",
					"blue-filled-hover": "var(--mantine-color-blue-filled-hover)",
					"blue-light": "var(--mantine-color-blue-light)",
					"blue-light-hover": "var(--mantine-color-blue-light-hover)",
					"blue-light-color": "var(--mantine-color-blue-light-color)",
					"blue-outline": "var(--mantine-color-blue-outline)",
					"blue-outline-hover": "var(--mantine-color-blue-outline-hover)",
					"cyan-filled": "var(--mantine-color-cyan-filled)",
					"cyan-filled-hover": "var(--mantine-color-cyan-filled-hover)",
					"cyan-light": "var(--mantine-color-cyan-light)",
					"cyan-light-hover": "var(--mantine-color-cyan-light-hover)",
					"cyan-light-color": "var(--mantine-color-cyan-light-color)",
					"cyan-outline": "var(--mantine-color-cyan-outline)",
					"cyan-outline-hover": "var(--mantine-color-cyan-outline-hover)",
					"teal-filled": "var(--mantine-color-teal-filled)",
					"teal-filled-hover": "var(--mantine-color-teal-filled-hover)",
					"teal-light": "var(--mantine-color-teal-light)",
					"teal-light-hover": "var(--mantine-color-teal-light-hover)",
					"teal-light-color": "var(--mantine-color-teal-light-color)",
					"teal-outline": "var(--mantine-color-teal-outline)",
					"teal-outline-hover": "var(--mantine-color-teal-outline-hover)",
					"green-filled": "var(--mantine-color-green-filled)",
					"green-filled-hover": "var(--mantine-color-green-filled-hover)",
					"green-light": "var(--mantine-color-green-light)",
					"green-light-hover": "var(--mantine-color-green-light-hover)",
					"green-light-color": "var(--mantine-color-green-light-color)",
					"green-outline": "var(--mantine-color-green-outline)",
					"green-outline-hover": "var(--mantine-color-green-outline-hover)",
					"lime-filled": "var(--mantine-color-lime-filled)",
					"lime-filled-hover": "var(--mantine-color-lime-filled-hover)",
					"lime-light": "var(--mantine-color-lime-light)",
					"lime-light-hover": "var(--mantine-color-lime-light-hover)",
					"lime-light-color": "var(--mantine-color-lime-light-color)",
					"lime-outline": "var(--mantine-color-lime-outline)",
					"lime-outline-hover": "var(--mantine-color-lime-outline-hover)",
					"yellow-filled": "var(--mantine-color-yellow-filled)",
					"yellow-filled-hover": "var(--mantine-color-yellow-filled-hover)",
					"yellow-light": "var(--mantine-color-yellow-light)",
					"yellow-light-hover": "var(--mantine-color-yellow-light-hover)",
					"yellow-light-color": "var(--mantine-color-yellow-light-color)",
					"yellow-outline": "var(--mantine-color-yellow-outline)",
					"yellow-outline-hover": "var(--mantine-color-yellow-outline-hover)",
					"orange-filled": "var(--mantine-color-orange-filled)",
					"orange-filled-hover": "var(--mantine-color-orange-filled-hover)",
					"orange-light": "var(--mantine-color-orange-light)",
					"orange-light-hover": "var(--mantine-color-orange-light-hover)",
					"orange-light-color": "var(--mantine-color-orange-light-color)",
					"orange-outline": "var(--mantine-color-orange-outline)",
					"orange-outline-hover": "var(--mantine-color-orange-outline-hover)",
				},
				mtn: {
					primary: {
						filled: "var(--mantine-primary-color-filled)",
						"filled-hover": "var(--mantine-primary-color-filled-hover)",
						light: "var(--mantine-primary-color-light)",
						"light-hover": "var(--mantine-primary-color-light-hover)",
						"light-color": "var(--mantine-primary-color-light-color)",
					},
					dark: {
						0: "var(--mantine-color-dark-0)",
						1: "var(--mantine-color-dark-1)",
						2: "var(--mantine-color-dark-2)",
						3: "var(--mantine-color-dark-3)",
						4: "var(--mantine-color-dark-4)",
						5: "var(--mantine-color-dark-5)",
						6: "var(--mantine-color-dark-6)",
						7: "var(--mantine-color-dark-7)",
						8: "var(--mantine-color-dark-8)",
						9: "var(--mantine-color-dark-9)",
					},
					gray: {
						0: "var(--mantine-color-gray-0)",
						1: "var(--mantine-color-gray-1)",
						2: "var(--mantine-color-gray-2)",
						3: "var(--mantine-color-gray-3)",
						4: "var(--mantine-color-gray-4)",
						5: "var(--mantine-color-gray-5)",
						6: "var(--mantine-color-gray-6)",
						7: "var(--mantine-color-gray-7)",
						8: "var(--mantine-color-gray-8)",
						9: "var(--mantine-color-gray-9)",
					},
					red: {
						0: "var(--mantine-color-red-0)",
						1: "var(--mantine-color-red-1)",
						2: "var(--mantine-color-red-2)",
						3: "var(--mantine-color-red-3)",
						4: "var(--mantine-color-red-4)",
						5: "var(--mantine-color-red-5)",
						6: "var(--mantine-color-red-6)",
						7: "var(--mantine-color-red-7)",
						8: "var(--mantine-color-red-8)",
						9: "var(--mantine-color-red-9)",
					},
					pink: {
						0: "var(--mantine-color-pink-0)",
						1: "var(--mantine-color-pink-1)",
						2: "var(--mantine-color-pink-2)",
						3: "var(--mantine-color-pink-3)",
						4: "var(--mantine-color-pink-4)",
						5: "var(--mantine-color-pink-5)",
						6: "var(--mantine-color-pink-6)",
						7: "var(--mantine-color-pink-7)",
						8: "var(--mantine-color-pink-8)",
						9: "var(--mantine-color-pink-9)",
					},
					grape: {
						0: "var(--mantine-color-grape-0)",
						1: "var(--mantine-color-grape-1)",
						2: "var(--mantine-color-grape-2)",
						3: "var(--mantine-color-grape-3)",
						4: "var(--mantine-color-grape-4)",
						5: "var(--mantine-color-grape-5)",
						6: "var(--mantine-color-grape-6)",
						7: "var(--mantine-color-grape-7)",
						8: "var(--mantine-color-grape-8)",
						9: "var(--mantine-color-grape-9)",
					},
					violet: {
						0: "var(--mantine-color-violet-0)",
						1: "var(--mantine-color-violet-1)",
						2: "var(--mantine-color-violet-2)",
						3: "var(--mantine-color-violet-3)",
						4: "var(--mantine-color-violet-4)",
						5: "var(--mantine-color-violet-5)",
						6: "var(--mantine-color-violet-6)",
						7: "var(--mantine-color-violet-7)",
						8: "var(--mantine-color-violet-8)",
						9: "var(--mantine-color-violet-9)",
					},
					indigo: {
						0: "var(--mantine-color-indigo-0)",
						1: "var(--mantine-color-indigo-1)",
						2: "var(--mantine-color-indigo-2)",
						3: "var(--mantine-color-indigo-3)",
						4: "var(--mantine-color-indigo-4)",
						5: "var(--mantine-color-indigo-5)",
						6: "var(--mantine-color-indigo-6)",
						7: "var(--mantine-color-indigo-7)",
						8: "var(--mantine-color-indigo-8)",
						9: "var(--mantine-color-indigo-9)",
					},
					blue: {
						0: "var(--mantine-color-blue-0)",
						1: "var(--mantine-color-blue-1)",
						2: "var(--mantine-color-blue-2)",
						3: "var(--mantine-color-blue-3)",
						4: "var(--mantine-color-blue-4)",
						5: "var(--mantine-color-blue-5)",
						6: "var(--mantine-color-blue-6)",
						7: "var(--mantine-color-blue-7)",
						8: "var(--mantine-color-blue-8)",
						9: "var(--mantine-color-blue-9)",
					},
					cyan: {
						0: "var(--mantine-color-cyan-0)",
						1: "var(--mantine-color-cyan-1)",
						2: "var(--mantine-color-cyan-2)",
						3: "var(--mantine-color-cyan-3)",
						4: "var(--mantine-color-cyan-4)",
						5: "var(--mantine-color-cyan-5)",
						6: "var(--mantine-color-cyan-6)",
						7: "var(--mantine-color-cyan-7)",
						8: "var(--mantine-color-cyan-8)",
						9: "var(--mantine-color-cyan-9)",
					},
					teal: {
						0: "var(--mantine-color-teal-0)",
						1: "var(--mantine-color-teal-1)",
						2: "var(--mantine-color-teal-2)",
						3: "var(--mantine-color-teal-3)",
						4: "var(--mantine-color-teal-4)",
						5: "var(--mantine-color-teal-5)",
						6: "var(--mantine-color-teal-6)",
						7: "var(--mantine-color-teal-7)",
						8: "var(--mantine-color-teal-8)",
						9: "var(--mantine-color-teal-9)",
					},
					green: {
						0: "var(--mantine-color-green-0)",
						1: "var(--mantine-color-green-1)",
						2: "var(--mantine-color-green-2)",
						3: "var(--mantine-color-green-3)",
						4: "var(--mantine-color-green-4)",
						5: "var(--mantine-color-green-5)",
						6: "var(--mantine-color-green-6)",
						7: "var(--mantine-color-green-7)",
						8: "var(--mantine-color-green-8)",
						9: "var(--mantine-color-green-9)",
					},
					lime: {
						0: "var(--mantine-color-lime-0)",
						1: "var(--mantine-color-lime-1)",
						2: "var(--mantine-color-lime-2)",
						3: "var(--mantine-color-lime-3)",
						4: "var(--mantine-color-lime-4)",
						5: "var(--mantine-color-lime-5)",
						6: "var(--mantine-color-lime-6)",
						7: "var(--mantine-color-lime-7)",
						8: "var(--mantine-color-lime-8)",
						9: "var(--mantine-color-lime-9)",
					},
					yellow: {
						0: "var(--mantine-color-yellow-0)",
						1: "var(--mantine-color-yellow-1)",
						2: "var(--mantine-color-yellow-2)",
						3: "var(--mantine-color-yellow-3)",
						4: "var(--mantine-color-yellow-4)",
						5: "var(--mantine-color-yellow-5)",
						6: "var(--mantine-color-yellow-6)",
						7: "var(--mantine-color-yellow-7)",
						8: "var(--mantine-color-yellow-8)",
						9: "var(--mantine-color-yellow-9)",
					},
					orange: {
						0: "var(--mantine-color-orange-0)",
						1: "var(--mantine-color-orange-1)",
						2: "var(--mantine-color-orange-2)",
						3: "var(--mantine-color-orange-3)",
						4: "var(--mantine-color-orange-4)",
						5: "var(--mantine-color-orange-5)",
						6: "var(--mantine-color-orange-6)",
						7: "var(--mantine-color-orange-7)",
						8: "var(--mantine-color-orange-8)",
						9: "var(--mantine-color-orange-9)",
					},
				},
			},
			boxShadow: {
				"mtn-xs": "var(--mantine-shadow-xs)",
				"mtn-sm": "var(--mantine-shadow-sm)",
				"mtn-md": "var(--mantine-shadow-md)",
				"mtn-lg": "var(--mantine-shadow-lg)",
				"mtn-xl": "var(--mantine-shadow-xl)",
			},
		},
	},
	plugins: [],
}
export default config
