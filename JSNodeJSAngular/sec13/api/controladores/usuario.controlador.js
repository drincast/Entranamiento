"use strict"

//importamos dependencia para encriptar contraseñas
var bcrypt = require("bcrypt-nodejs");

//importamos el modelo de usuarios
var Usuario = require("../modelo/usuario.modelo.js");

//importamos la funcionalidad token
var token = require("../token/token.js");

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

  if(parametros.password){
    bcrypt.hash(parametros.password, null, null, function(error, hash){
      usuario.password = hash;

      if(usuario.usuario != null){
        usuario.save((error, usuarioGuardado)=>{
          if(error){
            res.status(500).send({mensaje: "Error al guardar el usuario"});
          }
          else{
            res.status(200).send({usuarioGuardado});
          }
        });
      }
    });
  }
}

//Método para ingresar el usuarios
function ingresoUsuario(req, res){
  var parametros = req.body;
  var usuario = parametros.usuario;
  var password = parametros.password;

  Usuario.findOne({usuario:usuario}, (error, seleccionUsuario)=>{

    console.log(parametros);

    if(error){
      res.status(500).send({mensaje:"Error al ingresar el usuario"});
    }
    else{
      if(!usuario){
        res.status(404).send({mensaje:"El usuario no existe"});
      }
      else{
        bcrypt.compare(password, seleccionUsuario.password, function(error, ok){
          if(ok){
            //res.status(200).send({seleccionUsuario});

            //debemos enviar un parametro token en verdadero
            if(parametros.token){
              //devolvemos el token jwt
              res.status(200).send({token: token.crearToken(seleccionUsuario)});
            }
          }
          else{
            res.status(404).send({mensaje:"El usuario no ha logrado ingresar"});
          }
        })
      }
    }
  })
}

//exportamos los métodos del módulo
module.exports = {
  pruebaUsuarios,
  crearUsuario,
  ingresoUsuario
}
