const mongoose = require('mongoose');

const cursosSchema = new mongoose.Schema({
    Id: {type : Number},
    curso: {type : String},
    cargaHoraria: {type : Number},
    area: {type : String},
    turno: {type : String},
    bootcamps: {type : String},
    cursosPagos: {type : String},
    cursosGratuitos: {type : String},
    done: {type : Boolean}
},{
    versionKey: false
});

const cursos = mongoose.model('cursos', cursosSchema);

module.exports = cursos;