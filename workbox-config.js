module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};