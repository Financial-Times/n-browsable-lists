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
	plugins: [new PageKitSassPlugin()],
	output: {
		path: __dirname + '/public/'
	}
};
