const axios = require('axios');


// Request interceptor


axios.interceptors.request.use(request => {
    // Modify the request or do something before sending it
    console.log('Starting Request', request);
    return request;
  }, error => {
    // Handle errors that occurred during request setup
    console.error('Request Error', error);
    return Promise.reject(error);
  });
  
  // Response interceptor
  axios.interceptors.response.use(response => {
    // Modify the response or do something with it
    console.log('Response:', response);
    return response;
  }, error => {
    // Handle errors that occurred during response
    console.error('Response Error', error);
    return Promise.reject(error);
  });
  