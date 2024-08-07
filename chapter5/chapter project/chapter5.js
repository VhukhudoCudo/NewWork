"use strict"

 let multiplecationTable = [];
 let values = 20;
 for (let x=0; x<values; x++) {
 let temp = [];
 for(let y =0; y < values; y++) {
     temp.push( x * y );
 }
 multiplecationTable.push(temp);
 }
 console.table(multiplecationTable);




