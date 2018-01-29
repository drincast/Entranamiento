"use strict"

var fs = require("fs");

var path = require("path");

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

function borrarFoto(req, res){
  var id = req.params.id;

  Galeria.findOne({_id: id}, (error, capturarFoto)=>{
    if(error){
      res.status(500).send({mensaje: "Error al cargar la foto"});
    }
    else{
      if(!capturarFoto){
        res.status(404).send({mensaje: "No se logro cargar la foto"});
      }
      else{
        var imagen = capturarFoto.foto;
        var rutaImagen = "./ficheros/galeria/"+imagen;
        fs.unlink(rutaImagen, (error)=>{
          if(error){
            console.log("la imagen: " + rutaImagen + " ya no existe");
          }
        });
      }
    }
  });

  setTimeout(()=>{
    Galeria.findByIdAndRemove(id, (error, borrarFoto)=>{
      if(error){
        res.status(500).send({mensaje: "Error al eliminar la foto|"});
      }
      else{
        if(!borrarFoto){
          res.status(404).send({mensaje: "No se logro eliminar la foto"});
        }
        else{
          res.status(200).send({borrarFoto});
        }
      }
    });
  }, 1000);
}

function tomarImagenGaleria(req, res){
  var imagen = req.params.foto;
  var rutaImagen = "./ficheros/galeria/"+imagen;

  fs.exists(rutaImagen, (exists)=>{
    if(exists){
      res.sendFile(path.resolve(rutaImagen));
    }
    else{
      res.status(404).send({mensaje:"La imagen no existe"});
    }
  });
}

//exportamos los métodos del módulo
module.exports = {
  pruebaGaleria,
  crearFoto,
  mostrarGaleria,
  borrarFoto,
  tomarImagenGaleria
}
