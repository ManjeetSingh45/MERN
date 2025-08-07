async function fetchUserData() {
  try {
    let response = await fetch("https://api.example.com/user");
    let data = await response.json();  // waits for JSON to be parsed
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}


// fetch("https://api.example.com/user")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));