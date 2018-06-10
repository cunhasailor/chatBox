var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8080;
//var port = process.env.PORT || 8080;
var os = require("os");
var usinfo = os.userInfo();
const usuario = usinfo.username;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chatBox.html');
});
app.get('/swoosh.mp3', function(req, res){
  res.sendFile(__dirname + '/swoosh.mp3');
  console.log("swoosh"+__dirname);
});
app.get('/swoosh.html', function(req, res){
  res.sendFile(__dirname + '/swoosh.html');
  console.log("swoosh.html");

});
io.on('connection', function(socket)     {
	console.log("connection");
  socket.on('chat message', function(msg){
    io.emit('chat message', usuario +" : " + msg);
    console.log(usuario + " "+ msg);
    const ende = (socket.handshake.address);
    console.log("ende " + ende);
    io.emit('notify', ende);

 });
  socket.on('disconnect', function()     {
    console.log('user disconnected');
 });

 

    
 
});

http.listen(port, function(){
  console.log('listening on port:' + port);
});
