"use strict"
/*
//Creating Arrays

let arr1 = new Array("purple", "green", "yellow");
let arr2 = ["black", "orange", "pink"];

console.log(arr1);
console.log(arr2);

let arr3 = new Array(10);//add capacity of the value
let arr4 = [10];//add element with value 10

console.log(arr3);
console.log(arr4);


let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);


const arr = ["hi there"];
arr[0] = "new value";
console.log(arr[0]);

//Throws an error becauce te value has already been assigned on line 24
arr = ["nope, now you are overwriting the array"];


let cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);//It will log 0 because it doenot exist


cars[0] = "Tesla";
console.log(cars[0]);
console.log(cars);

cars[3] = "kia";
cars[-1] = "Fiat";
console.log(cars[3]);
console.log(cars[-1]);

console.log(cars);


let colors = ["black", "orange", "pink"]
let booleans = [true, false, false, true];
let emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

lastElement = colors[colors.length - 1];
console.log(lastElement);


let numbers = [ 12, 24, 36 ];
numbers[5] = 48;
Console.log(numbers);


let list =["Milk","Bread","Apples"];
console.log(list.length);

list[1]= "Bananas";
console.log(list);


//ARRAY METHODS(Push)

let favoriteFruits = ["grapefruit", "orange", "lemon"];
 favoriteFruits.push("tangerine");
console.log(favoriteFruits);
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits.length);


//splice

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);


//concat method

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2)
let findValue = arr8.find((e) =>  e === 6);//finds the actuall value not the value at a certain ndez
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

//finding value usind INDEX
arr8 = [ 2, 6, 7, 8 ];
let findValue3 = arr8.indexOf(6);
let findValue4 = arr8.indexOf(10);
console.log(findValue3, findValue4);


//Sorting Values

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();//ascening order
console.log(names);
names.reverse();//reverse the order
console.log(names);


//Practice 3.2

let shoppingList = [];
  let shoppingList1 = ["Milk","Bread","Apples"];
  shoppingList.splice(1, 1, "Bananas", "Eggs");
  shoppingList.pop();
  shoppingList.sort();
  console.log(shoppingList1.indexOf("Milk"))
  console.log(shoppingList);

  let shoppingList2 = ["Milk","Bananas","Eggs","Apples"];
  shoppingList2.splice(1, 0, "Carrots", "Lettuce");
  console.log(shoppingList2);

  let shoppingList3 = ["Bananas","carrots", "Lettuce","Eggs","Milk"];
  let woolies = ["Juice","Pop"];
  let bothList = shoppingList3.concat(woolies).concat(woolies);
  console.log(bothList );

  let shoppingList4 = [ "Bananas", "Carrots", "Lettuce", "Eggs","Milk", "Juice","Pop","Juice","Pop"];
  let findIndex = shoppingList4.indexOf("Pop");
  console.log(findIndex);


//Two dimensional Arrays
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];
console.log(arrOfArrays);

let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays2);

console.log(arrOfArrays2[1][2]);

//Multidimensional Arrays

arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log("Multi-dimensional Array: ", arrOfArraysOfArrays);


//Ex 3.3

let arr1 = [1,2,3];
let arryOfArrays = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
];
console.log(arryOfArrays[0][2]);


//Objects

let dog = { dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
    };
    console.log(dog);

    dog["color"] = "blue";
    dog.weight = 2.3;
    console.log(dog);

    dog.age = "three";
    let variable = "age";
    console.log(dog[variable]);

    variable = "breed";
console.log(dog[variable]);

dog[variable] = "dachshund";
console.log(dog["breed"]);


//ex 3.4

 let myCar = {
         carMake : "Toyota",
          model  : " Yaris ",
          Year   : 2008,
          color  : "Black",
          value  : "R20,000",
          forSale: true,
 };
console.log(myCar);


// Objects in objects

let company = { companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
    },
    yearOfEstablishment: 2021
    };
    console.log(company);


   let company = { companyName: "Healthy Candy",
        activities: ["food manufacturing",
       "improving kids' health", "manufacturing toys"],
        address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
        },
        yearOfEstablishment: 2021
        };
        console.log(company);


        let addresses = [{
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
            },
            {
            street: "1st West avenue",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas"
            }];
            console.log(addresses);
 

//Ex 3.5

let people =  {friends:[]};
let friend1 = {Name: "John", lastName:"Daniels",id: 111144};
let friend2 = {Name: "Steve", lastName:"Mpho",id: 88837};
letfriend3 = { Name: "Vhukhudo", lastName: "Mateka",id: 1121};
people.friends.push(friend1, friend2, friend3);
console.log(people);
*/



