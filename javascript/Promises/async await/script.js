// Simulating an API call with a Promise
function fetchDataFromAPI(apiUrl) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apiUrl === "https://api.example.com/data") {
        resolve("Data fetched from API successfully!");
      } else {
        reject("API not found!");
      }
    }, 2000);
  });
}

// Simulating processing data
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(`Processed data: ${data}`);
      } else {
        reject("No data to process!");
      }
    }, 1500);
  });
}

// Simulating saving data to a database
function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve("Data saved to database!");
      } else {
        reject("Failed to save data!");
      }
    }, 1000);
  });
}

// Async function to handle multiple operations
async function handleMultipleAsyncTasks() {
  try {
    console.log("Step 1: Fetching data from API...");
    let apiUrl = "https://api.example.com/data";
    let data = await fetchDataFromAPI(apiUrl); // Fetching data
    console.log(data);  // Data fetched from API

    console.log("\nStep 2: Processing data...");
    let processedData = await processData(data);  // Processing data
    console.log(processedData);  // Processed data

    console.log("\nStep 3: Saving data to database...");
    let savedMessage = await saveDataToDatabase(processedData);  // Saving data
    console.log(savedMessage);  // Data saved to database

    console.log("\nAll steps completed successfully!");
  } catch (error) {
    console.log("❗ Error:", error);  // Handling errors if any occur during the process
  }
}

// Calling the async function to execute tasks sequentially
handleMultipleAsyncTasks();
/*
function fetchDataFromAPI(apiUrl) {...}

Ye function ek Promise return karta hai, jo API call ko simulate karta hai.

return new Promise((resolve, reject) => {...}

Yahan pe ek Promise banaya gaya hai jo resolve ya reject hota hai API response ke base pe.

setTimeout(() => {...}, 2000);

2 second ke baad, promise resolve ya reject hota hai, jo API response time ko simulate karta hai.

function processData(data) {...}

Ye function data ko process karne ka kaam karta hai aur ek Promise return karta hai.

setTimeout(() => {...}, 1500);

1.5 seconds baad, processData ka promise resolve ya reject hota hai.

function saveDataToDatabase(data) {...}

Ye function database me data save karne ka kaam karta hai aur promise return karta hai.

setTimeout(() => {...}, 1000);

1 second baad, data database me save ho jata hai.

async function handleMultipleAsyncTasks() {...}

async function declare kiya gaya hai, jisme hum asynchronous tasks ko sequentially handle karenge.

let data = await fetchDataFromAPI(apiUrl);

await ka matlab hai ki ye line program ko block kar degi jab tak fetchDataFromAPI promise resolve nahi ho jata.

let processedData = await processData(data);

Jab data fetch ho jata hai, tab await se data ko process karne ke liye next step par jate hain.

let savedMessage = await saveDataToDatabase(processedData);

Phir processed data ko await se save karte hain database me.

catch (error) {...}

Agar kisi bhi step me error aata hai, to catch block usko handle karta hai aur error ko console me print karta hai.

handleMultipleAsyncTasks();

handleMultipleAsyncTasks() function ko call kiya gaya hai jo sequentially promises ko handle karega.

*/