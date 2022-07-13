const sockets = require("socket.io");
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = sockets(server, {
  cors: {
    origin: "*",
  }
});

var players = []

var rooms = []

app.get('/', (req, res) => {
  res.send('<h1>i got a server up!</h1>');
});

while(rooms.length < 12) {
  rooms.push(String(Math.floor(Math.random() * 10000)))
}


function getLastValue(set){
  let value;
  for(value of set);
  return value;
}

io.on("connection", (socket) => {
  socket.on("server_init", () => {
    socket.join(rooms[0])
    if(io.sockets.adapter.rooms.get(rooms[0]).size === 5) {
      rooms.splice(0, 1)
      rooms.push(String(Math.floor(Math.random() * 10000)))
    }
    socket.emit("e_check", socket.id)
    console.log(socket.rooms)
  })

  socket.emit("init", socket.id)

  socket.on("bullet_hit", () => {
    socket.to(getLastValue(socket.rooms)).emit("hit_bullet", socket.id)
    socket.emit("hit_bullet", socket.id)  
  })

  socket.on("killed_someone", () => {
    socket.to(getLastValue(socket.rooms)).emit("someone_killed", socket.id)
    socket.emit("someone_killed", socket.id)  
  })

  socket.on("update_gun", (a) => {
    socket.broadcast.emit("change_gun", {
      id: socket.id,
      angle: a
    })
  })

  socket.on("ready", (pos) => {
    socket.broadcast.to(getLastValue(socket.rooms)).emit("create", {
      dx: pos.dx,
      dy: pos.dy,
      id: socket.id,
      animation: pos.animation,
      spawnx: pos.spawnx,
      spawny: pos.spawny,
      gun_t: pos.gun_t

    })
  })

  socket.on("emit_init", () => {
    socket.emit("init_player", socket.id)
  })

  socket.on("o_pos", (p) => {
    socket.broadcast.to(getLastValue(socket.rooms)).emit("pos_o", {
      id: socket.id,
      posx: p.x,
      posy: p.y 

    })
  })

  socket.on("bullet_shot", () => {
    // change io.emit to socket.to("room") in future
    socket.to(getLastValue(socket.rooms)).emit("shoot_bullet", socket.id)

  })

  socket.on("tag_it", () => {
    socket.emit("tag_id", socket.id)
  })

  socket.on("og_init", () => {
    socket.emit("init_og", socket.id)
  })


})

server.listen(3000, () => {
  console.log('listening on *:3000');
})