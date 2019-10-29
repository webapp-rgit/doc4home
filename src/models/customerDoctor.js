const mongoose = require('mongoose');
const {Schema} = mongoose;

const doctorSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    identificacion: {type: Number},
    edad: {type: Number},
    fechaNacimiento: {type: String},
    role: {type: String},
    img: {type: String},
    genero: {type: String},
    correo: {type: String, required: [true, 'El correo es necesario']},
    telefono: {type: String, required: [true, 'El teléfono es necesario']},
    password: {type: String, required: [true, 'La contraseña es obligatoria']},
    pais: {type: String},
    departamento: {type: String},
    cuidad: {type: String},
    barrio: {type: String},
    direccion: {type: String},
    estadoCivil: {type: String},
    peso: {type: Number},
    altura: {type: Number},
    tipoSagre: {type: String},
    estado: {type: Boolean, default: false},
    google: {type: Boolean, default: false},
    facebook: {type: Boolean, default: false},
    diploma: {type: String},
    tarjetaProfesional: {type: String},
    laboraActualmente: {type: Boolean},
    curriculum: {type: String},
    tipo: {type: String},
    implementosHogar: {type: Boolean},
    vehiculo: {type: Boolean}
});

module.exports = mongoose.model('Customer', doctorSchema);