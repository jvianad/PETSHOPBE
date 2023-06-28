const express = require ("express");
const Usuario = require("../models/Usuario");//buscando el modelo
const usuariosCtrl = express.Router();


//OBTENER LISTA DE USUARIOS COMPLETA
// usuariosCtrl.get("/",(req,res)=>{
//     Usuario.find()
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((err) => {
//         res.json({message: err})
//     });
// });


//LISTAR USUARIOS CON ASYNC Y AWAIT
usuariosCtrl.get("/", async (req,res)=>{
    let usuarios = await Usuario.find();
    res.json(usuarios);
});



//VALIDAR CLAVE CON GET
usuariosCtrl.post("/login", async (req,res)=>{
    let usuario = req.body;
    usuario = await Usuario.findOne({
        usuario: usuario.usuario,
        clave: usuario.clave,
    });
    res.json(usuario);
});



//***GUARDAR USUARIO***//
// usuariosCtrl.post("/",(req,res) =>{
//     const usuario = new Usuario({
//         usuario:req.body.usuario,
//         clave: req.body.clave,
//         rol: req.body.rol,
//         nombre: req.body.nombre,
//         apellido: req.body.apellido,
//         tipoDoc: req.body.tipoDoc,
//         numDoc: req.body.numDoc,
//         direccion: req.body.direccion,
//         telefono: req.body.telefono,
//         email: req.body.email,
//         estado: req.body.estado,
//     });
//     usuario.save()
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((err) => {
//         res.json({message: err})
//     });
// });


//***GUARDAR USUARIO***//
//CODIGO MAS LIMPIO

usuariosCtrl.post("/", async (req,res)=>{
    let usuario = req.body;
    usuario = await Usuario.create(usuario);
    res.json(usuario);
});



//**ELIMINAR USUARIO**//
// usuariosCtrl.delete("/:id",(req,res)=>{
//     Usuario.deleteOne({_id:req.params.id})
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((err)=>{
//         res.json({message: err});
//     })
// });

//**ELIMINAR USUARIO**//

usuariosCtrl.delete("/:id", async (req,res)=>{
    await Usuario.deleteOne({_id:req.params.id})
    res.send("El registro con el id: "+req.params.id+" fue eliminado")
});


//EDITAR USUARIOS PATCH-PUT
/*
usuariosCtrl.patch("/",(req,res)=>{
    Usuario.updateOne(req.params._id, {
        $set:{
            usuario:req.body.usuario,
            clave: req.body.clave,
            rol: req.body.rol,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            tipoDoc: req.body.tipoDoc,
            numDoc: req.body.numDoc,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            email: req.body.email,
            estado: req.body.estado,
        }
    }).then((data) =>{
        res.json(data);
    })
    .catch((err) => {
        res.json({message:err})
    });
});
*/


//** EDITAR USUARIOS**//
usuariosCtrl.patch("/", async(req,res)=>{
    let usuario = req.body;
    usuario = await Usuario.findByIdAndUpdate({_id:usuario._id}, usuario);
    res.json(usuario)
});


module.exports = usuariosCtrl;

