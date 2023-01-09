import express from 'express';
import cookieParser from 'cookie-parser';
import { PageKitReactJSX } from '@financial-times/dotcom-server-react-jsx';
import proxy from 'express-http-proxy';

const app = express();
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');

const renderer = new PageKitReactJSX();
app.engine('jsx', renderer.engine);

app.get('/:conceptId?/:variant?', (req, res) => {
	const { conceptId, variant } = req.params;

	return res.render('main.jsx', {
		layout: 'custom-vanilla',
		title: 'Demo',
		conceptId,
		variant
	});
});

app.all('/__myft/*', proxy('https://www.ft.com/__myft/'));

module.exports = app;
