const socket = io()

let LED1 = document.getElementById("control1");
let LED2 = document.getElementById("control2");
LED1.addEventListener("change", function (evt) {
    socket.emit("LedChange1", evt.target.checked)
})

LED2.addEventListener("change", function (evt) {
    console.log("2");
    socket.emit("LedChange2", evt.target.checked)
})

socket.on("LedChange1", function (data) {
    LED1.checked = data
})

socket.on("LedChange2", function (data) {
    LED2.checked = data
})
