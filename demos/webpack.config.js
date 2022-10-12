const xEngine = require('@financial-times/x-engine/src/webpack');

const { PageKitBasePlugin } = require('@financial-times/dotcom-build-base');
const { PageKitJsPlugin } = require('@financial-times/dotcom-build-js');
const { PageKitSassPlugin } = require('@financial-times/dotcom-build-sass');
const {
	PageKitCodeSplittingPlugin
} = require('@financial-times/dotcom-build-code-splitting');

const plugins = [
	new PageKitBasePlugin(),
	new PageKitJsPlugin(),
	new PageKitSassPlugin(),
	new PageKitCodeSplittingPlugin(),
	xEngine()
];

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
							['@babel/preset-react']
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
