let mongoose = require('mongoose');

let Schema = mongoose.Schema


let opcionPreguntaSchema = new Schema({
    pregunta: {type:Schema.Types.ObjectId,ref:'Pregunta', required: [true, 'la pregunta es necesaria']},
    valor: {type: String}
});

module.exports = mongoose.model('OpcionPregunta', opcionPreguntaSchema);
