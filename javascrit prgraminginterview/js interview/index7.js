// const factorial = (n) => {
//   let product = 1;
//   for (let i = 1; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// }
// console.log(`Factorial of 5 is: ${factorial(4)}`);

// // for(let i = 1; i< 10; i++) {
// //   console.log(2*i -1);
  
// // }


const factorial = (n) => {
  if(n == 0 && n == 1) {
    return 1;
  }
  return n*factorial(n-1)
}
console.log((factorial(8)));
