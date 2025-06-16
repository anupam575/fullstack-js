const users = [
  { name: "Amit", age: 25 },
  { name: "Neha", age: 30 },
  { name: "Ravi", age: 22 }
];

const user = users.find(u => u.name === "Neha");

console.log(user); 
// Output: { name: "Neha", age: 30 }
