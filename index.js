const express = require('express');
const path = require('path');
const SocketIO = require('socket.io');
const { onEsp, offEsp } = require('./src/esp');
/* 
var Gpio = require('onoff').Gpio;
var LED1 = new Gpio(4, 'out');
var LED2 = new Gpio(14, 'out');
 */
const { conn, Pin } = require('./src/database.js');
const getControl = require('./src/getControl')

var control1, control2, control3;

const init = async () => {
    control1 = await getControl("control1")
    control2 = await getControl("control2")
    control3 = await getControl("control3")
    if (control1 && control1.status) {
         // LED1.writeSync(0);
    }
    else {
         // LED1.writeSync(1);
    }
    if (control2 && control2.status) {
        // LED2.writeSync(0);
    }
    else {
        // LED2.writeSync(1);
    }
    if (control3 && control3.status) {
        await onEsp()
    }
    else {
        await offEsp()
    }
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
    if(control1.name) io.sockets.emit("LedChange1", control1.status);
    if(control2.name) io.sockets.emit("LedChange2", control2.status);
    if(control3.name) io.sockets.emit("LedChange2", control3.status);
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
    socket.on("LedChange3", async (data) => {
        control2.status = data
        if (data) {
          await onEsp()
          io.sockets.emit("LedChange3", data);
        }
        else {
          await offEsp()
          io.sockets.emit("LedChange3", data);
        }
    })

    socket.conn.on("close", async (reason) => {
        await control1.save()
        await control2.save()
        console.log("Socket connection closed: ", reason);
    });
    console.log("connected :", socket.connected);
})