class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, course) {
    super(name); // Call parent constructor
    this.course = course;
  }

  // Overriding greet() method
  greet() {
    console.log(`Hi, I'm ${this.name} and I study ${this.course}`);
  }
}

// 🔸 Object creation
const person1 = new Person("Amit");
const student1 = new Student("Rohit", "Computer Science");

// 🔸 Method calls
person1.greet();   // ➤ Hello, my name is Amit
student1.greet();  // ➤ Hi, I'm Rohit and I study Computer Science
