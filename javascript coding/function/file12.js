function processUserInput(callback) {
  let name = "John";
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}`);
});
// Output: Hello, John
