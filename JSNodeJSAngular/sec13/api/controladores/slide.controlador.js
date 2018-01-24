"use strict"

//método de prueba
function pruebaSlide(req, res){
  res.status(200).send({mensaje:"Probando el controlador de slide"});
}

//exportamos los métodos del módulo
module.exports = {
  pruebaSlide
}
