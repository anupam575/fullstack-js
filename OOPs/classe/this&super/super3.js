// Parent class
class Vehicle {
  constructor(brand) {
      this.brand = brand;
  }

  startEngine() {
      console.log(`${this.brand} engine started.`);
  }

  stopEngine() {
      console.log(`${this.brand} engine stopped.`);
  }
}

// Child class
class Car extends Vehicle {
  constructor(brand, model) {
      super(brand); // Call the constructor of Vehicle
      this.model = model;
  }

  startEngine() {
      super.startEngine(); // Call startEngine() from Vehicle
      console.log(`${this.model} is ready to drive.`);
  }

  stopEngine() {
      super.stopEngine(); // Call stopEngine() from Vehicle
      console.log(`${this.model} is turned off.`);
  }
}

// Using the classes
const myCar = new Car("Toyota", "Corolla");

myCar.startEngine();
// Output:
// Toyota engine started.
// Corolla is ready to drive.

myCar.stopEngine();
// Output:
// Toyota engine stopped.
// Corolla is turned off.
