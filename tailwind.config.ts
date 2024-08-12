import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			scrollbar: {
				thin: 'scrollbar-thin',
				thumb: 'scrollbar-thumb-gray-500',
				track: 'scrollbar-track-gray-300',
				rounded: 'scrollbar-thumb-rounded',
			},
		},
		variants: {
			scrollbar: ['rounded'],
		},
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
export default config;
