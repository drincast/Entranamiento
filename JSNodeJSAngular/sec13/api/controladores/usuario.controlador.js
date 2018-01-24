"use strict"

//importamos dependencia para encriptar contraseñas
var bcrypt = require("bcrypt-nodejs");

//importamos el modelo de usuarios
var Usuario = require("../modelo/usuario.modelo.js");

//método de prueba
function pruebaUsuarios(req, res){
  res.status(200).send({mensaje:"Probando el controlador de usuarios"});
}



//método para crear usuarios
function crearUsuario(req, res){
  //se crea objeto del modelo
  var usuario = new Usuario();
  //parametros para que llegan de la petición POST
  var parametros = req.body;

  usuario.usuario = parametros.usuario;
  usuario.password = parametros.password;

  (usuario).save((error, usuarioGuardado) => {
    if(error){
      res.status(500).send({mensaje: "Error al guardar el usuario"});
    }
    else{
      res.status(200).send({usuarioGuardado});
    }
  })

}

//exportamos los métodos del módulo
module.exports = {
  pruebaUsuarios,
  crearUsuario
}
