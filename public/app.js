const socket = io()

let LED1 = document.getElementById("control1");
let LED2 = document.getElementById("control2");
let LED3 = document.getElementById("control3");

LED1.addEventListener("change", function (evt) {
    socket.emit("LedChange1", evt.target.checked)
})

LED2.addEventListener("change", function (evt) {
    socket.emit("LedChange2", evt.target.checked)
})

LED3.addEventListener("change", function (evt) {
    socket.emit("LedChange3", evt.target.checked)
})

socket.on("LedChange1", function (data) {
    LED1.checked = data
})

socket.on("LedChange2", function (data) {
    LED2.checked = data
})

socket.on("LedChange3", function (data) {
    LED3.checked = data
})
