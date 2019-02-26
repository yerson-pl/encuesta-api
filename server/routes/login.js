const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const SEED = require('../config/config').SEED;

const app = express();


const Usuario = require('../models/usuario')


app.post('/login', (req, res)=>{

    let body = req.body;

    Usuario.findOne({email: body.email}, (err, usuarioDB)=>{

        if(err){
            return res.status(500).json({
                ok: false,
                messaje: 'Error al buscar usuario',
                errors: err
            });
        }

        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                err: {
                    mensaje: 'Credenciales incorrectas - email',
                }
            });
        }

        if(!bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                err: {
                    mensaje: 'Credenciales incorrectas - password',
                }
            });
        }

            
        // Crear Token
        // usuarioDB.password = ':)'
        let token = jwt.sign({usuario: usuarioDB}, process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN}); 

        res.status(200).json({
            ok: true,
            usuario: usuarioDB,
            token
            //id: usuarioDB.id
        });

        });

})




module.exports = app;
