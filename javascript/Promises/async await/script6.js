async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed to fetch data!");  // Promise is rejected
    }, 2000);
  });
}

async function main() {
  try {
    console.log("Fetching data...");
    const data = await fetchData();  // This will throw an error
    console.log(data);
  } catch (error) {
    console.log(error);  // Will log "Failed to fetch data!" after 2 seconds
  }
}

main();
