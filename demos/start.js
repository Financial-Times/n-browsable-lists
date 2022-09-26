require('sucrase/register');
const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`); // eslint-disable-line no-console
});
