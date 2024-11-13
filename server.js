const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


var players = [];
var gameStats = [];
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on("snake position", (data) => {
    const foundPlayer = players.find(player => player.id === socket.id);

    if (foundPlayer) {
      const existingPlayer = gameStats.find(player => player.name === foundPlayer.name);
      
      if (existingPlayer) {
        existingPlayer.position = data;
      } else {

        const newStats = {
          name: foundPlayer.name,
          position: data
        };
        gameStats.push(newStats);
      }
    } else {
      console.log('Player not found in players!');
    }

    
    io.emit("update game stats", gameStats);
  });

  
  socket.on("user connected", (nome) => {
    console.log("User connected successfully");

    const newPlayer = {
      id: socket.id,
      name: nome
    };
    players.push(newPlayer);
    gameStats.push({
      name: nome,
      position: []
    });
  });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
    players = players.filter(player => player.id !== socket.id);
    gameStats = gameStats.filter(player => player.name !== socket.name);
    io.emit("update game stats", gameStats);
  });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
