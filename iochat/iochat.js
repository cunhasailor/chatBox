

//https://www.youtube.com/watch?https://youtu.be/e-vw-r5BucM

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require ('socket.io').listen(server);
users = [];
connections = [];
server.listen(process.env.PORT || 8080);
	console.log('Server running...');
app.get('/', function(req, res){
		res.sendFile(__dirname +'/index.html');

});
io.sockets.on('connection', function(socket){
	console.log('socket connected');
	connections.push(socket);
	console.log('connected: %s sockets connected',connections.length);
socket.on('send message', function(){
	io.sockets.emit('new message', {msg: data});
});



socket.on('disconnect', function(data){
	connections.splice(connections.indexOf(socket),1)
	console.log('Disconnected: %s sockets connected', connections.length);

		});
	});

server.on('request', function(req){
console.log(req.url);
});
