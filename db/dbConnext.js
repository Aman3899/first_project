// dbConnect.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://my_mongo_container:27017";
const DB_NAME = process.env.DB_NAME || "my_database";

async function connectToDB() {
    try {
        await mongoose.connect(`${MONGO_URI}/${DB_NAME}`);
        console.log('🚀 Connected to MongoDB using Mongoose');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

async function closeConnection() {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed');
    } catch (err) {
        console.error('Error closing MongoDB connection:', err);
        throw err;
    }
}

module.exports = { connectToDB, closeConnection };