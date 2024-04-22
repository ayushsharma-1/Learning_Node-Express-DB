const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    Name: {
      first_name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: true
      }
    },
    Email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    countryCode: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true
    },
    Gender: {
      type: String,
      required: true
    } 
  });
  const details = mongoose.model("Register", employeeSchema);

module.exports = details;

