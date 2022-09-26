import express from 'express';
import cookieParser from 'cookie-parser';
import { PageKitReactJSX } from '@financial-times/dotcom-server-react-jsx';

const app = express();
app.use(cookieParser());
app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname + '/templates');
app.set('view engine', 'html');

const renderer = new PageKitReactJSX();
app.engine('jsx', renderer.engine);

app.get('/', (req, res) => {
	return res.render('index.jsx', { layout: 'custom-vanilla', title: 'Demo' });
});

module.exports = app;
