"use strict"

//Chapter project//

//Email Extractor//*** *

let firstArea = document.querySelector("textarea[name='txtarea']");
let secArea = document.querySelector("textarea[name='txtarea2']");
 document.querySelector("button").addEventListener("click", lookUp);
 function lookUp() {
    let rawTxt = firstArea.value;
    let eData = rawTxt.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    let holder = [];
     for (let x = 0; x < eData.length; x++) {
         if (holder.indexOf(eData[x]) == -1) {
             holder.push(eData[x]);
         }
     }
     secArea.value = holder.join(',');
 }


