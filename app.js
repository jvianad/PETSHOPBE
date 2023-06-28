const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const ctrlUsuarios = require("./Controller/usuariosCtrl");//buscando el controlador de usuarios
const ctrlProveedores = require("./Controller/proveedoresCtrl");//buscando controller de proveedores
const ctrlProductos = require("./Controller/productosCtrl") //buscando controlador de productos


app.use(cors());
app.use(bodyParser.json());


///*********USUARIOS*********///
app.use("/usuarios", ctrlUsuarios);


///*********PROVEEDORES*********///
app.use("/proveedores", ctrlProveedores);


///*********PRODUCTOS*********///
app.use("/productos", ctrlProductos);


///*********PUERTO**********/
const PUERTO = process.env.PORT || 5000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});