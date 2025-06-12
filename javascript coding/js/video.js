// function abc() {
//   console.log(abc.xyz);

const { useState, useEffect } = require("react");

  
  
// }
// abc()
// abc.xyz =400
// abc()
// abc.xyz=200
// abc()
// abc()
// const numbers= [1,2,3,4,5]
// numbers [100]=500
// console.log(numbers);
// console.log(typeof typeof 100);

// const arr = [..."praveen"]
// console.log(arr);
// console.log(parseInt("10 + 2"));
// console.log(parseInt("7FM"));
// console.log(parseInt("M7F"));

// console.log([1, 2, 0, -1].map(num => {
//   if (num > 0) {
//     return num * 2;
//   } else {
//     return "Invalid";
//   }
// }));
// "use strict"; // Strict mode चालू किया

// function calculateDouble(num) {
//   return num * 2;
// }

// let result = calculateDouble(5);
// console.log("Result is:", result);

// function abc(a, b) {
//   "use strict";
//   a = 100;
//   b = 200;
//   console.log(a + b);  // Console में 300 दिखेगा
//   return [a, b];       // दोनों values return करें
// }

// console.log(abc(300, 400)); // Output: [100, 200]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr =arr.map((num) => num > 4);
// console.log(newArr);
const [abc,setAbc]=useState('')
useEffect(function() {}, [abc])