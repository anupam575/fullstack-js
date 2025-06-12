let greenTick = "\u2705"; // ✅
let redCross = "\u274C";  // ❌

let meraPromise = new Promise(function(resolve, reject)  {
  let kaamHoGya = false; // true हो तो success, false हो तो error

  setTimeout(() => {
    if (kaamHoGya) {
      resolve("Kaam ho gaya! " + greenTick);
    } else {
      reject("Kaam nahi hua " + redCross);
    }
  }, 3000);  // Step 1 delay 3 seconds
});

meraPromise
  .then(function(successMessage) {
    console.log("Step 1 Success:", successMessage);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data ready for step 2");
      }, 2000);
    });
  })
  .then(function(data) {
    console.log("Step 2:", data);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Step 2 complete");
      }, 1500);
    });
  })
  .then(function(finalMessage) {
    console.log("Step 3:", finalMessage);
  })
  .catch((error) => {
    console.log("Error:", error);
    return "Error handle ho gaya";
  })
  .then((messageAfterCatch) => {
    if (messageAfterCatch === undefined) {
      messageAfterCatch = "Sab theek hai! " + greenTick;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Catch ke baad delay se message: " + messageAfterCatch);
      }, 2000);
    });
  })
  .then((finalMessage) => {
    console.log(finalMessage);
  });

console.log("Promise abhi pending hai...");
