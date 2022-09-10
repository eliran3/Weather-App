const express = require('express');
const mongodb = require('mongodb');
const uuid = require('uuid');

const router = express.Router();

// Connect to db
async function ConnectMongo() {
    const client = await mongodb.MongoClient.connect(
    'mongodb+srv://Eliran:eliran2109@dbusers.dpfd97v.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true });
    
    return client.db('Users_db').collection('Users_col');
}

// Get users
function GetUsers() {
    router.get('/', async (req, res) => {
        const users = await ConnectMongo();
        res.send(await users.find({}).toArray());
        res.end();
    });
}

// Add user
/**
 * @param {string} username - The username
 * @param {string} password - The password
 */
async function AddUser(username, password) {
    router.post('/', async (req, res) => {
        const users = await ConnectMongo();

        users.find({
            "username": username,
            "password": password
        }).toArray((err, result) => {
            if (err)
                throw err;
            if (!result.length) {
                users.insertOne({
                    "id": uuid.v4(),
                    "username": username,
                    "password": password
                });
            }
        })
        res.status(201).send({});
    })
}

//AddUser();

GetUsers();

module.exports = router;
