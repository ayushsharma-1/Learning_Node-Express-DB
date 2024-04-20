// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Main Server is running!');
});

app.listen(port, () => {
    console.log(`Main Server is running at http://localhost:${port}`);
});

// Trigger OTP Server
const { spawn } = require('child_process');
const otpServer = spawn('node', ['otp.js']);

otpServer.stdout.on('data', (data) => {
    console.log(`OTP Server: ${data}`);
});

otpServer.stderr.on('data', (data) => {
    console.error(`Error in OTP Server: ${data}`);
});

otpServer.on('close', (code) => {
    console.log(`OTP Server exited with code ${code}`);
});
