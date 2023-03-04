const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { v4: uuidv4 } = require('uuid');
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
	console.log('a user connected');
	io.emit('message', { content: 'a user connected' });
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});
