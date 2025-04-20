let startPromise = new Promise((resolve, reject) => {
  resolve(10);
});

startPromise
  .then(result => {
    console.log("Step 1:", result); // 10
    return result + 5;
  })
  .then(result => {
    console.log("Step 2:", result); // 15
    return result * 2;
  })
  .then(result => {
    console.log("Step 3:", result); // 30
    // Deliberately adding error
    return undefinedVariable + 1; // ❌ yeh variable exist nahi karta
  })
  .then(result => {
    console.log("Step 4:", result); // This won't run
    return result - 3;
  })
  .then(result => {
    console.log("Step 5 (Final):", result);
  });
