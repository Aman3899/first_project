// index.js
const express = require('express');
const { connectToDB, closeConnection } = require('./db/dbConnext');
const User = require('./models/User');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectToDB();

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send(`Kindly visit -> http://localhost:${PORT}/users`);
});

// Fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});