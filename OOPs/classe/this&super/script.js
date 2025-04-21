// 1. Global context (Node.js or browser)
console.log("Global context:");
function globalFunction() {
    console.log(this); // In Node.js, 'this' refers to the global object
}
globalFunction();

// 2. Object method context
const person = {
    name: "Alice",
    greet: function() {
        console.log("Object method context:");
        console.log(this.name); // 'this' refers to the object (person)
    }
};
person.greet(); // Outputs: Alice

// 3. Arrow function context (inherits 'this' from its surrounding context)
const anotherPerson = {
    name: "Bob",
    greet: function() {
        const innerGreet = () => {
            console.log("Arrow function context:");
            console.log(this.name); // 'this' refers to the surrounding context (anotherPerson)
        };
        innerGreet();
    }
};
anotherPerson.greet(); // Outputs: Bob

// 4. Using 'bind' to explicitly set 'this'
const person2 = {
    name: "Charlie"
};

function sayHello() {
    console.log("Bind method context:");
    console.log(this.name); // Explicitly set 'this' to 'person2'
}

const boundSayHello = sayHello.bind(person2);
boundSayHello(); // Outputs: Charlie
