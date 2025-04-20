async function fetchData() {
  try {
    let firstPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("First promise resolved!");
      }, 1000);
    });

    let secondPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second promise resolved!");
      }, 2000);
    });

    // Await se promises ko sequentially handle karte hain
    let firstResult = await firstPromise;  // Waits for first promise to resolve
    console.log(firstResult);  // "First promise resolved!"

    let secondResult = await secondPromise;  // Waits for second promise to resolve
    console.log(secondResult);  // "Second promise resolved!"
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

fetchData();
