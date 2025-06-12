// let a=10;
// let b = new Number(10);
// let c = 10
// console.log(a == b)
// Can you demonstrate the difference between primitive numbers and Number objects in JavaScript using a code example? Also, show how strict equality behaves in this case."

// 🟧 Interview Question (Hindi):
// "Kya aap ek chhoti si code example ke through JavaScript mein primitive number aur Number object ka antar samjha sakte hain? Saath hi strict equality (===) ka behavior bhi batayein."

// ✅ Your Response in Interview (English):
// "Yes, in JavaScript, numbers can be stored as primitive values or as objects using the Number constructor. If we compare a primitive number with a Number object using strict equality (===), it returns false because their types are different. Here's a code example:"
// t
// Ji haan, JavaScript mein number do tarike se store kiye ja sakte hain — ek to primitname: 'Adarsh'};
// let z = {.ive number jaise 10, aur doosra Number object jaise new Number(10). Jab hum strict equality (===) se dono ko compare karte hain, to ye false deta hai kyunki unki type alag hoti hai. Yeh raha example:

// Can you demonstrate how object cloning works in JavaScript using the spread operator? Also explain whether modifying the cloned object affects the original."

// 🔶 Interview Question (Hindi):
// "Kya aap JavaScript mein spread operator se object clone karne ka example de sakte hain? Saath hi batayein ki agar cloned object ko modify karein to kya original object par koi asar padta hai?"

// ✅ Your Interview Answer (English):
// "Yes. In JavaScript, we can create a shallow copy of an object using the spread operator (...). When we modify the copied object, the original object does not get affected — at least for top-level properties. Here’s an example:"
// "Ji haan. JavaScript mein hum spread operator (...) ka use karke kisi object ka shallow copy bana sakte hain. Jab hum copied object ko modify karte hain, to original object par koi asar nahi padta — agar properties primitive type ki ho. Yeh dekhiye example:"
// let a = { name: 'Adarsh' };
// let z = { ...a };         // 'a' ka shallow copy bana
// z.name = "adil";          // copy ko change kiya

// console.log(a.name);      // Output: Adarsh
// console.log(+true);
// console.log(!'xyz');


