// Class
class Student {
  constructor(name, roll, marks) {
    this.name = name;   // "Amit" is assigned to s1.name
    this.roll = roll;   // 101 is assigned to s1.roll
    this.marks = marks; // 87 is assigned to s1.marks
  }
}

// Creating new student (constructor will automatically run here)
const s1 = new Student("Amit", 101, 87);

// s1 ka details print karte hain
console.log(s1.name);   // Output: "Amit"
console.log(s1.roll);   // Output: 101
console.log(s1.marks);  // Output: 87
//Constructor ek tarah se class ko "setup" karta hai jab object banaya jata hai.

//Tumhare name, roll, aur marks ko this.name, this.roll, aur this.marks ke through object me store karta hai.