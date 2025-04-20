let startPromise = new Promise((resolve, reject) => {
  resolve(2); // Starting value
});

startPromise
  .then(result => {
    console.log("Step 1:", result); // 2
    return result + 3;
  })
  .then(result => {
    console.log("Step 2:", result); // 5
    return result * 4;
  })
  .then(result => {
    console.log("Step 3:", result); // 20
    return result - 6;
  })
  .then(result => {
    console.log("Step 4:", result); // 14
    return result / 2;
  })
  .then(result => {
    console.log("Step 5:", result); // 7
    return result ** 2;
  })
  .then(result => {
    console.log("Step 6 (Final Result):", result); // 49
  })
  .catch(error => {
    console.log("Kahi error aa gaya:", error);
  });
