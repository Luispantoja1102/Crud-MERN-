const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({origin: '*'}));

//importar mongodb.js
const mongoose = require('./db/mongodb');

//importacion de modelo de usuario y rutas
const rutasUsuario = require('./routes/usuario');

//importar bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/usuario', rutasUsuario)


app.get('/', (req, res) => {
    res.end('Hello World');
});

//Configurar server basico
app.listen(5000, () => {
    console.log('Server started');
});