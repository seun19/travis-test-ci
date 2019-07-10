// index.js

const express = require('express');

const app = express();

//let router = app.Router();

app.get('/', (req, res) => {
    res.send('ci with travis');
});

const server = app.listen(3000, () => {
    console.log(`App Running on port 3000`)
});

module.exports = server;