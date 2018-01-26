"use strict"

//requerimos la dependencia jwt-simple para crear el token

var token = require("jwt-simple");

//moment dependencia permite hacer registro de fecha de creación y expiración del token
var momento = require("moment");

//con esta clave secreta podemos descodificar el token
var claveSecreta = "clave_secreta";


//metodo token

exports.crearToken = function(usuario){
  //datos que se va a descodificar

  var cargarToken = {
    //guardar id del objeto
    sub: usuario._id,
    nombre: usuario.usuario,
    now: momento().unix(),
    exp: momento().add(30, "day").unix()
  }

  return token.encode(cargarToken, claveSecreta);
}
