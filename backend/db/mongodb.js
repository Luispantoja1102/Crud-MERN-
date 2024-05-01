const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection;

objetobd.on('connected', () => {
    console.log('MongoDB connection established');
});
objetobd.on('error', (err) => {
    console.log('Error in MongoDB connection: ' + err);
});

module.exports = mongoose;