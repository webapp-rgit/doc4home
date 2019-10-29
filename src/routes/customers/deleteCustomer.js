const express = require('express');
const app = express();

const Customer = require('../../models/customerUser');

app.delete('/:id', async(req, res) => {
    await Customer.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: "Customer Deleted"
    });
});

module.exports = app;