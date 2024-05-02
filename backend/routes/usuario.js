const express = require('express');
const router = express.Router();

const mongodb = require('../db/mongodb');
const schema = mongodb.Schema;

const usuarioSchema = new schema({ 
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
});

const ModeloUsuario = mongodb.model('usuarios', usuarioSchema);
module.exports = router;

router.get('/ejemplo', (req, res) => {
    res.send('Hola desde usuario');
});

router.post('/agregarusuario', (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario
    });
    nuevousuario.save(function(err){
        if(err){
            res.send('Error al guardar usuario');
        }else{
            res.send('Usuario guardado');
        }
    });
});

//obtener usuarios
router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find({},(err,docs) => {
        if(err){
            res.send('Error al obtener usuarios');
        }else{
            res.send(docs);
        }
    })
});

