// Async function declare karte hain
async function myAsyncFunction() {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds!");
    }, 2000);
  });

  // Await se promise ko handle karte hain
  let result = await myPromise;  // Ye line wait karegi jab tak promise resolve nahi hota
  console.log(result);  // "Promise resolved after 2 seconds!"
}

myAsyncFunction();  // Call the async function
