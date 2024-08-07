"use strict"

//while loops

//     let i = 0;
// while (i < 10) {
//  console.log(i);
//  i++;
// };

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// let notFound = true;
// while (notFound && someArray.length > 0) {
//  if (someArray[0] === "Louiza") {
//  console.log("Found her!");
//  notFound = false;
//  } else {
//  someArray.shift();
//  console.log(someArray);
//  }
// }

//EX 5.1

// let max = 10;
// let ranNumber = Math.floor(Math.random() * max )+1 ;
// //console.log(ranNumber);
// let correct = false;
// while (!correct) {
//     let guess = prompt("Please eneter a number" -+ max);
//     guess = Number(guess);
//     if (guess === randNumber) {
//         correct = true;
//         console.log("You got it " + ranNumber);
//     } else if (guess > ranNumber) {
//         console.log("Too high");
//         } else {
//         console.log("Too Low");
//         }
//        }
    
//do while loops

//Ex 5.2

// let counter = 0;
// let step =10;
// do {
//     console.log(counter);
//     counter += step;
// }
// while (counter <= 100);

// for loops

// Ex 5.3

//     let myWork = [];
// for (let x = 1; x < 10; x++) {
//  let stat = x % 2 ? true : false;
//  let temp = {
//  name: `Lesson ${x}`, status: stat
//  };
//  myWork.push(temp);
// }
// console.log(myWork);

//Nested loops
//Ex 5.4

// let myTable = [];
// let rows = 6;
// let colmns = 9;
// let counter = 0;
// for (let x = 0; x < rows; x++) {
//     let tempTable = [];
//     for (let y = 0; y < rows; y++);{
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);


//Loops and Arrays
//Ex 5.5

// let grid = [];
// let cells = 64;
//  let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//  if (counter % 8 == 0) {
//  if (row != undefined) { 
//  grid.push(row);
//  }
//  row = [];
//  }
//  counter++;
//  let temp = counter
//  row.push(temp);
// }
// console.table(grid);

//Ex 5.6

// let myArr = [];
// for ( let x = 0; x < 10; x++){
//     myArr.push(x + 1);
// }
// console.log(myArr);
// for ( let val of myArr){
//     console.log(val);
// }

//for in loop

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//    };
//    for (let prop in car){
//     console.log(car[property]);
//    }

















