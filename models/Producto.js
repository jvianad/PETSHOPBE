const mongoose = require("../DB/ConnectionDB");

const ProductoEsquema = mongoose.Schema(
    { 
        nombre: {
            type: String,
            required: true,
        },
        codigo: {
            type: String,
            required: true,
        },
        unidadMedida: {
            type: String,
            required: true,
        },
        valorCompra:{
            type: String,
            required: true,
        },
        valorVenta: {
            type: String,
            required: true,
        },
        cantidad: {
            type: String,
            required: true,
        },
        categoria: {
            type: String,
            required: true,
        }
},{
        collection: "productos",
        versionKey: false
});

module.exports = mongoose.model("productos", ProductoEsquema);
