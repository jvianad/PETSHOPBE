const express = require("express");
const Producto = require("../models/Producto");
const productosCtrl = express.Router();


//OBTENER TODOS LOS PRODUCTOS
productosCtrl.get("/", (req, res) => {
    Producto.find()
      .then((data) => {
        if (data.length) {
          return res.status(200).send(data);
        } else {
          return res.status(404).json({
            success: false,
            message: "No existen productos en la base de datos",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          error: err,
        });
    });
});



// OBTENER DETALLE DEL PRODUCTO POR SU ID
productosCtrl.get("/:id", (req, res) => {
    Producto.findById(req.params.id)
      .then((data) => {
        if (data) {
          return res.status(200).send(data);
        } else {
          return res.status(404).json({
            success: false,
            message: "El producto no existe en la base de datos",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          error: err,
        });
    });
});

//CREANDO PRODUCTO
productosCtrl.post("/", (req, res) => {
    let producto = new Producto({
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      unidadMedida: req.body.unidadMedida,
      valorCompra: req.body.valorCompra,
      valorVenta: req.body.valorVenta,
      cantidad: req.body.cantidad,
      categoria: req.body.categoria,
    });
  
    producto.save()
      .then(() => {
        res.status(201).json({
          success: true,
          message: "Producto creado exitosamente",
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false,
        });
    });
});

//ACTUALIZAR PRODUCTOS
productosCtrl.put("/:id",(req,res)=>{
    Producto.findByIdAndUpdate(req.params.id, {
        $set:{
            nombre: req.body.nombre,
            codigo: req.body.codigo,
            unidadMedida: req.body.unidadMedida,
            valorCompra: req.body.valorCompra,
            valorVenta: req.body.valorVenta,
            cantidad: req.body.cantidad,
            categoria: req.body.categoria,
        }
    }).then((data) =>{
        if(data){
            res.json({message: "El producto se actualizo"})
        }else{
            res.json({message: "El producto no se encontro"})
        }
    })
});


//EIMINAR PRODUCTO
productosCtrl.delete("/:id", (req, res) => {
    Producto.findByIdAndDelete(req.params.id)
      .then((data) => {
        if (data) {
          return res.status(200).json({
            success: true,
            message: "Producto eliminado exitosamente",
          });
        } else {
          return res.status(404).json({
            success: false,
            message: "Producto no encontrado",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          error: err,
        });
    });
});


module.exports = productosCtrl;


