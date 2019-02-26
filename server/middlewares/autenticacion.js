const jwt = require('jsonwebtoken')
//const SEED = require('../config/config').SEED;


let verificaToken = (req, res, next)=>{
    let token = req.get('token');
    jwt.verify(token,process.env.SEED, (err, decoded)=> {
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
    
};


let verificaRol = (req, res, next)=> {
    let usuario = req.usuario;

    if( usuario.role === 'ADMIN_ROLE'){
        next();
    }else {
        res.json({
            ok: false,
            err: {
                message: 'EL usuario no es administrador'
            }
        })
    }
} 

module.exports = {
    verificaToken,
    verificaRol
}