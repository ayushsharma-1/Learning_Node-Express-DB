const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3500;

// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Retrieve folderName synchronously
        const folderName = req.body.folderName;
        const folderPath = path.join(__dirname, folderName);

        // Create the folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        cb(null, folderPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('image'), (req, res) => {
    const location = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    };

    const folderName = req.body.folderName;

    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    const filePath = path.join(__dirname, folderName, 'coordinates.txt');

    // Write coordinates to the file asynchronously
    fs.writeFile(filePath, `Latitude: ${location.latitude}, Longitude: ${location.longitude}`, (err) => {
        if (err) {
            console.error('Error writing coordinates to file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Image and Location submitted successfully.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
