async function fetchData() {
  try {
    const response = await axios.get(url); // यहाँ JS रुकेगी, जब तक response नहीं आएगा
    console.log(response.data); // फिर ही यह चलेगा
  } catch (error) {
    console.error(error.message);
  }
}
