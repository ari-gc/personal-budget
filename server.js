
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = require("./c01.json");

app.get('/hello', (req, res) => {
    res.send("Hello");
});

app.get('/budget', (req, res) => {
    res.json(budget)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});