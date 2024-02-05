const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
        {
            title: 'Boba',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 600
        },
        {
            title: 'Grocery',
            budget: 150
        },
    ]
};

app.get('/hello', (req, res) => {
    res.send("Hello");
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});