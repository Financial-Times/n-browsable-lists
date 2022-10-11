const { PageKitSassPlugin } = require('@financial-times/dotcom-build-sass');

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
	plugins: [new PageKitSassPlugin()],
	output: {
		path: __dirname + '/public/'
	}
};
