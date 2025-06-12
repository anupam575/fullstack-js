function greet(city, country) {
  console.log(`hello ${this.name} from ${city}, ${country}`);
  
}
let person = {name: "anupam"}
greet.apply(person, ["delhi", "india"])