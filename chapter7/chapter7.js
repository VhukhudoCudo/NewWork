"use strict"

//Function

// function Dog(dogName, weight, color, breed) { 
//     this.dogName = dogName; 
//     this.weight = weight; 
//     this.color = color; 
//     this.breed = breed; 
//    } 
//    let dog = new Dog("Jacky", 30, "brown", "labrador");

//class

// class Dog {
//     constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//     }
//    }
//    let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
//console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }
//    let p = new Person("Vhukhudo", "Mateka");
//    alert(`Hi there, ${p.firstname} ${p.lastname}!`);

//Ex 7.1

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     }
//     let person1 = new Person("Vhukhudo", "Mateka")
//     let person2 = new Person("Steve", "Mathe");
//     console.log("hello,hi " + person1.firstname);
//     console.log("hello,hi " + person2.firstname); 

// // class Person {
//  constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    
//     greet() {
//     console.log("Hi there!");
//     }
//     compliment(name, object) {
//     return "That's a wonderful " + object + ", " + name;
//     }
// }
//     let compliment = p.compliment("Harry", "hat");
// console.log(compliment);


//EX 7.2

// class Person { 
//     constructor(firstname, lastname) { 
//     this.firstname = firstname; 
//     this.lastname = lastname;
//     } 
//     fullname(){
//     return this.firstname + " " + this.lastname;
//     }
//    } 
//    let person1 = new Person("Maaike", "van Putten");
//    let person2 = new Person("Laurence", "Svekis");
//    console.log(person1.fullname());
//    console.log(person2.fullname());

//Getters and setters

//Super class

class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

//sub-class

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

// Prototypes

// class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//     greet() {
//     console.log("Hi there!");
//     }
//    }
//    Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
//    };
//    let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();

//EX 7.3

class Animal {
    constructor(species, sounds) {
        this.species = species;
        this.sounds = sounds;
    }
    speak() {
        console.log(this.species + " " + this.sounds);
    }
}
Animal.prototype.eat = function () {
    return this.species + " is eating";
}
let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "bark");
cat.speak();
console.log(dog.eat());
console.log(dog);
