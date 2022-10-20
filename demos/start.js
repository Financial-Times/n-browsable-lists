require('sucrase/register');
const readFileSync = require('fs').readFileSync;
const https = require('https');

const app = require('./app');

const httpsOptions = {
	key: readFileSync(__dirname + '/self-signed-ssl-key.pem').toString(),
	cert: readFileSync(__dirname + '/self-signed-ssl-certificate.pem').toString()
};

const PORT = process.env.PORT || 5005;

https.createServer(httpsOptions, app).listen(PORT, () => {
	console.log(`Listening on https://local.ft.com:${PORT}`); // eslint-disable-line no-console
});
