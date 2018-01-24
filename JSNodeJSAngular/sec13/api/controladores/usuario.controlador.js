"use strict"

//método de prueba
function pruebaUsuarios(req, res){
  res.status(200).send({mensaje:"Probando el controlador de usuarios"});
}

//exportamos los métodos del módulo
module.exports = {
  pruebaUsuarios
}
