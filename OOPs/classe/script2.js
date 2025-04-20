// 🎓 Student class
class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }

  // 📊 Grade nikalne ka method
  calculateGrade() {
    if (this.marks >= 90) return "A+";
    else if (this.marks >= 80) return "A";
    else if (this.marks >= 70) return "B";
    else if (this.marks >= 60) return "C";
    else if (this.marks >= 50) return "D";
    else return "F";
  }

  // 👤 Student details print karne ka method
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Roll No: ${this.roll}`);
    console.log(`Marks: ${this.marks}`);
    console.log(`Grade: ${this.calculateGrade()}`);
    console.log("-----------------------------");
  }
}

// 🧑‍🎓 Students create karte hain
const s1 = new Student("Amit", 101, 87);
const s2 = new Student("Neha", 102, 73);
const s3 = new Student("Ravi", 103, 45);
const s4 = new Student("Amit", 101, 87);
const s5 = new Student("Neha", 102, 73);
const s6 = new Student("Ravi", 103, 45);


// 📋 Info display karte hain
s1.displayInfo();
s2.displayInfo();
s3.displayInfo();
s4.displayInfo();
s5.displayInfo();
s6.displayInfo();
