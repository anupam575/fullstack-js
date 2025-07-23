class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

class Student extends Person {
  #rollNumber;
  #course;

  constructor(name, rollNumber, course) {
    super(name);
    this.#rollNumber = rollNumber;
    this.#course = course;
  }

  get rollNumber() {
    return this.#rollNumber;
  }

  set rollNumber(newRoll) {
    this.#rollNumber = newRoll;
  }

  get course() {
    return this.#course;
  }

  set course(newCourse) {
    this.#course = newCourse;
  }

  showDetails() {
    console.log(`Name: ${this.name}, Roll Number: ${this.#rollNumber}, Course: ${this.#course}`);
  }

  study() {
    console.log(`${this.name} is studying ${this.#course}`);
  }

  updateRollNumber(newRoll) {
    this.rollNumber = newRoll;
    console.log(`Roll number updated to ${this.rollNumber}`);
  }
}

// 🔸 Object Creation
const student1 = new Student("Rahul", 101, "Computer Science");
const student2 = new Student("Anjali", 55, "Mathematics");

// 🔸 Using methods
student1.showDetails();
student2.showDetails();
