"use strict"

var Galeria = require("../modelo/galeria.modelo.js")

//método de prueba
function pruebaGaleria(req, res){
  res.status(200).send({mensaje:"Probando el controlador de galeria"});
}

function crearFoto(req, res){
  var galeria = new Galeria();

  if(req.files){
    var imagenRuta = req.files.foto.path;
    var imgSplit = imagenRuta.split("\\");

    galeria.foto = imgSplit[2];

    if(galeria.foto != null){
      galeria.save((error, fotoGuardada)=>{
        if(error){
          res.status(500).send({mensaje: "Error al guardar la imagen"});
        }else{
          if(!fotoGuardada){
            res.status(404).send({mensaje: "No se logro guardar la imagen"});
          }
          else{
            res.status(200).send({fotoGuardada});
          }
        }
      });
    }
  }
}

function mostrarGaleria(req, res){
  Galeria.find((error, mostrarGaleria)=>{
    if(error){
      res.status(500).send({mensaje: "Error al cargar la galeria"});
    }
    else{
      if(!mostrarGaleria){
        res.status(404).send({mensaje: "Error desconocido al cargar la galeria"});
      }
      else{
        res.status(200).send({mostrarGaleria});
      }
    }
  }).sort("_id");
}


//exportamos los métodos del módulo
module.exports = {
  pruebaGaleria,
  crearFoto,
  mostrarGaleria
}
