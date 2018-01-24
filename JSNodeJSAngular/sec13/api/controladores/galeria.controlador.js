"use strict"

//método de prueba
function pruebaGaleria(req, res){
  res.status(200).send({mensaje:"Probando el controlador de galeria"});
}

//exportamos los métodos del módulo
module.exports = {
  pruebaGaleria
}
