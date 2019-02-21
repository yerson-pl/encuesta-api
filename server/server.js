require ('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
// body parser para aplicacion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

//parse application json
app.use(bodyParser.json())

// Peticiones Usuario
app.get('/usuario', function(req, res){
    res.json('get Usuario');
});

app.post('/usuario', function(req, res){

    let body = req.body;

    res.json({
        body
    });
});

app.put('/usuario/:id', function(req, res){

    let id =req.params.id
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res){
    res.json('delete Usuario');
});

app.listen(process.env.PORT, ()=>{
    console.log("Escuchando peticiones", 3001);
});
