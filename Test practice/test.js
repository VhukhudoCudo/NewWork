"use strict"

/*
Create three people objects from the person 
class and print their names to the console.
(5 points)
*/
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let person1 = new Person("Vhukhudo ","Mateka ");
let person2 = new Person("John ", "Doe ");
let person3 = new Person("Mpho ","Seith ");

console.log(person1.firstname + person1.lastname );
console.log(person2.firstname +person2.lastname );
console.log(person3.firstname + person3.lastname );



/*
Create a Car class with a contructor for 
properties make, model and year. 
Create two cars from this class and print 
their information.
Try giving it a drive() method that prints 
"Driving my " + this.make + " car";
(5 points)
*/

class car {
    constructor(carmake,carmodel,caryear) {
        this.carmake = carmake;
        this.carmodel = carmodel;
        this.caryear = caryear
}
}
let car1 = new car("Toyota", "Yaris", 2008);
let car2 = new car("Toyota", "Yaris", 2008);
let car3 = new car("Toyota", "Yaris", 2008);

drive(){



/*
From this array below create a prompt that ask for 
a person's name. Create and call a function that
accepts a name and loops through your 
guests array list using a for of loop to return  
if the person is a guest or not. Use an alert 
to display the result.
(5 points)
*/

let guests = ["Pete", "Margret", "Lacy", "Karl", "Rosanne"];
let guestName = prompt("what is your name?");
let notFound = true;

while (notFound && someArray.length > 0) {
    if (someArray[0] === "Karl") {
    alert("Found guest!");
    notFound = false;
    }
}



















