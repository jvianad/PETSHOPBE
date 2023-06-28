const mongoose = require("../DB/ConnectionDB");

const UsuarioEsquema = mongoose.Schema(
    {
        usuario:{
            type: String,
            required: true
            
        },
        clave:{
            type: String,
            required: true
        },
        rol:{
            type: String,
            required: true
        },
        nombre:{
            type: String,
            required: true
        },
        apellido:{
            type: String,
            required: true
        },
        tipoDoc:{
            type: String,
            required: true
        },
        numDoc:{
            type: String,
            required: true
        },
        direccion:{
            type: String,
            required: true
        },
        telefono:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        estado:{
            type: String,
            required: true
        },
    },{
        collection: "usuarios",
        versionKey: false
    }
);


module.exports = mongoose.model("usuarios", UsuarioEsquema);