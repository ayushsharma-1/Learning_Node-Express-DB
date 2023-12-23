const express = require('express');
const path = require('path');

const app = express();
const port = 3300;

// Set up static middleware for the entire 'public' directory
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath, { index: 'form.html' }));

app.get('*', (_, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});