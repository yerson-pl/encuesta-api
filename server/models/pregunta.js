let mongoose = require('mongoose');

let Schema = mongoose.Schema

let tipoPregunta = {
    values: ['PREGUNTA SIMPLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}


let preguntaSchema = new Schema({
    titulo: {type: String, required: [true, 'El nombre de la pregunta es necesario']},
    descripcion: {type: String},
    encuesta: {type:Schema.Types.ObjectId,ref:'Encuesta', required: [true, 'El id de encuesta es requerido']},
    tipoPregunta: {type:String, default:'PREGUNTA SIMPLE', },
    role: { type: String, default: 'USER_ROLE', enum: tipoPregunta},

}); 
module.exports = mongoose.model('Pregunta', preguntaSchema);