// Imports
require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
const connectDB = require('./db/conn');
connectDB();

// Model
const register = require('./models/details');

// View Engine Setup
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);
app.set("view engine","hbs");
app.set("views",template_path);

// Routes
app.get("/", (req, res) => {
    res.render("index.hbs");
});

app.get("/register.hbs", (req, res) => {
    res.render("register.hbs");
});

app.get('/css/front.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../css', 'front.css'));
});

app.get('/js/front.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../js', 'front.js'));
});

app.post("/register", async (req, res) => {
    try {
        const registerEmployee = new register({
            Name: {
                first_name: req.body.first_name,
                last_name: req.body.last_name
            },
            Email: req.body.email,
            password: req.body.password,
            countryCode: req.body.countryCode,
            phoneNumber: req.body.phoneNumber,
            Gender: req.body.gender
        });

        const registered = await registerEmployee.save();
        return res.status(201).render("index.hbs");
    } 
    catch (error) {
        console.log(error);
        let errorMessage = "Registration failed. Please check the form for errors.";
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            errorMessage = errorMessages.join('<br>');
        }
        res.status(400).render("register.hbs", { error: errorMessage });
    }

});

// Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
