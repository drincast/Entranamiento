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

    //console.log(parametros, password);

    if(error){
      res.status(500).send({mensaje:"Error al ingresar el usuario"});
    }
    else{
      if(!seleccionUsuario){
        res.status(404).send({mensaje:"El usuario no existe"});
      }
      else{
        if(seleccionUsuario !== null){
          bcrypt.compare(password, seleccionUsuario.password, function(error, ok){
            if(ok){
              //res.status(200).send({seleccionUsuario});

              //debemos enviar un parametro token en verdadero
              if(parametros.token){
                //devolvemos el token jwt
                res.status(200).send({token: token.crearToken(seleccionUsuario), seleccionUsuario});
              }
            }
            else{
              res.status(403).send({mensaje:"El usuario no ha logrado ingresar"});
            }
          });
        }
        else{
          res.status(403).send({mensaje:"login o password incorrectos ..."});
        }

      }
    }
  })
}

function actualizarUsuario(req, res){
  //id que se va actualizar
  var id = req.params.id;

  var actualizar = req.body;

  if(id != req.usuarioToken.sub){
    return res.status(500).send({mensaje: "No tienes permiso para actualizar el usario"});
  }
  else{
    //recorremos la base de datos findByIdAndUpdate
    Usuario.findByIdAndUpdate(id, actualizar, (error, usuarioActualizado)=>{
      if(error){
        return res.status(500).send({mensaje: "Error al actualizar el usario"});
      }
      else{
        if(!usuarioActualizado){
          return res.status(404).send({mensaje: "No se logro actualizar el usuario"});
        }
        else{
          return res.status(200).send({usuarioActualizado});
        }
      }
    });
  }
}

function  borrarUsuario(req, res){
  //id que se va actualizar
  var id = req.params.id;

  var actualizar = req.body;

  if(id != req.usuarioToken.sub){
    return res.status(500).send({mensaje: "No tienes permiso para eliminar el usario"});
  }
  else{
    //recorremos la base de datos findByIdAndRemove
    Usuario.findByIdAndRemove(id, (error, usuarioBorrado)=>{
      if(error){
        return res.status(500).send({mensaje: "Error al borrar el usario"});
      }
      else{
        if(!usuarioBorrado){
          return res.status(404).send({mensaje: "No se logro borrar el usuario"});
        }
        else{
          return res.status(200).send({usuarioBorrado});
        }
      }
    });
  }
}

//exportamos los métodos del módulo
module.exports = {
  pruebaUsuarios,
  crearUsuario,
  ingresoUsuario,
  actualizarUsuario,
  borrarUsuario
}
