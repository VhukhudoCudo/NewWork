"use strict"

// //Writting functions
// function sayHello() {
//     let you = prompt("What's your name? ");
//     alert("Hello " + you + "!");
//    }
//    sayHello();

//EX  6.2

// const adj = ["super", "wonderful", "bad", "angry", "careful"];
// function myFun() {
//  const question = prompt("What is your name?");
//  const nameAdj = Math.floor(Math.random() * adj.length);
//  console.log(adj[nameAdj] + " " + question );
// }
// myFun();

// EX 6.3

// const val1 = 10;
// const val2 = 5;
// let operat = "-";
// function cal(a, b, op) {
//  if (op == "-") {
//  console.log(a — b);
//  } else {
//  console.log(a + b);
//  }
// }
// cal(val1, val2, operat);

//EX 6.4

// const myArr = [];
// for(let x=0; x<10; x++){
//  let val1 = 5 * x;
//  let val2 = x * x;
//  let res = cal(val1, val2, "+");
//  myArr.push(res);
// }
// console.log(myArr);
// function cal(a, b, op) {
//  if (op == "-") {
//  return a - b;
//  } else {
//  return a + b;
//  }
// }


// EX 6.5

// let val = "1000";
// (function () {
//  let val = "100"; // local scope variable
//  console.log(val);
// })();
// let result = (function () {
//  let val = "Laurence";
//  return val;
// })();
// console.log(result);
// console.log(val);
// (function (val) {
//  console.log(`My name is ${val}`);
// })("Laurence");