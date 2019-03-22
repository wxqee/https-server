var express = require('express');
var createServer = require('./create-server');
var app = express();
var { httpServer, httpsServer } = createServer(app, { http: { port: process.env.PORT || 3000 } });
