const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    dni: {type:String, required: true},
    nombre: {type:String, required: true},
    apellido: {type:String, required: true}
});

const PersonaModel = mongoose.model('personas', PersonaSchema);

module.exports = PersonaModel;