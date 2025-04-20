async function fetchData() {
  // First Promise (Success)
  let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise resolved!");
    }, 1000);
  });

  // Second Promise (Error: Will reject)
  let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Second promise rejected!");  // This will cause the error
    }, 2000);
  });

  // Await for the first promise to resolve
  let firstResult = await firstPromise;  // Waits for first promise to resolve
  console.log(firstResult);  // "First promise resolved!"

  // Await for the second promise to resolve (but it will reject)
  let secondResult = await secondPromise;  // Will fail here
  console.log(secondResult);  // This will not be executed
}

fetchData();
