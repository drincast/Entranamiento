"use strict"

var Slide = require("../modelo/slide.modelo.js")

//método de prueba
function pruebaSlide(req, res){
  res.status(200).send({mensaje:"Probando el controlador de slide"});
}

function crearSlide(req, res){
  //variable del modelo Slide
  var slide = new Slide();

  //obtenemos los parametros de la peticion
  var parametros = req.body;

  slide.titulo = parametros.titulo;
  slide.descripcion = parametros.descripcion;

  if(req.files){
    var imagenRuta = req.files.imagen.path;
    var imgSplit = imagenRuta.split("\\");

    slide.imagen = imgSplit[2];

    if(slide.titulo != null && slide.descripcion != null){
      slide.save((error, slideGuardado)=>{
        if(error){
          res.status(500).send({mensaje: "Error al guardar el slide"});
        }else{
          if(!slideGuardado){
            res.status(404).send({mensaje: "No se logro guardar el slide"});
          }
          else{
            res.status(200).send({slideGuardado});
          }
        }
      });
    }
  }
}

function mostrarSlides(req, res){
  Slide.find((error, mostrarSlides)=>{
    if(error){
      res.status(500).send({mensaje: "Error al cargar los slides"});
    }
    else{
      if(!mostrarSlides){
        res.status(404).send({mensaje: "Error desconocido al cargar los slides"});
      }
      else{
        res.status(200).send({mostrarSlides});
      }
    }
  }).sort("_id");
}

//exportamos los métodos del módulo
module.exports = {
  pruebaSlide,
  crearSlide,
  mostrarSlides
}
