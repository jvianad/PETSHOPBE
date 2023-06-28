const mongoose = require("../DB/ConnectionDB");

const ProveedorEsquema = mongoose.Schema(
    {
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
        }
    },{
        collection: "proveedores",
        versionKey: false
    }
);


module.exports = mongoose.model("proveedores", ProveedorEsquema);