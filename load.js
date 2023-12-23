const express = require('express');
const path = require('path');

const app = express();
const port = 5050;
const publicPath = path.join(__dirname, 'firsthtmlload');


app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.send('404 Error Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
