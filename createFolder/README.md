# Image and Coordinates Uploader

## Description

This project allows users to upload images and fetch coordinates using the Google Maps API. The uploaded images are stored in a local database, and the coordinates are saved to a text file using Node.js, Express, Multer, Body Parser, and the fs module.

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:ayushsharma-1/Learning_Node-Express-DB.git
    ```

2. Navigate to the project directory:

    ```bash
    cd createFolder
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a .env file in the root directory and add your Google Maps API key:

    ```env
    GOOGLE_MAPS_API_KEY=your_api_key_here
    ```

5. Start the server:

    ```bash
    npm start
    ```

## Usage

Access the application in your web browser at http://localhost:3500 (adjust the port if necessary).

Fill in the required information on the web page:
- Enter a folder name.
- Choose an image to upload.
- Enter the location or use the Google Maps autocomplete to select a location.
- Click the "Upload Image and Submit Location" button.

The server will store the uploaded image and create a text file with coordinates in the specified folder.

## Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact:
- Ayush Sharma
- https://github.com/ayushsharma-1
