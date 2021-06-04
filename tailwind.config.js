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

module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
