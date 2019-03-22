var fs = require('fs');
var http = require('http');
var https = require('https');

const credentials = {
	key: fs.readFileSync('ssl/server.key', 'utf8'),
	cert: fs.readFileSync('ssl/server.crt', 'utf8'),
};

const createServer = (app, options) => {
	const settings = Object.assign({}, options, {
		http: {},
		https: {},
	});
	const httpServer = http.createServer(app);
	const httpsServer = https.createServer(credentials, app);

	httpServer.listen(settings.http.port || 80);
	httpsServer.listen(settings.https.port || 443);

	return { httpServer, httpsServer };
};

module.exports = createServer;
