let mongoose = require('mongoose');

let Schema = mongoose.Schema;


let resultadoSchema = new Schema({
    pregunta: {type:Schema.Types.ObjectId,ref:'Pregunta', required:[true, 'Es necesario la pregunta']},
    valor: {type:String}
})

module.exports = mongoose.model('Resultado', resultadoSchema)