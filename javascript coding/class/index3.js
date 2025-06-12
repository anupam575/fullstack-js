// Parent class
class Person {
  constructor(name) {
    this.name = name; // public property
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
class Student extends Person {
  constructor(name, rollNumber, course) {
    super(name); // call parent constructor
    this.rollNumber = rollNumber; // public
    this.course = course;         // public
  }

  showDetails() {
    console.log(`Name: ${this.name}, Roll Number: ${this.rollNumber}, Course: ${this.course}`);
  }

  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }

  updateRollNumber(newRoll) {
    this.rollNumber = newRoll;
    console.log(`Roll number updated to ${this.rollNumber}`);
  }
}

// 🔸 Object creation
const student1 = new Student("Rahul", 101, "Computer Science");
const student2 = new Student("Anjali", 55, "Mathematics");

// 🔸 Using methods
student1.showDetails();
student2.showDetails();
student1.updateRollNumber(202);
student1.study();
