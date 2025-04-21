// Parent class
class Vehicle {
  start() {
      console.log("Vehicle चालू हो रहा है");
  }
}

// Child class
class Car extends Vehicle {
  start() {
      console.log("Car स्टार्ट हो रही है");
  }
}

// एक और Child class
class Bike extends Vehicle {
  start() {
      console.log("Bike स्टार्ट हो रही है");
  }
}

// Objects बनाना
let v = new Vehicle();
let c = new Car();
let b = new Bike();

// Method calls
v.start(); // Output: Vehicle चालू हो रहा है
c.start(); // Output: Car स्टार्ट हो रही है
b.start(); // Output: Bike स्टार्ट हो रही है
