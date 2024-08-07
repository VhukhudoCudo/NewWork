"use strict"

    // Analytics**
    
    // let counter = [];  
    // let main = document.querySelector(".container");
    //  main.addEventListener("click",tracker);

    //  function tracker(e){
    //     let el = e.target;
    //      if(el.id){
    //     let temp = {};
    //      temp.content = el.textContent;
    //      temp.id = el.id;
    //      temp.tagName = el.tagName;
    //      temp.class = el.className;

    //      console.dir(el);
    //      counter.push(temp);
    //      console.log(counter);
    //      }
    //  }

//Star rating system***

  let starsUL = document.querySelector(".stars");
  let output = document.querySelector(".output");
  let stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
      star.starValue = (index + 1);
      star.addEventListener("click", starRate);
  });
  function starRate(e) {
      output.innerHTML = `You Rated this ${e.target.starValue} stars`;
      stars.forEach((star, index) => {
          if (index < e.target.starValue) {
              star.classList.add("orange");
          } else {
              star.classList.remove("orange");
          }
      });
  }

//Mouse position tracker**

 let ele = document.querrySelector(".holder");
 ele.addEventListner("mouseover");
 (e)  => {e.target.classList.add("active"); });
 ele.addEventListner("mouseomove", coordin);

 function coordin() {
     let html = "X:" + event.clientX + " | Y:" + event.clientY;
      document.getElementById("output"). innerHTML =html;
 }

//Box clicker speed test game**

// output = document.querrySelector('.oitput');
// let message = document.querrySelector('.message');
// message.textContent = "Press to Start";
// let box = document.createElement('div');
// let game = {
//     timer : 0,
//     start : null
// };
// box.classList.add('box');
// box.addEventListener('click', (e) => {
//     box.textContent = "";
//     box.style.display = 'none';
//     game.timer = setTimeout(addBox, ranNum(3000));
//     if (!game.start) {
//         message.textContent = 'Loading....';
//     } else {
//         let cur = new Date().getTime();
//         const dur = (cur - game.start) / 1000;
//         message.textContent = `It took ${dur} seconds to click`;
//     }
// });
// function addBox() {
//     message.textContent = 'Click it...';
//     game.start = new Date().getTime();
//     function addBox() {
//         message.textContent = 'Click it...';
//         game.start = new Date().getTime();
//     }
//     function ranNum(max) {
//         return Math.floor(Math.random() * max);
//     }
































