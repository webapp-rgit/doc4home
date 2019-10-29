const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

const Customer = require('../../models/customerUser');


app.post('/', async(req, res) =>{
    const body = req.body;
    const customer = new Customer({
        nombre: body.nombre,
        correo: body.correo,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
        telefono: body.telefono
    });
    await customer.save((err, customerDb) =>{
        if(err){
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            message: "Customer Saved",
            usuario: customerDb
        })
    });
});


module.exports = app;