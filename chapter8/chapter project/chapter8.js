"use strict"

//  let str = ["monday"];


//  function scramble(val) {
//      let max = va1.length;
//      let temp = "";
//      for(let i=0;i < max; i++){
//          console.log(va1.length);
//          let index = Math.floor(Math.random()* va1.length);
//          temp += va1[index];
//          console.log(temp);
//          va1 = va1.substr(0, index) + va1.substr(index + 1);
//          console.log(va1);
//      }
//      return temp;
//  }
//  console.log(scramble(str));

//    let str = "JavaScript";
 
//   function scramble(val) {
//    let max = val.length;
//    let temp = "";
//    for(let i=0;i<max;i++){
//    console.log(val.length);
//    let index = Math.floor(Math.random() * val.length);
//    temp += val[index];
//    console.log(temp); 
//    val = val.substr(0, index) + val.substr(index + 1);
//    console.log(val);
//    }
//    return temp;
//   }
//   console.log(scramble(str));


//Countdown timer

  const endDate = "june 12 2025";
  function countdown() {
   const total = Date.parse(endDate) - new Date();
   const days = Math.floor(total / (1000 * 60 * 60 * 24));
   const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
   const mins = Math.floor((total / 1000 / 60) % 60);
   const secs = Math.floor((total / 1000) % 60);
   return {
   days,
   hrs,
   mins,
   secs
   };
  }
  function update() {
   const temp = countdown();
   let output = "";
   for (const property in temp) {
   output += (`${property}: ${temp[property]} `);
   }
   console.log(output);
   setTimeout(update, 1000);
  }
  update();