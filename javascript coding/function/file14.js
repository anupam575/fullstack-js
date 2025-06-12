const obj = {
  name: "Alice",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  }
};
obj.greet();
// Output (after 1 sec): Hello, Alice
