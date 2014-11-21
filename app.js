var express = require('express');
var app = express();
var server = require('http').Server(app);
var cors = require('cors');
var io = require('socket.io')(server);

app.use(express.static(__dirname));

app.get('/', function(socket){
	res.sendFile(__dirname + 'index.html');
});

var chat = require('./chat');
var corsOptions = {
    origin: '*',
    methods: ['GET']
};

app.use(cors(corsOptions));

server.listen(5000);

io.on('connection', chat.websocket);
console.log("Application démarrer sur le port 5000");