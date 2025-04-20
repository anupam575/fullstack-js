let meraPromise = new Promise((resolve, reject) => {
  console.log("Promise status: Pending...");

  let kaamHoGya = true;

  // Simulate delay of 2 seconds
  setTimeout(() => {
    if (kaamHoGya) {
      resolve("Success: Kaam ho gaya!");
    } else {
      reject("Error: Kaam fail ho gaya.");
    }
  }, 2000);
});

meraPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
