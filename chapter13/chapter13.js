"use strict"

//Callbacks//** *

// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);
// getGrade(11,judge);

// setInterval(encourage, 500);
// function encourage() {
//  console.log("You're doing great, keep going!");
// }


//Promises//** 

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example 
//     let x = 20;
//     if (x > 10) {
//     resolve(x); // on success
//     } else {
//     reject("Too low"); // on error
//     }
//    });
//    promise.then(
//     //Resolve
//     function (value) {
//     console.log("Success:", value);
//     },
//     function (error) {
//         //reject
//         console.log("Error:", error);
//         }
//        );

////////

// const promise = new Promise((resolve, reject) => {
//     reject("oops... ");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })


//async and await//

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + x);
//         }, 2000);// 2 seconds
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);


//Event loop//

//CALL STACK AND CALLBACK QUEUE//

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//     return x + y;
// }


//EX 13.1//

// function greet(fullName) {
//     console.log(`Welcome!,${fullName[0]} ${fullName[1]}`);
// }
// function processCall(user,callback){
//     let fullName = user.split(" ");
//     callback(fullName);
// }

// processCall("Mateka vhukhudo", greet);



//EX 13.2//

// let promise = new Promise((resolve, reject) => {
//     resolve("Start Counting");

// });
// function counter(val) {
//     console.log(val);
// }
// myPromise
//   .then(value => {counter(value); return "one"})
//   .then(value => {counter(value); return "two"})
//   .then(value => {counter(value); return "three"})
//   .then(value => {counter(value);});

//EX 13.3//


let cnt = 0;
function outputTime(val) {
return new Promise(resolve => {
setTimeout(() => {
cnt++;
resolve(`x value ${val} counter:${cnt}`);
}, 1000);
});
}
async function aCall(val) {
console.log(`ready ${val} counter:${cnt}`);
const res = await outputTime(val);
console.log(res);
}
for (let x = 1; x < 4; x++) {
aCall(x);
}
















