class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  get details() {
      return `${this.name}, ${this.age} years old.`;
  }

  set details(value) {
      const [name, age] = value.split(',');
      this.name = name.trim();
      this.age = parseInt(age.trim());
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // Calling the parent constructor

      this.position = position;
  }

  get details() {
      return `${super.details}, Position: ${this.position}`;
  }

  set details(value) {
      super.details = value; // Calling the parent setter
  }
}

const emp = new Employee("Alice", 30, "Developer");

console.log(emp.details); // Outputs: Alice, 30 years old. Position: Developer

emp.details = "Bob, 25";
console.log(emp.details); // Outputs: Bob, 25 years old. Position: Developer
