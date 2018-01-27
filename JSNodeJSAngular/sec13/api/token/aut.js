"use strict"

var token = require("jwt-simple");
var momento = require("moment");
var claveSecreta = "clave_secreta";

//método de la autenticación

//creamos un middelware

exports.autenticacion = function(req, res, next){
  //pasamos el token por una cabecera de autenticación
  if(!req.headers.authorization){
    return res.status(403).send({mensaje: "no tienen habilitado la cabecera de autenticación"})
  }
  else{
    //quitar comillar simples y dobles al token
    var tokenEnviado = req.headers.authorization.replace(/['"]+/g, '');

    try {
      var cargarToken = token.decode(tokenEnviado, claveSecreta);

      //comparar la fecha actual con la fecha expiración
      if(cargarToken.exp <= momento().unix()){
        return res.status(403).send({mensaje: "El token ha expirado"});
      }
    } catch (e) {
      console.log(e);
      return res.status(403).send({mensaje: "El token no es válido"});
    } finally {

    }

    //añadimos al objeto request una propiedad de usuario para tener disponible el token en cualquier
    //sesión

    req.usuarioToken = cargarToken;

    next();

  }
}
