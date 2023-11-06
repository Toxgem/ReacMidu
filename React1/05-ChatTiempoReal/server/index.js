/* The code is importing the `express` and `morgan` modules in JavaScript. */
import express from "express"
import logger from "morgan"
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const port = process.env.PORT ?? 3000;

const app = express();

const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery:{
       
    }
})
io.on('connection', (socket) => {
    console.log('a user connected')
  
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg) // <-----
      })
  
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })

// no usar app, si no server

app.use(logger('dev'));
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + `/client/index.html`)
})

server.listen(port, () => {
    console.log(`Started at ${port}`);
});
