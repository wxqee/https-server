var express = require('express');
var createServer = require('./create-server');
var app = express();
app.use(express.static('public'))
var { httpServer, httpsServer } = createServer(app, { http: { port: process.env.PORT || 3000 } });
