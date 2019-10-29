const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const {Schema} = mongoose;
// VALIDACION DE ROLES
let rolesValidos = {
    values: ['PACIENTE', 'DOCTOR', 'ADMIN'],
    message: '{VALUE} no es un rol válido'
};
// ESQUEMA DEL USUARIO
const customerSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    identificacion: {type: Number},
    edad: {type: Number},
    fechaNacimiento: {type: String},
    role: {type: String, enum: rolesValidos},
    img: {type: String},
    genero: {type: String},
    correo: {type: String, unique: true, required: [true, 'El correo es necesario']},
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
    estado: {type: Boolean, default: true},
    google: {type: Boolean, default: false},
    facebook: {type: Boolean, default: false},
    alergico: {type: String},
    enfermedades: {type: String},
    eps: {type: String},
    tarjetaCredito: {type: String}
});

// ELIMINAR EL OBJETO DE LA CONTRASEÑA PARA QUE NO SE VEA
customerSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

// MENSAJE DE CORREO UNICO
customerSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser unico'});

module.exports = mongoose.model('Customer', customerSchema);