let mongoose = require('mongoose');


let Schema = mongoose.Schema;


let encuestaSchema = new Schema({
    titulo: {type: String, required: [true, 'el titulo es necesario']},
    descripcion: {type: String},
    usuario: {type:Schema.Types.ObjectId,ref:'Usuario'}
})

module.exports = mongoose.model('Encuesta', encuestaSchema);