// Parent class
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

// Child class
class Student extends Person {
  #rollNumber;
  #course;

  constructor(name, rollNumber, course) {
    super(name);
    this.#rollNumber = rollNumber;
    this.#course = course;
  }

  showDetails() {
    console.log(`Name: ${this.#name}, Roll Number: ${this.#rollNumber}, Course: ${this.#course}`);
    // ❌ Error: #name is private to Person, not accessible here
  }

  study() {
    console.log(`${this.#name} is studying ${this.#course}`);
    // ❌ Error: #name is not available in this class
  }

  updateRollNumber(newRoll) {
    this.#rollNumber = newRoll;
    console.log(`Roll number updated to ${this.#rollNumber}`);
  }
}

// 🔸 Object Creation
const student1 = new Student("Rahul", 101, "Computer Science");
student1.showDetails();
student1.updateRollNumber(202);
student1.showDetails();
