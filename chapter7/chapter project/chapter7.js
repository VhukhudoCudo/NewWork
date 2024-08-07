"use strict"

//   class Employee {
//       constructor(first, last, years) {
//       this.first = first;
//       this.last = last;
//       this.years = years;
//       }
//      }
//      let person1 = new Employee("Vhukhudo", "Mateka", 5);
//      let person2 = new Employee("Nolindo", "Masangwana", 7);
//      let workers = [person1, person2];
//      Employee.prototype.details = function(){
//       return this.first + " " + this.last + " has worked here  for " +
//       this.years + " years";
//      }
//      workers.forEach((person) => {
//       console.log(person.details());
//      });
   

//Menu items price calculator

 class Menu {
     #price1 = 13; //Private field declaration
     #price2 = 22;
     constructor(price1,price2) {
         this.price1 = price1;
         this.price2 = price2;
     }
 calTotal(){
     return (this.price1 * this.#price1) + (this.price2 * this.#price2);
 }
 get total(){
     return this.calTotal();
 }
 }
 let price1 = new Menu(2,0);
 let price2 = new Menu(1,3);
 let price3 = new Menu(3,2);
 console.log(price1.total);
 console.log(price2.total);
 console.log(price3.total);
