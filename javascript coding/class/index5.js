class Person  {
  #name;
  #age;

  constructor(name, age){
    this.#name = name
    this.#age = age
  }
  get name(){
    return this.#name
  }
  set name(newName){
    this.#name = newName
  }
  get age(){
    return this.#age
  }
  set age(newAge){
    this.#age= newAge

  }
  greet(){
    console.log(`hello my name is ${this.#name} age: ${this.#age}`);
    
  }


}
class Students extends Person{
  #rollNumber;
  #Course;
  constructor(name, age, rollNumber, Course){
    super(name,age)
    this.#rollNumber = rollNumber
    this.#Course = Course
  }
  get rollNumber(){
    return this.#rollNumber
  }
  set rollNumber(newRoll){
    this.#rollNumber = newRoll
  }
  get Course(){
    return this.#Course
  }
  set Course(newCourse){
    this.#Course = newCourse
  }
  details(){
    console.log(`hello my name is ${this.name}  age:${this.age} rollnumber:${this.#rollNumber} course:
      ${this.#Course}`);
    
  }
  study(){
    console.log(` name:${this.age} age:${this.age}` );
    
  }

}
const student1 = new Students("anupam", 34, 73, "scoeheh")
const student2 = new Students("veer", 34, 73, "scoehjjrdyeh")
const student3 = new Students("tripathi", 34, 73, "scoeeey6yeheh")
student1.details()
student2.details()
student3.details()
student1.greet()
student1.study()