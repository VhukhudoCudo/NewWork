"use strict"
/*
//If Statement
let rain = true;
if(rain){
 console.log("** Taking my umbrella when I need to go outside **");
} else {
 console.log("** I can leave my umbrella at home **");
}


let age = Number(prompt("How old are you?"));

if(age < 18) {
    console.log("We're very sorry, but you can't get in under 18");
   } else {
    console.log("Welcome!");
   }
   

   //Ex 4.1

   let eatsNuts = false;
   if(eatsNuts){
       console.log("I love it!");
   }else if(!eatsNuts){
       console.log("I hate it!");
   }
   console.log(eatsNuts);
   

   //ELSE IF STATEMENT

   let age = Number(prompt("How old are you?"));
let cost = 0;
let message;
if (age < 3) {
 cost = 0;
 message= "Access is free under three.";
} else if (age >= 3 && age < 12) {
 cost = 5;
 message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
 cost = 10;
 message ="A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message ="A ticket is 7 dollars.";
   }
   console.log(message);
   console.log("Your Total cost "+cost);
   

   //EX 4.2

   let age = Number(prompt("How old are you?"));
   let message;
   if (age >= 21 ) {
    message = "You can eneter the venue and purchase alcohol";
   } else if (age >= 19) {
    message = " You can enter the venue but can not purchase alcohol";
   } else {
    message = "You are not allowed in!"
   }
   alert(message);
   

   // Conditional ternary operators

   let age = Number(prompt("How old are you?"));
   let access = age < 18 ? "denied" : "allowed";
   alert(access);
   

//Ex 4.3

let id =  prompt("Is your id valid?");
let valid = (id === "true")? "Allowed" : "denied";
  alert(valid) ;
  

  // Else if statement

  let activity = "Breakfast";

  if(activity === "Get up") {
    console.log("It is 6:30AM");
   } else if(activity === "Breakfast") {
    console.log("It is 7:00AM");
   } else if(activity === "Drive to work") {
    console.log("It is 8:00AM");
   } else if(activity === "Lunch") {
    console.log("It is 12.00PM");
   } else if(activity === "Drive home") {
    console.log("It is 5:00PM")
   } else if(activity === "Dinner") {
    console.log("It is 6:30PM");
   } 
    

   //SWITCH STATEMENT

   let activity = "Get up";
   switch(activity) {
    case "Get up":
    console.log("It is 6:30AM");
    break;
    case "Breakfast":
    console.log("It is 7:00AM");
    break;
    case "Drive to work":
    console.log("It is 8:00AM");
    break;
    case "Lunch":
    console.log("It is 12:00PM");
    break; 
    case "Drive home":
    console.log("It is 5:00PM");
    break; 
    case "Dinner":
    console.log("It is 6:30PM");
    break;
   }
     

   //EX 4.4

   let randomNumber = Math.floor(Math.random() * 6);
let answer = "Something went wrong";
let question = prompt("Ask me anything");
switch (randomNumber) {
 case 0:
 answer = "It will work out";
 break;
 case 1:
 answer = "Maybe, maybe not";
 break;
 case 2:
 answer = "Probably not";
 break;
 case 3:
 answer = "Highly likely";
 break;
 default: answer = "I don't know about that";
}
let output = "You asked me " + question + ". I think that " + answer;
console.log(output);


let grade = "F";
if(grade === "F" || grade === "D") {
    console.log("You've failed!");
   } else if(grade === "C" || grade === "B") {
    console.log("You've passed!");
   } else if(grade === "A") {
    console.log("Nice!");
   } else {
    console.log("I don't know this grade.");
   }


// Ex 4.5

let prize = prompt("Select the value between 0 & 10");
 prize= Number(prize);
 let output = "My selection";
 switch(prize){
    case 0:
        output += "Diamond";
        break;
        case 1:
            output  += "Money";
            break;
            case 2:
                output += "Silver medal";
                break;
                case 3:
                output += "Car";
                break;
                case 4 :
                    output += "House";
                    break;
                    case 5 :
                        output += "Gold medal";
        default : "Sorry let's try again";
 }
 console.log(output);
 */

 let a = 5;
 let b = 10;
 let c = 20;
 let d = 30;
 console.log(a > b || b > a);
 console.log(a > b && b > a);
 console.log(d > b || b > a);
 console.log(d > b && b > a);



