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

/**
 * Use Roboto as default font family
 *
 * @see TW https://tailwindcss.com/docs/font-family#customizing
 * @see TypeScale https://material.io/design/typography/the-type-system.html#type-scale 
 * @see Roboto https://fonts.google.com/specimen/Roboto
 */
const fontFamily = {
	sans: [
		'Roboto',
		'ui-sans-serif',
		'system-ui',
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'"Helvetica Neue"',
		'Arial',
		'"Noto Sans"',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
		'"Noto Color Emoji"'
	],
	mono: [
		'"Roboto Mono"',
		'ui-monospace',
		'SFMono-Regular',
		'Menlo',
		'Monaco',
		'Consolas',
		'"Liberation Mono"',
		'"Courier New"',
		'monospace'
	]
};

const fontMeta = {
	h1: { fontSize: '96px', tracking: '-1.5px', fontWeight: '300' },
	h2: { fontSize: '60px', tracking: '-0.5px', fontWeight: '300' },
	h3: { fontSize: '48px', tracking: '0px', fontWeight: '400' },
	h4: { fontSize: '34px', tracking: '0.25px', fontWeight: '400' },
	h5: { fontSize: '24px', tracking: '0px', fontWeight: '400' },
	h6: { fontSize: '20px', tracking: '0.15px', fontWeight: '500' },
	subtitle1: { fontSize: '16px', tracking: '0.15px', fontWeight: '400' },
	subtitle2: { fontSize: '14px', tracking: '0.1x', fontWeight: '500' },
	body1: { fontSize: '16px', tracking: '0.5px', fontWeight: '400' },
	body2: { fontSize: '14px', tracking: '0.25px', fontWeight: '400' },
	button: { fontSize: '14px', tracking: '1.25px', fontWeight: '500' },
	caption: { fontSize: '12px', tracking: '0.4px', fontWeight: '400' },
	overline: { fontSize: '10px', tracking: '1.5px', fontWeight: '400' }
};

// Use 'rem' for font size instead of pixels: https://material.io/design/typography/the-type-system.html#type-scale
const fontSize = Object.entries(fontMeta).map(([ key, { fontSize } ]) => ({
	[key]: `calc(${fontSize} / 16)rem`
}));
const fontWeight = Object.entries(fontMeta).map(([ key, { fontWeight } ]) => ({
	[key]: fontWeight
}));
const letterSpacing = Object.entries(fontMeta).map(([ key, { tracking } ]) => ({
	[key]: `calc(${tracking} / 16)rem`
}));

module.exports = {
	mode: 'jit',
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens,
			colors,
			fontSize,
			fontWeight,
			letterSpacing
		},
		fontFamily
	},
	variants: {
		extend: {}
	},
	plugins: []
};
