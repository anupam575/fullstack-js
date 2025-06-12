// function multiply(a) {
//   return function next(b) {
//     if (b === undefined) return a;
//     a *= b;
//     return next;
//   }
// }
// const str1 = "Hello";
// const str2 = "world 1234";

// function mergeTwoStrings() {
//   let res = '';
//   let m;

//   for (let i = 0; i < str1.length && i < str2.length; i++) {
//     res += str1[i] + str2[i];
//     m = i + 1;
//   }

//   while (m < str1.length || m < str2.length) {
//     if (m < str1.length) {
//       res += str1[m];
//     }
//     if (m < str2.length) {
//       res += str2[m];
//     }
//     m++;
//   }

//   console.log(res);
// }

// mergeTwoStrings();
