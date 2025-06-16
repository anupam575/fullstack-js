class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  greet() {
    console.log(`Hello, my name is ${this.#name} and I am ${this.#age} years old.`);
  }
}

class Students extends Person {
  #rollNumber;
  #course;

  constructor(name, age, rollNumber, course) {
    super(name, age);
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

  // ✅ Method overriding
  greet() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, studying ${this.#course}.`);
  }

  details() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Roll Number: ${this.#rollNumber}, Course: ${this.#course}`);
  }

  study() {
    console.log(`${this.name} is studying ${this.#course}`);
  }
}

// ✅ Object Creation
const student1 = new Students("Anupam", 34, 73, "Science");
const student2 = new Students("Veer", 28, 88, "Chemistry");
const student3 = new Students("Tripathi", 30, 99, "Biology");

// ✅ Using methods
student1.details();
student2.details();
student3.details();

student1.greet(); // Overridden version
student1.study();
