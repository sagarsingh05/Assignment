const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log("List of User Names:");
        response.data.forEach(user => console.log(user.name));
    })
    .catch(error => console.error("Error fetching data:", error));
