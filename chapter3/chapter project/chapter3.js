"use strict"

// Manipulating an Array


 //let theList = ['Laurence', 'Svekis', true, 35, null, undefined,  {test: 'one', score: 55}, ['one', 'two']];
// theList.shift();
// theList.pop();
// console.log(theList);

//  theList.unshift("FIRST");
//  console.log(theList);

//   theList[3] = "hello World";
//   console.log(theList);
//  theList[2] = "MIDDLE";
//  console.log(theList);
//  theList.push("LAST");
//  theList.splice(4,3);
//   console.log(theList);


// //Company product catalog


 let inventory = [];
 console.log(inventory);
 let item1 = {
     name: "iphone",
     model: "15 pro max",
     cost: "R25,000",
     quantity: 3,
     forSale: true
 }
 let item2 = {
     name: "nokia",
     model: 3310,
     cost: "R300",
     quantity: 10
 }
 let item3 = {
     name: "blackberry",
     model: "Bold 9700",
     cost: "R4,000",
     quantity: 8
 }
 inventory.push(item1, item2, item3);
 console.log(inventory);
 //console.log(inventory[1].quantity);
 console.log(inventory[2].quantity);
 console.log(inventory[0].cost);
