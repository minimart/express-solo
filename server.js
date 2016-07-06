var express = require('express');
var app = express();
var port = 3000;
var path = require('path');
var hello = require('./hello.js');

app.listen(port, function onServerListen(){
  console.log('Started server!');
});

app.use('/', hello);
