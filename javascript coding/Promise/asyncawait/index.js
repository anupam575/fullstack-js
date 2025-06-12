// Delay function: ek promise return karta hai jo ms milliseconds baad resolve hota hai
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function jo delay ke baad data return karta hai
async function fetchData(id) {
  await delay(1000); // 1 second wait
  return `Data for ID: ${id}`;
}

// Sequential calls: ek ke baad ek wait karta hai
async function sequentialExample() {
  console.log("Sequential calls started");
  
  const data1 = await fetchData(1);
  console.log(data1);

  const data2 = await fetchData(2);
  console.log(data2);

  const data3 = await fetchData(3);
  console.log(data3);

  console.log("Sequential calls ended\n");
}

// Parallel calls: ek saath start hote hain aur saath me wait karte hain
async function parallelExample() {
  console.log("Parallel calls started");

  const promises = [fetchData(1), fetchData(2), fetchData(3)];
  const results = await Promise.all(promises);
  
  results.forEach(result => console.log(result));
  console.log("Parallel calls ended\n");
}

// Main function: sequential aur parallel dono ko run karta hai
async function main() {
  await sequentialExample();
  await parallelExample();
}

main();
