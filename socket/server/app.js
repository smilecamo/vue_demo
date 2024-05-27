const express = require('express')
const { Server } = require("socket.io");
const app = express()
const io = new Server(3000, {
    cors: {
        origin: ['http://localhost:5173'],
    }
});
const data = [
    {
        id: 1,
        name: '张三',
        age: 7,
        score: 7
    },
    {
        id: 2,
        name: '李四',
        age: 8,
        score: 8
    },
    {
        id: 3,
        name: '王五',
        age: 9,
        score: 9
    }
]
io.on("connection", (socket) => {
    socket.emit('loadData', data)
    socket.on('changeStatus', status => {
        io.emit('changeStatus', status)
    })
    socket.on('changeData', data => {
        io.emit('changeData', data)
    })
});

app.listen(8000, () => {
    console.log('服务器启动成功8000')
})