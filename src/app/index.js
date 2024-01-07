const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is Express');
});

module.exports = app;