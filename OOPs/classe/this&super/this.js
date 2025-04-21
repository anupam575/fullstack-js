// Global context
console.log('Global context:');
function globalFunction() {
    console.log(this); // In the browser, this will refer to the global object (window)
}
globalFunction();  // Outputs: Window { ... } in the browser

// Object method context
const person = {
    name: 'John',
    greet: function() {
        console.log('Object method context:');
        console.log(this.name); // `this` refers to the `person` object
    }
};
person.greet(); // Outputs: John

// Arrow function context (inherited `this`)
const arrowFunctionDemo = {
    name: 'Arrow Function Context',
    greet: function() {
        const innerArrowFunction = () => {
            console.log('Arrow function context:');
            console.log(this.name); // `this` is inherited from the surrounding `greet` function
        };
        innerArrowFunction();
    }
};
arrowFunctionDemo.greet(); // Outputs: Arrow Function Context

// Event listener context
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

button.addEventListener('click', function() {
    console.log('Event listener context:');
    console.log(this); // `this` refers to the button element that triggered the event
});

// Using bind to explicitly set `this`
const person2 = {
    name: 'Jane'
};

function sayHello() {
    console.log('Bind method context:');
    console.log(this.name); // Explicitly set `this` to `person2` using `bind`
}

const boundSayHello = sayHello.bind(person2);
boundSayHello(); // Outputs: Jane
