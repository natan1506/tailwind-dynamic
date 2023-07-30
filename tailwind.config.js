/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				primary2: 'rgb(var(--color-primary2) / <alpha-value>)',
				secondary2: 'rgb(var(--color-secondary2) / <alpha-value>)',
			},
			keyframes: {
				AnimateBg: {
					'0%, 100%': { backgroundPosition: '0 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				AnimateBg: 'AnimateBg 15s ease infinite',
			},
		},
	},
	plugins: [],
}
