const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Handle the successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });
