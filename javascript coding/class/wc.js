// Parent class
class Teacher {
  subject = "Math";

  teach() {
    console.log(`Teaching ${this.subject}`);
  }
}

// Child class
class SeniorTeacher extends Teacher {
  level = "Senior";

  showRole() {
    console.log(`Subject: ${this.subject}, Level: ${this.level}`);
  }
}

// Object creation
const teacher1 = new SeniorTeacher();
teacher1.teach();
teacher1.showRole();
