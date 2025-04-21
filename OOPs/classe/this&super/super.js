// Parent class
class Animal {
  constructor(name) {
      this.name = name;
  }

  speak() {
      console.log(`${this.name} makes a sound.`);
  }
}

// Subclass that extends the parent class
class Dog extends Animal {
  constructor(name, breed) {
      super(name); // Calling the parent class's constructor
      this.breed = breed;
  }

  speak() {
      super.speak(); // Calling the parent class's 'speak' method
      console.log(`${this.name} is a ${this.breed} and barks.`); // Include breed in the message
    }
}

// Creating an instance of the Dog class
const myDog = new Dog("Rex", "Golden Retriever");

myDog.speak();
// Output:
// Rex makes a sound.
// Rex barks.
