module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current", // This ensures Babel presets target the current version of Node
				},
			},
		],
		"@babel/preset-react",
	],
	plugins: [
		"@babel/plugin-transform-modules-commonjs", // Adds support for transforming ES6 modules to CommonJS
	],
};
