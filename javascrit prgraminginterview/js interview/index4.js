let num = 25;
if (num % 5 == 0) {
  console.log(`${num} is divisble by 5`);
} else {
  console.log(`${num} is not divisble by 5`);
}

// let a = 25;
// let b = 40;
// let c = 30;

// if (a >= b && a >= c) {
//   console.log(a + " is the greatest");
// } else if (b >= a && b >= c) {
//   console.log(b + " is the greatest");
// } else {
//   console.log(c + " is the greatest");
// }
// const findLargest = arr => Math.max(...arr);

// console.log(findLargest([5, 12, 9, 100, 25]));  // Output: 100

const arr = [5, 120, 9, ];

let max = arr[0];
let second = -Infinity;
let third = -Infinity;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    third = second;     // purana second → third
    second = max;       // purana max → second
    max = arr[i];       // naye max ko set karo
  } else if (arr[i] > second && arr[i] !== max) {
    third = second;     // current second → third
    second = arr[i];    // naye second ko set karo
  } else if (arr[i] > third && arr[i] !== max && arr[i] !== second) {
    third = arr[i];     // naye third ko set karo
  }
}

console.log("Sabse bada number (max):", max);       // 👉 100
console.log("Dusra sabse bada number (second):", second); // 👉 25
console.log("Tisra sabse bada number (third):", third);   // 👉 12




// 👉 Start:
// max = 5

// second = -∞

// third = -∞

// 🔁 Loop Start
// 🟢 i = 1 → arr[1] = 12
// 12 > max (5) ✅
// So:

// third = second = -∞

// second = max = 5

// max = 12

// ✅ Now:

// max = 12, second = 5, third = -∞

// 🟢 i = 2 → arr[2] = 9
// 9 > max (12) ❌

// 9 > second (5) ✅

// third = second = 5

// second = 9

// ✅ Now:

// max = 12, second = 9, third = 5

// 🟢 i = 3 → arr[3] = 100
// 100 > max (12) ✅
// So:

// third = second = 9

// second = max = 12

// max = 100

// ✅ Now:

// max = 100, second = 12, third = 9

// 🟢 i = 4 → arr[4] = 25
// 25 > max (100) ❌

// 25 > second (12) ✅

// third = second = 12

// second = 25

// ✅ Final:

// max = 100, second = 25, third = 12

