const express = require('express');
const app = express();
const _ = require('underscore');
const Customer = require('../../models/customerUser');


app.put('/:id', async (req, res) => {
    // PARA PERMITIR CIERTOS CAMPOS
    // const body = _.pick(req.body, ['nombre', 'identificacion', 'edad']);
    const body = req.body;
    const id = req.params.id;
    // PARA NO ACTUALIZAR ESTOS CAMPOS
    delete body.correo;
    delete body.role;
    delete body.facebook;
    delete body.google;
    delete body.password;

    await Customer.findByIdAndUpdate(id, body, {new: true, runValidators: true, useFindAndModify: false}, (err, customerDb) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: "Customer updated",
            customer: customerDb 
        })
    });
});

module.exports = app;