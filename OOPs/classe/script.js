// 📁 Car Factory - Single File Setup

// 👷 Car class: blueprint for car objects
class Car {
  constructor(brand, model, color, price) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  // 🚀 Start the car
  start() {
    console.log(`${this.brand} ${this.model} in ${this.color} color is starting...`);
  }

  // 📋 Show car details
  displayInfo() {
    console.log(`🚗 Brand: ${this.brand}`);
    console.log(`📦 Model: ${this.model}`);
    console.log(`🎨 Color: ${this.color}`);
    console.log(`💰 Price: ₹${this.price}`);
    console.log("---------------------------");
  }
}

// 🚗 Create car objects
const car1 = new Car("Tata", "Nexon", "Black", 850000);
const car2 = new Car("Hyundai", "Creta", "White", 1100000);
const car3 = new Car("Maruti", "Swift", "Red", 700000);

// ⚙️ Call methods
car1.start();
car1.displayInfo();

car2.start();
car2.displayInfo();

car3.start();
car3.displayInfo();
