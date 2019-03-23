#!/usr/bin/env node

var express = require('express');
var path = require('path');
var createServer = require('../index');

// application
var app = express();
app.use(express.static(path.resolve('.')));

// run application in http+https server
var serverOptions = {
  port: process.env.PORT || 80,
  httpsPort: process.env.HTTPS_PORT || 443,
};
var { httpServer, httpsServer } = createServer(app, serverOptions);

httpServer.on('listening', () => {
  const { address, port, family } = httpServer.address();
  console.info('httpServer on %s:%s (%s)', address, port, family);
});

httpsServer.on('listening', () => {
  const { address, port, family } = httpsServer.address();
  console.info('httpsServer on %s:%s (%s)', address, port, family);
});


