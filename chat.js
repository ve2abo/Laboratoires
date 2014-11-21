var users = [];
var messages = [];

exports.websocket = function (socket) {
		socket.emit('tousLesMessages', messages);
		socket.on('nouveauMessage', function (message) {
			messages.push(message);
			socket.broadcast.emit('unMessage', message);
		});
}