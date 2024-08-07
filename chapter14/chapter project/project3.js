"use strict"

//online paint app//

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let penColor = document.querySelector("#penColor");
let penWidth = document.querySelector("#penWidth");
let btnSave = document.querySelector(".save");
let btnClear = document.querySelector(".clear");
let output = document.querySelector(".output");
let mLoc = {
    draw: false,
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
};
canvas.style.border = "1px solid black";
btnSave.addEventListener("click", saveImg);
btnClear.addEventListener("click", clearCanvas);
canvas.addEventListener("mousemove", (e) => {
    mLoc.lastX = mLoc.x;
    mLoc.lastY = mLoc.y;
    //console.log(e);
    mLoc.x = e.clientX;
    mLoc.y = e.clientY;
    draw();
});
canvas.addEventListener("mousedown", (e) => {
    mLoc.draw = true;
});
canvas.addEventListener("mouseup", (e) => {
    mLoc.draw = false;
});
canvas.addEventListener("mouseout", (e) => {
    mLoc.draw = false;
});
function saveImg() {
    let dataURL = canvas.toDataURL();
    console.log(dataURL);
    let img = document.createElement("img");
    output.prepend(img);
    img.setAttribute("src", dataURL);
    let link = document.createElement("a");
    output.append(link);
    let fileName = Math.random().toString(16).substr(-8) +
        ".png"
    link.setAttribute("download", fileName);
    link.href = dataURL;
    link.click();
    output.removeChild(link);
}
function clearCanvas() {
    let temp = confirm("clear canvas?");
    if (temp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
function draw() {
    if (mLoc.draw) {
        ctx.beginPath();
        ctx.moveTo(mLoc.lastX, mLoc.lastY);
        ctx.lineTo(mLoc.x, mLoc.y);
        ctx.strokeStyle = penColor.value;
        ctx.lineWidth = penWidth.value;
        ctx.stroke();
        ctx.closePath();
    }
}
















