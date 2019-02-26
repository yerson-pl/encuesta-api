require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser')
    // body parser para aplicacion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application json
app.use(bodyParser.json())

// Rutas de las app Config global

app.use(require('./routes/index'))

// Conexion a la base de datos
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Conexion DB exitosa')
})


// Servidor de express
app.listen(process.env.PORT, () => {
    console.log("Escuchando peticiones", 3000);
});