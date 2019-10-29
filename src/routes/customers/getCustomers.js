const express = require('express');
const app = express();

const Customer = require('../../models/customerUser');

app.get('/', async(req, res) => {
    const customer = await Customer.find();
    res.send(customer);
});

module.exports = app;