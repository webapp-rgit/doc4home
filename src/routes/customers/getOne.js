const express = require('express');
const app = express();

const Customer = require('../../models/customerUser');

app.get('/:id', async (req, res) =>{
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
});

module.exports = app;