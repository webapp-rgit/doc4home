const express = require('express');
const app = express();
const path = require('path');

app.get('/ambulance',function(req,res){
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/doctors',function(req,res){
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/api/home', (req, res) => {
    res.send('WELCOME TO DOC4HOME!');
});
app.get('/ambulance', (req, res) => {
    res.send('Ambulance');
});
app.get('/api/secret', (req, res) => {
    res.send('The password is potato');
});

module.exports = app;