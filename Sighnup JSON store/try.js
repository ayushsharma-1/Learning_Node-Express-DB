require('events').EventEmitter.defaultMaxListeners = 15;

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Use middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the 'public' directory
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/public/try.html`);
})
    // Define a route to handle form submissions
// Define a route to handle form submissions
app.post('/signup', (req, res) => {
    // Extract JSON data from the request body
    const userData = req.body;

    // Append data to a JSON file
    fs.appendFile('data.json', JSON.stringify(userData) +'\n', (err) => {
        if (err) throw err;
        console.log('Data appended to data.json');
    });

    // Send a response to the client
    res.send('Data received successfully');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
