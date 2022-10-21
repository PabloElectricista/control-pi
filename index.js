const express = require('express');
const path = require('path');
const SocketIO = require('socket.io');

/* 
var Gpio = require('onoff').Gpio;
var LED1 = new Gpio(4, 'out');
var LED2 = new Gpio(14, 'out');
 */
const { conn, Pin } = require('./src/database.js');
const getControl = require('./src/getControl')

var control1, control2;

const init = async () => {
    control1 = await getControl("control1")
    control2 = await getControl("control2")
}
init();

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello man!'));

const server = app.listen('8080', () => {
    console.log('listening on http://localhost:8080');
    conn.sync().then(() => console.log("database ok")).catch(err => console.log(err))
}
);
const io = SocketIO(server)
io.on("connection", (socket) => {
    io.sockets.emit("LedChange1", control1.status);
    io.sockets.emit("LedChange2", control2.status);
    socket.on("LedChange1", (data) => {
        control1.status = data
        if (data) {
            // LED1.writeSync(0);
            io.sockets.emit("LedChange1", data);
        }
        else {
            // LED1.writeSync(1);
            io.sockets.emit("LedChange1", data);
        }
    })
    socket.on("LedChange2", (data) => {
        control2.status = data
        if (data) {
            // LED2.writeSync(0);
            io.sockets.emit("LedChange2", data);
        }
        else {
            // LED2.writeSync(1);
            io.sockets.emit("LedChange2", data);
        }
    })
    socket.conn.on("close", async (reason) => {
        await control1.save()
        await control2.save()
        console.log("Socket connection closed: ", reason);
    });
    console.log("connected :", socket.connected);
})