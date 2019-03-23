var fs = require('fs');
var http = require('http');
var https = require('https');
var path = require('path');

const credentials = {
	key: fs.readFileSync(path.resolve(process.env.HOME, '.https-serve/server.key'), 'utf8'),
	cert: fs.readFileSync(path.resolve(process.env.HOME, '.https-serve/server.crt'), 'utf8'),
};

const createServer = (app, options) => {
	const httpServer = http.createServer(app);
	const httpsServer = https.createServer(credentials, app);

	httpServer.listen(options.port);
	httpsServer.listen(options.httpsPort);

	return { httpServer, httpsServer };
};

module.exports = createServer;
