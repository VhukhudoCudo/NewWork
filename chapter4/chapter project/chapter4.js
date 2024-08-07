 "use strict"

 //Evaluating a number game

//get prompt
 let number = Number(prompt("Enter a number: "));

 //Create a random numer
 let random = Math.floor(Math.random()*10000);
 let numberSwitch;

 if (number > random) {
     numberSwitch = 0;
 } else if (number === random){
     numberSwitch = 1;
 } else if(number < random) {
     numberSwitch = 2;
 } else {
     alert("I'm not sure about that one");
 }


// // compare to  randmom number
// switch(numberSwitch) {
//     case 0:
//         document.querySelector('#para').innerHTML =`Your number: ${number} is greater than the secret number: ${random}`;
//         break;
//     case 1:
//         document.querySelector('#para').innerHTML =`Your number: ${number} is equal than the secret number: ${random}`;
//         break;
//     case 2:
//         document.querySelector('#para').innerHTML =`Your number: ${number} is less than the secret number: ${random}`;
//         break;
//     default:
//         document.querySelector('#para').innerHTML =`I don't know`;
//         break;
// }

//Friend checker game

//let friend = prompt("Give us a name: ");

// switch (friend) {
//     case "Lucky":
//     document.querySelector('#para').innerHTML = `yep ${friend} is a friend.confirmed`;
//     break;
//     case "Vhukhudo":
//     document.querySelector('#para').innerHTML = `yep ${friend} is a friend.confirmed`;
//     break;
//     case "John":
//     document.querySelector('#para').innerHTML = `yep ${friend} is a friend.confirmed`;
//     break;
//     default:
//     document.querySelector('#para').innerHTML = `I can not confirm I don't know ${friend}`;
//     break;
// }

// Rock  Paper Scissor game

const myArr = ["Rock", "Paper", "Scissors"]; 

let idx = Math.floor(Math.random() * 3);
let computer = myArr[idx] ;
let player = prompt("Rock,Paper or Scissors"); 
let message = "player " + player + " vs computer " + computer + " "; 

if (player === computer) { 
 message += "it's a tie"; 
} else if (player > computer) { 
 if (idx == 0 && player == "Scissors") { 
 message += "Computer Wins"; 
 } else { 
 message += "Player Wins"; 
 } 
} else { 
 if (idx == 2 && player == "Rock") { 
 message += "Player Wins"; 
 } else {
    message += "Computer Wins"; 
} 
} 
console.log(message);
