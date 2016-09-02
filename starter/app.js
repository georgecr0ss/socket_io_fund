var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 8866;

app.use(express.static(path.join(__dirname, "public")));

server.listen(port,function(){
	console.log("listening on port %s", port);
});