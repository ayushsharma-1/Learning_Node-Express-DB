const express = require('express');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const geolib = require('geolib');
const fs = require('fs');

const app = express();
const port = 3000;

// Replace these variables with your own values
const projectId = 'marine-reports';
const keyFilename = './Ayush Dont Touch/marine-reports-32612c5bffe6.json';
const bucketName = 'your-bucket-name';

const storage = new Storage({ projectId, keyFilename });

// Configure Multer for handling file uploads
const storageConfig = multer.memoryStorage();
const upload = multer({ storage: storageConfig });

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Extract location coordinates (assumed to be in the request body)
    const { latitude, longitude } = req.body;
    const coordinates = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

    // Convert coordinates to a readable string
    const coordinatesString = `Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`;

    // Generate a unique filename for the image
    const filename = `image_${Date.now()}.jpg`;

    // Upload image to Google Cloud Storage
    const file = storage.bucket(bucketName).file(filename);
    await file.save(req.file.buffer);

    // Create a text file with location coordinates
    const txtFilename = `location_${Date.now()}.txt`;
    fs.writeFileSync(txtFilename, coordinatesString);

    // Upload text file to Google Cloud Storage
    const txtFile = storage.bucket(bucketName).file(txtFilename);
    await txtFile.save(fs.readFileSync(txtFilename));

    // Respond with success message
    res.status(200).json({ message: 'File uploaded successfully.' });
  } catch (err) {
    console.error('Error uploading file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
