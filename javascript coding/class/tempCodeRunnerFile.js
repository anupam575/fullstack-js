// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
class Student extends Person {
  constructor(name, rollNumber) {
    super(name); // Call parent constructor
    this.rollNumber = rollNumber;
  }

  showDetails() {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}`);
  }
}

// Object creation
const student1 = new Student("Rahul", 101);
student1.greet();
student1.showDetails();
