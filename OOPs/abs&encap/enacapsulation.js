class Student {
  #name; // private field
  #age;  // private field

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // Getter for name
  getName() {
    return this.#name;
  }

  // Setter for name
  setName(newName) {
    this.#name = newName;
  }

  // Getter for age
  getAge() {
    return this.#age;
  }

  // Setter for age
  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
}

// Object creation
const student1 = new Student("Rahul", 21);

// Accessing data using getter
console.log("Name:", student1.getName());
console.log("Age:", student1.getAge());

// Updating data using setter
student1.setName("Aman");
student1.setAge(25);

// Display updated data
console.log("Updated Name:", student1.getName());
console.log("Updated Age:", student1.getAge());
