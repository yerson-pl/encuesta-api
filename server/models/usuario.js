const moongose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}



let Schema = moongose.Schema

let usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'EL nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El email es necesario'] },
    password: { type: String, required: [true, 'La constraseña es obligatoria'] },
    img: { type: String, required: false },
    role: { type: String, default: 'USER_ROLE', enum: rolesValidos },
    estado: { type: Boolean, default: true },
    google: { type: Boolean, default: false }
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject()
    delete userObject.password

    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });


const Usuario = moongose.model('Usuario', usuarioSchema)
module.exports = Usuario