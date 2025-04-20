let startPromise = new Promise((resolve, reject) => {
  resolve(10); // Starting value
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
    // Intentional Error (undefined variable)
    return undefinedVariable + 1; // This will throw error
  })
  .then(result => {
    console.log("Step 4:", result); // This won't run
    return result - 3;
  })
  .then(result => {
    console.log("Step 5:", result); // This won't run either
    return result ** 2;
  })
  .catch(error => {
    console.log("❗ Error caught:", error.message);  // Error handle
    return 0;  // Returning default/fallback value
  })
  .then(result => {
    console.log("Final result after error handled:", result); // 0 (Fallback)
  });
