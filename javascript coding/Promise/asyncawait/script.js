// Delay function that returns a Promise resolved after ms milliseconds
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function example using await and delay
async function example() {
  console.log("Start");

  await delay(2000); // 2 second delay

  console.log("2 seconds later");

  await delay(1000); // 1 second delay

  console.log("1 second later");
}

example();
