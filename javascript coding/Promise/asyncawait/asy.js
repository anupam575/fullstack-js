async function getUserDataWithErrorHandling(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Fetch failed:", error.message);
    // Yahan aap UI me error dikha sakte ho ya fallback logic laga sakte ho
  }
}

getUserDataWithErrorHandling(1);
