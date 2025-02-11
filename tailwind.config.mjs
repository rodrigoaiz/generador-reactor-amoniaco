import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        pinkown: 'rgb(var(--pink-own) / <alpha-value>)',
        blueown: 'rgb(var(--blue-own) / <alpha-value>)',
        purpleown: 'rgb(var(--purple-own) / <alpha-value>)'
      }
    },
	},
	plugins: [
    animations
  ],
}
