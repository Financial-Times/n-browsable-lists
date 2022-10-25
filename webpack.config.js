const xEngine = require('@financial-times/x-engine/src/webpack');
const { PageKitSassPlugin } = require('@financial-times/dotcom-build-sass');
const nodeExternals = require('webpack-node-externals');

const plugins = [new PageKitSassPlugin(), xEngine()];

module.exports = {
	mode: 'production',
	entry: {
		component: './index.jsx'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: 'defaults' }],
							['preact']
						],
						plugins: ['@babel/plugin-syntax-jsx']
					}
				}
			}
		]
	},
	plugins,
	output: {
		globalObject: 'this',
		path: __dirname + '/dist/',
		filename: 'component.js',
		libraryTarget: 'umd'
	},
	target: 'node',
	externals: [nodeExternals()]
};
