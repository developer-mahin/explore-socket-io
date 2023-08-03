const express = require("express")
const app = express()
const http = require("http")


const httpServer = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(httpServer)

io.on("connection", (socket) => {
    console.log("new user connected in our app")
    socket.on("disconnect", (socket) => {
        console.log("an user was disconnected")
    })
})



app.get("/", async (req, res) => {
    res.sendFile(__dirname + "/app.html")
})


httpServer.listen(5000, function () {
    console.log("Socket server is running port 5000")
})