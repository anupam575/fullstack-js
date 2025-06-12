// function func1 () {
//   return 1
// }
// function func2() {
//   return 3
// }
// let a = (func1(), func2())
// console.log(a); //comma operator last value ko assign krta not 1 first value chahe vo 5 he kyo na ho
//"Write a program that calls two functions, but only assigns the return value of the second one to a variable — even though both functions should execute."

//  Translation (Hindi samajh):
// "Aisa program banao jisme do functions call ho, dono execute ho jaayein, lekin variable me sirf dusre function ka return value assign ho."

// "In this program, I have defined two functions, func1 and func2. Both functions return values — 2 and 6 respectively. I used the comma operator in the statement let a = (func1(), func2());.

// The comma operator evaluates each expression from left to right but returns the value of the last expression only. So, func1() is called first, returns 2, but that value is ignored. Then, func2() is called and its return value 6 is assigned to the variable a.
// Therefore, when we log a, the output is 6 and not 2. This approach allows us to execute multiple functions but only use the result of the final one."
// program mein maine do functions banaye hain — func1 aur func2. Dono functions apne-apne values return karte hain, 2 aur 6 respectively. Maine let a = (func1(), func2()); mein comma operator use kiya hai.

// Comma operator expressions ko left se right evaluate karta hai, lekin sirf last expression ka value return karta hai. Isliye, pehle func1() call hota hai, jo 2 return karta hai, lekin woh value ignore ho jati hai. Phir func2() call hota hai, jo 6 return karta hai, aur wahi value variable a ko assign hoti hai.

// Isiliye jab hum console.log(a) karte hain, to output 6 aata hai, 2 nahi. Ye tarika useful hota hai jab hume multiple functions execute karne ho, lekin sirf last function ka result chahiye ho

function func1() {
  return 1
}
function func2() {
  return 2
}
let a = (func1(), func2())
console.log(a);

