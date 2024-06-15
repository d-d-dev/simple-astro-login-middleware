import colors from 'tailwindcss/colors';
const bg = colors.blue;
const fg = colors.slate;
const accent = colors.indigo;
const highlight = colors.orange;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg1': bg[50],
				'bg2': bg[100],
				'bg3': bg[200],
				'fg1': fg[600],
				'fg2': fg[400],
				'fg3': fg[300],
				'accent1': accent[600],
				'accent2': accent[500],
				'accent3': accent[400],

				'text-dark': colors.neutral[800],
				'text-light': colors.neutral[100],
			}
		},
	},
	plugins: [],
}
