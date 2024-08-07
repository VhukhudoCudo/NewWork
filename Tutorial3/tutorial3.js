"Use strict"

//Converting HTML Form fields  Values to JSON object//** */

// function convertToJson() {
//     let form = document.getElementById("dataForm");
//     let formData = {};
//     for (let i = 0; i < form.elements.length; i++) {
//         let element = form.elements[i];
//         if (element.type !== "submit") {
//             formData[element.name] = element.value;
//         }
//     }
//     let jsonData = JSON.stringify(formData);
//     let jsonOutput = document.getElementById("jsonOutput");
//     jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";
//}


//Difference between JSON.parse() and JSON.stringify() Methods in JavaScript //** */


//JSON.parse(string, function);

// const myInfo = `{
//     "Name": "GFG", 
//     "Age":22,
//     "Department" : "Computer Science and Engineering",
//     "Year": "3rd"
//  }`

//  const Obj = JSON.parse(myInfo);
//  console.log(Obj.Name)  
//  console.log(Obj.Age)


//JSON.stringify() Method//** */

// let myInfo = {
//     Name : "GFG",
//     Age :22,
//     Department : "Computer Science and Engineering",
//     Year: "3rd"
// }
// let Obj = JSON.stringify(myInfo);
// console.log(Obj);


//How to JSON Stringify an Array of Objects in JavaScript//** */

// let data = [
//     {
//         language: 'JavaScript',
//         category: 'Web Development'
//     },
//     {
//         language: 'Python',
//         category: 'Data Science'
//     },
//     {
//         language: 'Java',
//         category: 'Software Development'
//     }
// ];
// const res = JSON.stringify(data, (key, value) => {
//     if (typeof value === 'string') {
//         return value.toUpperCase();
//     }
//     return value;
// });
// console.log(res);


//Using a Custom Function for JSON Stringify//** */

// const data = [
//     {
//         language: 'JavaScript',
//         category: 'Web Development'
//     },
//     {
//         language: 'Python',
//         category: 'Data Science'
//     },
//     {
//         language: 'Java',
//         category: 'Software Development'
//     }
// ];
// const res = approach2Fn(data);
// console.log(res);

// function approach2Fn(data) {
//     if (Array.isArray(data)) {
//         const sArr = data.map
//             (item => approach2Fn(item));
//         return `[${sArr.join(',')}]`;
//     } else if (typeof data === 'object' 
//         && data !== null) {
//         const sObj = Object.entries(data)
//             .map(([key, value]) => 
//                 `"${key}":${approach2Fn(value)}`)
//             .join(',');
//         return `{${sObj}}`;
//     } else {
//         return JSON.stringify(data);
//     }
// }



//JavaScript JSON stringify() Method//** */

// const value = {
//     Company: "GeeksforGeeks",
//     Estd: 2009,
//     location: "Noida"
// };
// const result = JSON.stringify(value);
// console.log("value of result = " + result);


//**exmple 2**//

// let obj = {
//     name: "GFG",
//     add: {
//         country: "India",
//         state: {
//             code: "JS",
//             topic: "stringify"
//         }
//     }
// }

// let obj2 = JSON.parse(JSON.stringify(obj));
// obj2.add.state.topic = "stringify json object";
// console.log(obj);
// console.log(obj2);

//*Example 3*//

// let value = ["Logan", 21, "Peter", 24];
// let result = JSON.stringify(value);
// console.log("value of result = " + result);
// console.log("type of result = " + typeof result);


//Node.js querystring.stringify() Method//** */

//Example1//** */


// Import the querystring module 
//const querystring = require("querystring"); 
  
// // Specify the URL object 
// // to be serialized 
// let urlObject = { 
//     user: "sam", 
//     access: true, 
//     role: ["admin", "editor", "manager"], 
// }; 
  
// // Use the stringify() method on the object 
// let parsedQuery = querystring.stringify(urlObject); 
  
// console.log("Parsed Query:", parsedQuery);



// Import the querystring module 
// const querystring = require("querystring"); 
  
// // Specify the URL object 
// // to be serialized 
// let urlObject = { 
//     user: "max", 
//     access: false, 
//     role: ["editor", "manager"], 
// }; 
  
// // Use the stringify() method on the object 
// // with sep as `, ` and eq as `:` 
// let parsedQuery = querystring.stringify(urlObject, ", ", ":"); 
  
// console.log("Parsed Query 1:", parsedQuery); 
  
// // Use the stringify() method on the object 
// // with sep as `&&&` and eq as `==` 
// parsedQuery = querystring.stringify(urlObject, "&&&", "=="); 
  
// console.log("\nParsed Query 2:", parsedQuery);



//Node.js querystring.parse() Method//** */



// // Import the querystring module 
// const querystring = require("querystring"); 
  
// // Specify the URL query string 
// // to be parsed 
// let urlQuery =  
//   "username=user1&units=kgs&units=pounds&permission=false"; 
  
// // Use the parse() method on the string 
// let parsedObject = querystring.parse(urlQuery); 
  
// console.log("Parsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with sep as `&&` and eq as `-` 
// urlQuery =  
//   "username-user1&&units-kgs&&units-pounds&&permission-false"; 
// parsedObject = querystring.parse(urlQuery, "&&", "-"); 
  
// console.log("\nParsed Query:", parsedObject);


//Example2//** */


// // Import the querystring module 
// const querystring = require("querystring"); 
  
// // Specify the URL query string 
// // to be parsed 
// let urlQuery =  
//   "user=admin&articles=1&articles=2&articles=3&access=true"; 
  
// // Use the parse() method on the string 
// // with default values 
// let parsedObject = querystring.parse(urlQuery, "&", "="); 
  
// console.log("Parsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with maxKeys set to 1 
// parsedObject =  
//   querystring.parse(urlQuery, "&", "=", { maxKeys: 1 }); 
  
// console.log("\nParsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with maxKeys set to 2 
// parsedObject =  
//   querystring.parse(urlQuery, "&", "=", { maxKeys: 2 }); 
  
// console.log("\nParsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with maxKeys set to 0 (no limits) 
// parsedObject =  
//   querystring.parse(urlQuery, "&", "=", { maxKeys: 0 }); 
  
// console.log("\nParsed Query:", parsedObject);


//Node.js querystring.stringify() Method//** */

//EXAMPLE1//** */


// // Import the querystring module 
// const querystring = require("querystring"); 
  
// // Specify the URL object 
// // to be serialized 
// let urlObject = { 
//     user: "sam", 
//     access: true, 
//     role: ["admin", "editor", "manager"], 
// }; 
  
// // Use the stringify() method on the object 
// let parsedQuery = querystring.stringify(urlObject); 
  
// console.log("Parsed Query:", parsedQuery);


//EXAMPLE2//** */



// // Import the querystring module 
// const querystring = require("querystring"); 
  
// // Specify the URL object 
// // to be serialized 
// let urlObject = { 
//     user: "max", 
//     access: false, 
//     role: ["editor", "manager"], 
// }; 
  
// // Use the stringify() method on the object 
// // with sep as `, ` and eq as `:` 
// let parsedQuery = querystring.stringify(urlObject, ", ", ":"); 
  
// console.log("Parsed Query 1:", parsedQuery); 
  
// // Use the stringify() method on the object 
// // with sep as `&&&` and eq as `==` 
// parsedQuery = querystring.stringify(urlObject, "&&&", "=="); 
  
// console.log("\nParsed Query 2:", parsedQuery);


//Node.js querystring.parse() Method//** */

//Example 1//** */


// Import the querystring module 
const querystring = require("querystring"); 
  
// // Specify the URL query string 
// // to be parsed 
// let urlQuery =  
//   "username=user1&units=kgs&units=pounds&permission=false"; 
  
// // Use the parse() method on the string 
// let parsedObject = querystring.parse(urlQuery); 
  
// console.log("Parsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with sep as `&&` and eq as `-` 
// urlQuery =  
//   "username-user1&&units-kgs&&units-pounds&&permission-false"; 
// parsedObject = querystring.parse(urlQuery, "&&", "-"); 
  
// console.log("\nParsed Query:", parsedObject);


//Example 2//** */


// // Import the querystring module 
// const querystring = require("querystring"); 
  
// // Specify the URL query string 
// // to be parsed 
// let urlQuery =  
//   "user=admin&articles=1&articles=2&articles=3&access=true"; 
  
// // Use the parse() method on the string 
// // with default values 
// let parsedObject = querystring.parse(urlQuery, "&", "="); 
  
// console.log("Parsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with maxKeys set to 1 
// parsedObject =  
//   querystring.parse(urlQuery, "&", "=", { maxKeys: 1 }); 
  
// console.log("\nParsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with maxKeys set to 2 
// parsedObject =  
//   querystring.parse(urlQuery, "&", "=", { maxKeys: 2 }); 
  
// console.log("\nParsed Query:", parsedObject); 
  
// // Use the parse() method on the string 
// // with maxKeys set to 0 (no limits) 
// parsedObject =  
//   querystring.parse(urlQuery, "&", "=", { maxKeys: 0 }); 
  
// console.log("\nParsed Query:", parsedObject);





