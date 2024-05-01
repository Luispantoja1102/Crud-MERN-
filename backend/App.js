const express = require('express');
const app = express();

//importar mongodb.js
const mongoose = require('./db/mongodb');


app.get('/', (req, res) => {
    res.end('Hello World');
});

//Configurar server basico
app.listen(5000, () => {
    console.log('Server started');
});