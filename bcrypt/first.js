const bcrypt = require('bcrypt');

const plainPassword = 'user123';

// Hash the password
bcrypt.hash(plainPassword, 10, (err, hash) => {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }

    // Store the hashed password in the database
    const storedHashedPassword = hash; // Use this value when storing in the database
    console.log('Hashed Password:', storedHashedPassword);
});


const enteredPassword = 'user123'; // This is what the user entered during login
const storedHashedPassword = '...'; // Retrieve the hashed password from the database

bcrypt.compare(enteredPassword, storedHashedPassword, (err, result) => {
    if (err) {
        console.error('Error comparing passwords:', err);
        return;
    }

    if (result) {
        console.log('Passwords match! User authenticated.');
    } else {
        console.log('Passwords do not match. Authentication failed.');
    }
});
