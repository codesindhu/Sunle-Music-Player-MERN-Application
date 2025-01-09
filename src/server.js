const express = require('express');
const path = require('path');
const app = express();
const connectMongoDB = require('./db'); // Assuming db.js is in the same directory

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to add new user data
app.post('/signup', async (req, res) => {
    try {
        const db = await connectMongoDB();
        const collection = db.collection('user');
        const result = await collection.insertOne({
            username: req.body.username,
            password: req.body.password
        });
        res.status(201).json(result.ops[0]);
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
