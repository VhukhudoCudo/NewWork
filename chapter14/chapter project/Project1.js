"use stric"

// //Matrix effect//

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", "500");
canvas.setAttribute("height", "300");
document.body.prepend(canvas);
const colVal = [];
for (let x = 0; x < 50; x++) {
    colVal.push(0);
}
function matrix() {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    colVal.map((posY, index) => {
        let output = Math.random() < 0.5 ? 0 : 1;
        let posX = (index * 10) + 10;
        ctx.fillText(output, posX, posY);
        if (posY > 100 + Math.random() * 300) {
            colVal[index] = 0;
        } else {
            colVal[index] = posY + 10;
        }
    });
}
setInterval(matrix, 50);
