/**
 * Material Design breakpoints
 * @see https://material.io/design/layout/understanding-layout.html#layout-anatomy
 * @see https://tailwindcss.com/docs/breakpoints
 */
const screens = {
	sm: { min: '0', max: '599px' },
	md: { min: '600px', max: '904px' },
	lg: { min: '905px', max: '1239px' },
	xl: { min: '1240px', max: '1439px' },
	'2xl': { min: '1440px' }
};

/**
 * Custom Material Design theme colors
 * @see https://material.io/design/color/the-color-system.html#color-theme-creation
 * @see https://tailwindcss.com/docs/customizing-colors#extending-the-defaults
 * @see https://material.io/resources/color/#!/?view.left=1&view.right=1&primary.color=db1f5e&secondary.color=ffc600&primary.text.color=ffffff
 */
const colors = {
	primary: '#db1f5d',
	'primary-light': '#a30035',
	'primary-dark': '#ff5e8b',
	secondary: '#ffc600',
	'secondary-light': '#fff94f',
	'secondary-dark': '#c79600',
	background: '#fff',
	surface: '#fff',
	error: '#b00020',
	'on-primary': '#fff',
	'on-secondary': '#000',
	'on-background': '#000',
	'on-surface': '#000',
	'on-error': '#fff'
};

module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens,
			colors
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
