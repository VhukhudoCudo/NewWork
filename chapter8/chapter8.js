"use strict"

//decodeUri() and encodeUri()

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//decodeUriComponent() and encodeUriComponent()

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

//Ex 8.1

// const secretMes1 = "How's%20it%20going%3F";
// const secretMes2 = "How's it going?";
// const decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);
// Appendix
// [ 450 ]
// const encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);
// const uri = "http://www.basescripts.com?=Hello World";
// const encoded = encodeURI(uri);
// console.log(encoded);

//Parsing numbers (parseInt())

// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);
// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

//Making floats with parseFloat()
// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);
// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);
// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

//Executing JavaScript with eval() on  html

//Array methods

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

//Filtering an array

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//  return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr)

//Replacing Array Elements

//  let arr = ["grapefruit",4,"hello",5,6,true];
// console.log(`original array: ${arr}`);
// arr.copyWithin(0,3,5);
// arr.copywithin
// console.log(`new array: ${arr}`);

//Mapping the values of an array

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);

//Finding the last occurence in an array

// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));

//Ex 8.2

// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne"];
//     console.log(arr);

// let filterArr = arr.filter(function (element, index, array) {
//     return array.indexOf(element) === index;
// });
// console.log(filterArr);

//Ex 8.3


// const myArr = [1,4,5,6];
// const myArr1 = myArr.map(function(ele){
//  return ele * 2;
// });
// console.log(myArr1);
// const myArr2 = myArr.map((ele)=> ele*2);
// console.log(myArr2);

//String methods

// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

//Converting a String to an array

// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let letters = ["a", "b", "c"];
// let x = letters.join('-');
// console.log(x);

//Working with index and positions

// let poem = "Roses are red, violets are blue, if I can do JS, then youcan too!";
// let index_re = poem.indexOf("re");
// console.log(index_re);



// let indexNotFound = poem.indexOf("python");
// console.log(indexNotFound);

//search

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let pos1 = poem.charAt(10);
// console.log(pos1);
// let pos2 = poem.charAt(1000);
// console.log(pos2);//Returns empty string

//Creating substrings

// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

//Replacing parts of the string

// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(hi);
// console.log(new_hi);
// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

//Uppercase and lowercase

// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);

//The start and the End of a string,always return a boolean value

// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_end = encouragement.endsWith("Something else");
// console.log(bool_end);

//Number Methods, checkin if something is a number or not

// let x = 34;
// console.log(isNaN(x));//false
// console.log(!isNaN(x));//true
// let str = "hi";
// console.log(isNaN(str));//true

//Checking if something is finite

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

//Checking if something is an integer

// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

//Specifying a number of decimals

// let x = 1.23456;
// let newX = x.toFixed(3); 
// console.log(x, newX);

//Math methods

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

//Square root and raising to the power of

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);// 5*5*5
// console.log(result2);

//Turning decimals into integers, nearest number rounding

// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

//CEL,Removes decimalls

// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

//TRUNC, removes decimal places

// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

//Exponent and logarithm

// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);

//Date methods

// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

//let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
//console.log(specificDate);

//Methods to get and set the elements of a date

// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());

// d.setFullYear(2010);
// console.log(d);

// d.setMonth(9);
// console.log(d);

// d.setDate(10);
// console.log(d);

//Parsing dates

// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

//Converting a date to a string

// console.log(d.toDateString());

// console.log(d.toLocaleDateString());

//EX 8.4


// let arr = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//     str = str.toLowerCase();
//     let temp = [];
//     let words= str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         temp.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(arr));


// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//  str = str.toLowerCase();
//  const tempArr = [];
//  let words = str.split(" ");
//  words.forEach(word => {
//  let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//  tempArr.push(temp);
//  });
//  return tempArr.join(" ");
// }
// console.log(wordsCaps(val));


//EX 8.5

//  let str = " I love Javascript";
//  str = str.toLowerCase();
//  let vowels = ["a","e","i","o","u"];
//  vowels.forEach((letter,index) =>{ 
//      console.log(letter);
//      str = str.replaceAll(letter,index);
//  });
//  console.log(str);

//EX 8.6

// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5,7));
// console.log(Math.round(5,7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()* 11));
// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.floor(Math.random()*100)+1);
// function randNum(min,max) {
//     return Math.floor(Math.random() * (max -min +1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//     console.log(randNum(1, 100));
// }

//EX 8.7



// let future =new Date(2026,6,11);
// console.log(furture);

// let months = ["jan", "feb", "march", "april", "may", "june", "july", "Aug", "sep", "oct", "nov", "dec"];
// let day =future.getDate();
// let month =future.getMonth();
// let year =future.getFullYear();
// let date =  `${day} ${months[month-1]}  ${year}`;
// console.log(date);




