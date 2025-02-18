// seedUsers.js
const { connectToDB, closeConnection } = require('./db/dbConnext');
const User = require('./models/User');

async function seedUsers() {
    try {
        await connectToDB();

        const sampleUsers = [
            { name: 'Alice', age: 25, email: "alice@gmail.com" },
            { name: 'Bob', age: 30, email: "bob@gmail.com" },
            { name: 'Charlie', age: 35, email: "chalie@gmail.com" },
        ];

        const result = await User.insertMany(sampleUsers);
        console.log(`${result.length} users inserted`);
    } catch (err) {
        console.error('Error inserting users:', err);
    } finally {
        await closeConnection();
    }
}

seedUsers();