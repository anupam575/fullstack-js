async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();  // JSON format mein response convert karo
    console.log(data);  // Fetched data ko console pe print karo
  } catch (error) {
    console.error('Error:', error);  // Agar koi error aaye toh handle karo
  }
}

fetchData();  // Function ko call karo
