function greet() {
  console.log("Hello " + this.name);
}

let person = { name: "Ram" };
greet.call(person);  // Output: Hello Ram
