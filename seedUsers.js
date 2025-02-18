// seedUsers.js
const { connectToDB, closeConnection } = require('./db/dbConnext');
const User = require('./models/User');

async function seedUsers() {
    try {
        await connectToDB();

        const sampleUsers = [
            { name: 'David', age: 28, email: "david@gmail.com" },
            { name: 'Eve', age: 22, email: "eve@gmail.com" },
            { name: 'Frank', age: 40, email: "frank@gmail.com" },
            { name: 'Grace', age: 27, email: "grace@gmail.com" },
            { name: 'Hannah', age: 33, email: "hannah@gmail.com" },
            { name: 'Isaac', age: 29, email: "isaac@gmail.com" },
            { name: 'Jack', age: 31, email: "jack@gmail.com" },
            { name: 'Kelly', age: 26, email: "kelly@gmail.com" },
            { name: 'Liam', age: 32, email: "liam@gmail.com" },
            { name: 'Mia', age: 24, email: "mia@gmail.com" },
            { name: 'Nathan', age: 36, email: "nathan@gmail.com" },
            { name: 'Olivia', age: 23, email: "olivia@gmail.com" },
            { name: 'Peter', age: 38, email: "peter@gmail.com" },
            { name: 'Quinn', age: 29, email: "quinn@gmail.com" },
            { name: 'Rachel', age: 34, email: "rachel@gmail.com" },
            { name: 'Sam', age: 37, email: "sam@gmail.com" },
            { name: 'Tina', age: 21, email: "tina@gmail.com" },
            { name: 'Uma', age: 30, email: "uma@gmail.com" },
            { name: 'Victor', age: 39, email: "victor@gmail.com" },
            { name: 'Wendy', age: 28, email: "wendy@gmail.com" },
            { name: 'Xavier', age: 26, email: "xavier@gmail.com" },
            { name: 'Yasmine', age: 27, email: "yasmine@gmail.com" },
            { name: 'Zack', age: 31, email: "zack@gmail.com" },
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