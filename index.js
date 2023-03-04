const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { v4: uuidv4 } = require('uuid');
const io = require("socket.io")(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
	const room = socket.handshake.query.room;
	console.log('a user connected on room '+room);
	socket.join(room);
	socket.on('update', (msg) => {
		socket.broadcast.to(msg.room).emit('update', msg.data);
	});
	socket.on('askupdate', (msg) => {
		socket.broadcast.to(msg.room).emit('askupdate', msg);
	});
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});
