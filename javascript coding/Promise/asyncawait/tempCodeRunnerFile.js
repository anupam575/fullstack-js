async function getUserData(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await response.json();
  return data;
}

getUserData(1).then(user => console.log(user));
