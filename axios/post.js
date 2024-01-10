const axios = require('axios');

const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  
  axios.post('https://jsonplaceholder.typicode.com/posts', data)
    .then(response => {
      // Handle the successful response
      console.log(response.data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error posting data:', error);
    });
  