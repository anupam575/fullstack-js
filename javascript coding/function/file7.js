function greet() {
  console.log("Hello " + this.name);
}

let person = { name: "Lakshman" };
let boundFunc = greet.bind(person);
boundFunc();  // Output: Hello Lakshman
