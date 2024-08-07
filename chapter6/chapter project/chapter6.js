"use strict"

// //Create a recursive function

// let main = function counter(i) {
//     console.log(i);
//     if (i < 10) {
//     return counter(i + 1);
//     }
//     return;
//    }
//    main(0);


//Set timeout order

let one = () => console.log('one');
let two = () => console.log('two');
let three = () => {
   console.log('three');
   one();
   two(); 
}
let four = () => {
   console.log('four');
   setTimeout(one, 1000);
   three();
}
four();



