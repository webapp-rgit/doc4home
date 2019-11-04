const express = require('express');
const app = express();

// LOGIN
app.use('/', require('./login/login'));

// PACIENTES
// Guardar paciente
app.use('/customers', require('./customers/saveCustomer'));
// Obtener un solo paciente
app.use('/customers', require('./customers/getOne'));
// Actualizar datos basicos del paciente
app.use('/customers', require('./customers/updateCustomer'));
// Eliminar cliente
app.use('/customers', require('./customers/deleteCustomer'));
// Listar clientes
app.use('/customers', require('./customers/getCustomers'));

module.exports = app;