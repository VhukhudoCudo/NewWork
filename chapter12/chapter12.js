"use strict"
//REGEX

//Specifying multiple options for word**

// let text = "I love JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));

//g finds all matches
//i makes the case text-insensetive
//let text = "I love React and JavaScript!";
//console.log(text.match(/javascript|nodejs|react/gi));

//Character options**

//let text = "d";
//console.log(text.match(/[abc]/));

//let text = "t";
//console.log(text.match(/[a-zA-Z]/));

//let text = "äé!";
//console.log(text.match(/[a-zA-Z0-9]/));

// let text = "Just some text.";
// console.log(text.match(/./g));//ANYTHING CAN MATCH
// console.log(text.match(/\./g))//full stop

//let text = "I'm 29 years old.";
//console.log(text.match(/\d/g));//any digits

//let text = "Coding is a lot of fun!";
//console.log(text.match(/\s/g));//whitespace

//let text = "In the end or at the beginning?";
//console.log(text.match(/\bin/gi));//match at begining od string

//let nr = 357;
//console.log(nr.match(/3/g));//CAM'T BE USED  ON NUMBERS


//GROUPS**

//let text = "I love JavaScript!";
//console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

//let text = "I love JavaScript!";
//console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

//let text = "You are doing great!";
//either 'ng' or 'g'
//console.log(text.match(/n?g/gi));//n is optional

//let text = "123123123";
//let text = "123123123a";
//+ allows repitetion
//console.log(text.match(/(123)+/));
//*a find any match where precedes 123
//console.log(text.match(/(123)*a/));

//let text = "abcabcabc";
//console.log(text.match(/(abc){1,2}/));//{min-max}

//let text = "I love JavaScript!";//<group name> speciciefs the group
//console.log(text.match(/(?<language>javascript)/i));

//Practical regex****

//Searching and replacing strings

//let text = "That's not the case.";
//console.log(text.search(/Case/i));//RETURNS THE INDEX WE SEARCHING FOR

//let text = "Coding is fun. Coding opens up a lot of opportunities.";
//WORD IN STRING*
//REPLACE*
//console.log(text.replace("Coding", "JavaScript"));

//Email validation**

// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";//Valid
// let invalidEmail = "maaike@mail@.com";//invalid
// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern));


//Functions and the arguments object**
//first call parameters value
// //then call element of arguements array
// function test(a, b, c) {
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");


// function test(a, b, c) {
//     a = "nice";
//     arguments[1] = "JavaScript";
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");


//JavaScript hoisting***

// var x;
// x = 5;
// console.log(x);


//  STRICT MODE***

// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
//    }
//    sayHi();


//ERROR HANDLING***

// try {
//     trySomething();
// } catch (e) {
//     console.log("Oh oh");
// } finally {
//     console.log("Error or no error, I will be logged!");
// }
// function trySomething() {
//     alert("Everything works now");
// }


//USING COOKIES**

// document.cookie ="name=vhukhudo;favouriteColor=Blue";

// let cookie = decodeComponent(document.cookie);
// let cookieList = cookie.split(";");//create an array
// for (let i = 0; i < cookieList.length; i++) {
//  let c = cookieList[i];
//  if (c.charAt(0) == " ") {
//  c = c.trim();
//  }
//  if (c.startsWith("name")) {
//  alert(c.substring(5, c.length)); 
//  }
// }

//Local Storage

// let message = "Hello storage!";
// localStorage.setItem("example", message);
// if (localStorage.getItem("example")) {
// document.getElementById("stored").innerHTML =
// localStorage.getItem("example");
// }

// console.log(window.localStorage.key(0));

// console.log(window.localStorage.getItem(window.localStorage.key(0)));//return's keys value

// console.log(window.localStorage.clear());

//JSON**

// let object ={
//     "companies": [
//         {
//             "name": "JavaScript Code Dojo",
//             "addresses": [
//                 {
//                     "street": "123 Main street",
//                     "zipcode": 12345,
//                     "city": "Scott"
//                 },
//                 {
//                     "street": "123 Side street",
//                     "zipcode": 35401,
//                     "city": "Tuscaloosa"
//                 }
//             ]
//         },
//         {
//             "name": "Python Code Dojo",
//             "addresses": [
//                 {
//                     "street": "123 Party street",
//                     "zipcode": 68863,
//                     "city": "Nebraska"
//                 },
//                 {
//                     "street": "123 Monty street",
//                     "zipcode": 33306,
//                     "city": "Florida"
//                 }
//             ]
//         }
//     ]
// }


//Parsing JSON**

// let str = "{\"name\": \"Maaike\", \"age\": 30}";
// let obj = JSON.parse(str);
// console.log(obj.name, "is", obj.age);

// let dog = {
//     "name": "wiesje",
//     "breed": "dachshund"
//    };
//    let strdog = JSON.stringify(dog);
//    console.log(typeof strdog);
//    console.log(strdog);


//EX 12.1

// let element = document.getElementById("output");
// let element1 = document.getElementById("sText");
// let element2 = document.getElementById("rText");
// document.querySelector("button").addEventListener("click", lookUp);

// function lookUp() {
//      let s = output.textContent;
//      let rt = replaceValu.value;
//      let regex = new RegexExp(findValue.value,"gi")
//      if(s.match(re)) {
//         let newValue = s.replace(re,rt);
//         output.textContent = newValue;
//      }
// }
// console.log(element);

// //  Ex 12.2

// let output = document.querySelector(".output");
// let emailVal = document.querySelector("input");
// let button =document.querySelector("button");
// let emailExp =
// /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
// button.addEventListener("click", (e) => {

//     let val = emailVal.value;
//     let result = emailExp.test(val);
//     let response = "";
//     if (!result) {
//         response = "Invalid Email";
//         output.style.color = "red";
//     } else {
//         response = "Valid Email";
//         output.sty;e.color = "green";
//     }
//     emailVal.value ="";
//     output.textContent = response;
//     });


//EX 12.3

// function showNames() {
//     let lastOne = "";
//     for (let i = 0; i < arguments.length; i++) {
//     lastOne = arguments[i];
//     }
//     return lastOne;
//    }
//    console.log(showNames("JavaScript", "Laurence", "Mike", "Larry"));



//EX 12.4

// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder(){
//  let counter = val;
//  for(let i=0;i<val;i++){
//  counter++;
//  }
// return counter ;
// }


//EX 12.6


// console.log(document.cookie);
// console.log(rCookie("test1"));
// console.log(rCookie("test"));
// cCookie("test1", "new Cookie", 30);
// dCookie("test2");
// function cCookie(cName, value, days) {
//     if (days) {
//         const d = new Date();
//         d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
//         let e = "; expires=" + d.toUTCString();
//         document.cookie = cName + "=" + value + e + "; path=/";
//     }
// }
// function rCookie(cName) {
//     let cookieValue = false;
//     let arr = document.cookie.split("; ");
//     arr.forEach(str => {
//         const cookie = str.split("=");
//         if (cookie[0] == cName) {
//             cookieValue = cookie[1];
//         }
//     });
//     return cookieValue;
// }
// function dCookie(cName) {
//     cCookie(cName, "", -1);
// }

//Chapter project//

//Email Extractor//*** *

// const firstArea = document.querySelector("textarea[name='txtarea']");
// const secArea = document.querySelector("textarea[name='txtarea2']");
// document.querySelector("button").addEventListener("click", lookUp);
// function lookUp() {
//     const rawTxt = firstArea.value;
//     const eData = rawTxt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
//     const holder = [];
//     for (let x = 0; x < eData.length; x++) {
//         if (holder.indexOf(eData[x]) == -1) {
//             holder.push(eData[x]);
//         }
//     }
//     secArea.value = holder.join(',');
// }


//Form validator//

// const myForm = document.querySelector("form");
// const inputs = document.querySelectorAll("input");
// const errors = document.querySelectorAll(".error");
// const required = ["email", "userName"];
// myForm.addEventListener("submit", validation);
// function validation(e) {
//     let data = {};
//     e.preventDefault();
//     errors.forEach(function (item) {
//         item.classList.add("hide");
//     });
//     let error = false;
//     inputs.forEach(function (el) {
//         let tempName = el.getAttribute("name");
//         if (tempName != null) {
//             el.style.borderColor = "#ddd";
//             if (el.value.length == 0 &&
//                 required.includes(tempName)) {
//                 addError(el, "Required Field", tempName);
//                 error = true;
//             }
//             if (tempName == "email") {
//                 let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.
//                 [A - Za - z0 - 9] +) \w +/;
//     let result = exp.test(el.value);
//     if (!result) {
//         addError(el, "Invalid Email", tempName);
//         error = true;
//     }
// }
// if (tempName == "password") {
//     let exp = /[A-Za-z0-9]+$/;
//     let result = exp.test(el.value);
//     if (!result) {
//         addError(el, "Only numbers and Letters",
//             tempName);
//         error = true;
//     }
//     if (!(el.value.length > 3 &&
//         el.value.length < 9)) {
//         addError(el, "Needs to be between 3-8 " +
//             "characters", tempName);
//         error = true;
//     }
// }
// data[tempName] = el.value;
//     }
//     });
// if (!error) {
//     myForm.submit();
// }
//     }
// function addError(el, mes, fieldName) {
//     let temp = el.nextElementSibling;
//     temp.classList.remove("hide");
//     temp.textContent = fieldName.toUpperCase() + " " + mes;
//     el.style.borderColor = "red";
//     el.focus();
// }


//Simple math quiz

// const app = function () {
//     const game = {};
//     const val1 = document.querySelector(".val1");
//     const val2 = document.querySelector(".val2");
//     const output = document.querySelector(".output");
//     const answer = document.querySelector("input");
//     function init() {
//     document.querySelector("button").addEventListener(
//     "click", checker);
//     loadQuestion();
//     }
//     function ranValue(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) +
//     min);
//     }
//     function loadQuestion() {
//     game.val1 = ranValue(1, 100);
//     game.val2 = ranValue(1, 100);
//     game.answer = game.val1 + game.val2;
//     val1.textContent = game.val1;
//     val2.textContent = game.val2;
//     }
//     function checker() {
//     let bg = answer.value == game.answer ? "green" : "red";
//     output.innerHTML +=
//     `<div style="color:${bg}">${game.val1} +
//     ${game.val2} = ${game.answer} (${answer.value})
//     </div>`;
//     answer.value = "";
//     loadQuestion();
//     }
//     return {
//     init: init
//     };
//     }();
//     document.addEventListener('DOMContentLoaded', app.init);




































