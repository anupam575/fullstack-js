let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log("Original Array:", arr);

// --- Using splice to REMOVE elements ---
let arr1 = [...arr];  // copy array so original safe rahe
let removedElements = arr1.splice(2, 4);  // index 2 se 3 elements remove karo
console.log("After splice(2, 4) remove elements:", arr1);
console.log("Removed elements:", removedElements);

// --- Using splice to ADD elements ---
let arr2 = [...arr];  // copy array
arr2.splice(1, 2, 'x', 'y');  // index 1 pe 0 elements delete karte hue 'x', 'y' add karo
console.log("After splice(1, 2, 'x', 'y') add elements:", arr2);

// --- Using splice to REPLACE elements ---
let arr3 = [...arr]; // copy array
let replaced = arr3.splice(-3, 2, 'm', 'n'); // negative index se 2 elements remove karo aur 'm','n' add karo
console.log("After splice(-3, 2, 'm', 'n') replace elements:", arr3);
console.log("Replaced elements:", replaced);

// --- slice examples ---
console.log("\nSlice Examples:");
console.log("slice(-3, -1):", arr.slice(-3, -1));
console.log("slice(1, 3):", arr.slice(1, 3));
//Slice tab tak elements leta hai jab tak wo end index se ek step pehle tak ho

