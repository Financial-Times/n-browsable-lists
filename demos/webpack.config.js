const xEngine = require('@financial-times/x-engine/src/webpack');
const { PageKitSassPlugin } = require('@financial-times/dotcom-build-sass');

const plugins = [new PageKitSassPlugin(), xEngine()];

module.exports = {
	mode: 'development',
	resolve: {
		modules: [__dirname + '/../node_modules'],
		descriptionFiles: ['package.json']
	},
	entry: {
		bundle: './demos/src/demo.js',
		styles: './demos/src/demo.scss'
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
						]
					}
				}
			}
		]
	},
	plugins,
	output: {
		path: __dirname + '/public/'
	}
};
