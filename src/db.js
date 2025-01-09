const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Sunle:nVuLVO8eSZDasSkf@sunle.ycuuvzv.mongodb.net/'; // Replace with your MongoDB URI

let db;

async function connectMongoDB() {
    if (db) return db;

    const client = new MongoClient('mongodb+srv://Sunle:nVuLVO8eSZDasSkf@sunle.ycuuvzv.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db('test');
    console.log('Connected to MongoDB');
    return db;
}

module.exports = connectMongoDB;
