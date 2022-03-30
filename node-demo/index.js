const { WebSocketServer } = require('ws')
const wss = new WebSocketServer({
  port: 8080
})
wss.on('connection', (ws, req) => {
  console.log('客户端已连接：', req.socket.remoteAddress)
  ws.onmessage = function (mevt) {
    console.log("收到客户端发送的消息: " + mevt.data);
    // ws.close()
  };
  setInterval(() => {
    ws.send(Math.random()) // 向当前客户端发送消息
  }, 1000 * 5);
  setTimeout(() => {
    ws.close(1000,'close')
  }, 1000 * 15);
})