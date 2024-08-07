"use strict"

//Local File Reader//

// let message = document.getElementById("message");
// if (window.FileReader) {
// message.innerText = "Good to go!";
// } else {
// message.innerText = "No FileReader :(";
// }

//UPLOADING FILES//

// let message = document.getElementById("message");
//  function uploadFile(files) {
//  console.log(files[0]);
//  message.innerText = files[0].name;
//  }

// function uploadFile(files) {
//     for (let i = 0; i < files.length; i++) {
//     message.innerHTML += files[i].name + "<br>";
//     }
//     }

//READING FILES//

// let message = document.getElementById("message");
//  function uploadAndReadFile(files) {
//  let fr = new FileReader();
//  fr.onload = function (e) {
//  message.innerHTML = e.target.result;
//  };
//  fr.readAsText(files[0]);
//  }


//Getting position data with GeoLocation//

// window.onload = init;
//  function init() {
//  console.dir(navigator.geolocation);
//  }

// window.onload = init;
// function init() {
//     navigator.geolocation.getCurrentPosition(showGeoPosition);
// }
// function showGeoPosition(data) {
//     console.dir(data);
// }


//HTML5 canvas//

// let canvas = document.getElementById("c1");
//  let ctx = canvas.getContext("2d");
//  canvas.width = 500; //px
//  canvas.height = 500; //px
//  ctx.fillStyle = "Red";
//  ctx.fillRect(20, 40, 100, 100);


//DYNAMIC CANVAS//


// let canvas = document.getElementById("canvas1");
// let ctx = canvas.getContext("2d");
// canvas.width = 100;
// canvas.height = 100;
// ctx.lineWidth = 2;
// ctx.moveTo(0, 20);
// ctx.lineTo(50, 100);
// ctx.stroke();


//ADDING CIRCLES//

// let canvas = document.getElementById("canvas1");
//  let ctx = canvas.getContext("2d");
//  canvas.width = 100;
//  canvas.height = 100;
//  ctx.lineWidth = 2;
//  ctx.moveTo(0, 20);
//  ctx.lineTo(50, 100);
//  ctx.stroke();
// //arg1 : start position x on canvas
// //arg2 : start position y on canvas
// //arg3 : radius of the circle
// //arg4 : starting angle in radians
// //arg5 : ending angle in radians


//Adding text to the canvas

// let canvas = document.getElementById("canvas1");
//  let ctx = canvas.getContext("2d");
//  canvas.width = 200;
//  canvas.height = 200;
//  ctx.font = "24px Arial";
//  let txt = "Hi canvas!";
//  ctx.fillText(txt, 10, 35);


//Adding And Uploading Images

// window.onload = function () {
//     let canvas = document.getElementById("c1");
//     canvas.height = 300;
//     canvas.width = 300;
//     let ctx = canvas.getContext("2d");
//     let myImage = document.getElementById("flower");
//     ctx.drawImage(myImage, 10, 10);
// };


//Adding animations to the canvas//

// window.onload = init;
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// canvas.height = 500;
// canvas.width = 500;
// var pos = {
//     x: 0,
//     y: 50,
// };
// function init() {
//     draw();
// }
// function draw() {
//     pos.x = pos.x + 5;
//     if (pos.x > canvas.width) {
//         pos.x = 0;
//     }
//     if (pos.y > canvas.height) {
//         pos.y = 0;
//     }
//     ctx.fillRect(pos.x, pos.y, 100, 100);
//     window.setTimeout(draw, 100);
// }


//Drawing on canvas with a mouse//

// window.onload = init

// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// canvas.width = 700;
// canvas.height = 700;

// function init() {
//     canvas.addEventListener("mousemove", draw);
//     canvas.addEventListener("mousemove", setPosition);
//     canvas.addEventListener("mouseenter", setPosition);
// }

// let pos = {
//     x: 0,
//     y: 0,
// };

// function setPosition(e) {
//     pos.x = e.pageX;
//     pos.y = e.pageY;
// }

// function draw(e) {
//     if (e.buttons !== 1) return;
//     ctx.beginPath();
//     ctx.moveTo(pos.x, pos.y);
//     setPosition(e);
//     ctx.lineTo(pos.x, pos.y);
//     ctx.lineWidth = 10;
//     ctx.lineCap = "round";
//     ctx.stroke();
// }

// let bgColor = "pink";
// let bgC = document.getElementById("bgColor");
// bgC.addEventListener("change", function () {
//     bgColor = event.target.value;
// });


//SAVING DYNAMIC PICTURES//

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 200;
// const penColor = document.getElementById("squareColor");
// penColor.addEventListener("change", function () {
//     color = event.target.value;
//     draw(color);
// });
// document.getElementById("save").addEventListener("click",
//     function () {
//         let dataURL = canvas.toDataURL();
//         document.getElementById("holder").src = dataURL;
//     });
// function draw(color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(70, 70, 100, 100);
// }


//Media on the page//













