"use strict"
///Moving Down the Tree

// console.dir(document.body);

// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);
// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

/// Moving up
//console.dir(document.body.children.forest.children.tree2.parentElement);

//console.dir(document.body.children.forest.children.tree2); //MOVING SIDE WAYS

//Selecting elements as objects***

//console.dir(document.body.children.greeting);


//Changing Inner Text**

//console.dir(document.body.children.greeting.innerText = "Bye!");
//console.dir(document.body.children.greeting.innerHTML = "<b>Bye!</b>");

//Access Elements **

// //BY ID
// let item1 = document.getElelementById("two");
// item1.innerHTML = "<i>Hey</i>"
// console.log(item1);

// //By Tag name

// let tags = document.getElementsByTagName("div");
// console.log(tags);

//By Class Name

let ex = document.getElementsByClassName("example");
console.log(ex);

// By CSS selector

// let p =document.querySelectorAll("p");
// console.log(p);

// //USING querySelector() And QuerySelectorAll()

// let firstDiv =document.querySelector("div");
// console.log(firstDiv);

// let allDivs =document.querySelectorAll("div");
// console.log(allDivs);


//Element click handler**

// function stop() {
// alert (`Ouch,Stop it!`);
// };

// //This and the DOM**

// function reveal(el) {
//     console.log(el.parentElement);
// }

//Manipulating element style**

// function toggleDisplay(){
//     let p = document.getElementById("magic");
//     if(p.style.display === "none") {
//     p.style.display = "block";
//     } else {
//     p.style.display = "none";
//     }
//     }

// function rainbowify(){
//     let divs = document.getElementsByTagName("div");
//     for(let i = 0; i < divs.length; i++) {
//     divs[i].style.backgroundColor = divs[i].id;
//     }
//     }

//Changing the classes of an element**

//ADDING

function disappear(){
    document.getElementById("shape").classList.add("hide");
    }

    // Changing

    // function change(){
    //     document.getElementById("shape").classList.remove("blue");
    //     }

//Toggling class**

// function changeVisibility(){
//     document.getElementById("shape").classList.toggle("hide");
//     }

//Manipulating attributes**

// function changeAttr(){
//     let el = document.getElementById("shape");
//     el.setAttribute("style", "background-color:red;border:1px solid  black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle"); 
//     }

//Event listeners on elements**


// function changeColor(){
// let red = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);
// let blue = Math.floor(Math.random() * 256);
// this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }


//Creating new elements**

function addRandomNumber(){
    let el = document.createElement("p");
    el.innerText = Math.floor(Math.random() * 100);// Number Between 0 AND 100
    document.body.appendChild(el);
    }










































































































