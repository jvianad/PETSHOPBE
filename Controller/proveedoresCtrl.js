const express = require("express");
const Proveedor = require("../models/Proveedor");
const proveedoresCtrl = express.Router();



//GET - LISTAR TODOS LOS PROVEEDORES
proveedoresCtrl.get("/",(req,res)=>{
    Proveedor.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message:err})
    });
});



//POST - CREAR PROVEEDORES
proveedoresCtrl.post("/",(req,res)=>{
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        tipoDoc: req.body.tipoDoc,
        numDoc: req.body.numDoc,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email
    });

    proveedor.save()
    .then((data)=>{
        res.json(data)
    })
    .catch((err)=>{
        res.json({message: err})
    });

});


//DELETE - ELIMINAR PROVEEDORES
proveedoresCtrl.delete("/:id",(req,res)=>{
    Proveedor.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(data){
            return res.status(200).json({success:true, mensaje:"El proveedor ha sido eliminado correctamente"})
        }else{
            return res.status(404).json({success:false, mensaje:"El proveedor no ha sido eliminado"})
        }
    })
    .catch((err)=>{
        res.status(500).json({message: err});
    })
});


//PUT - EDITAR PROVEEDORES
proveedoresCtrl.put("/:id",(req,res)=>{
    Proveedor.findByIdAndUpdate(req.params.id, {
        $set:{
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            tipoDoc: req.body.tipoDoc,
            numDoc: req.body.numDoc,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
        }
    }).then((data) =>{
        if(data){
            res.json({message: "El usuario se actualizo"})
        }else{
            res.json({message: "El usuario no se encontro"})
        }
    })
});


module.exports = proveedoresCtrl;