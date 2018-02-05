"use strict"

//manejo de archivos, en el ejemplo se usa para eliminar la anterior imagen
var fs = require("fs");

var path = require("path");

var Slide = require("../modelo/slide.modelo.js");



//método de prueba
function pruebaSlide(req, res){
  res.status(200).send({mensaje:"Probando el controlador de slide"});
}

function crearSlide(req, res){
  //variable del modelo Slide
  let slide = new Slide();

  //obtenemos los parametros de la peticion
  let parametros = req.body;

  slide.titulo = parametros.titulo;
  slide.descripcion = parametros.descripcion;

  if(req.files){
    let imagenRuta = req.files.imagen.path;
    let imgSplit = undefined;

    console.log(imagenRuta);

    // if(imagenRuta.search("\\")){
    //   imgSplit = imagenRuta.split("\\");
    //   slide.imagen = imgSplit[2];
    //   console.log(imagenRuta, imgSplit);
    // }
    // else{
    //   imgSplit = imagenRuta.split("\/");
    //   console.log(imagenRuta, imgSplit);
    //   slide.imagen = imgSplit[3];
    // }

    imgSplit = imagenRuta.split("\/");
    console.log(imagenRuta, imgSplit);
    slide.imagen = imgSplit[imgSplit.length - 1];

    console.log(imagenRuta, imgSplit, slide.imagen, "final");
    //imgSplit = undefined;
    //puede pasar por el servidor openode que split no exista y retorne undefined
    if(imgSplit === undefined){
      imagenRuta = req.files.imagen.path;
      imgSplit = imagenRuta.substr(-28);
      slide.imagen = imgSplit;
      console.log(imagenRuta, imgSplit, slide.imagen, "imgSplit es undefined");
    }

    if(imgSplit === undefined){
      res.status(500).send({mensaje: "Error al guardar el slide, imgSplit"});
    }

    // slide.imagen = imgSplit[2];
    console.log(imagenRuta, imgSplit, slide.imagen, "final");

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

function actualizarSlide(req, res){
  //variable del modelo Slide
  var slideX = new Slide();

  //id que se manda por la url
  var id = req.params.id;

  //obtenemos los parametros de la peticion
  var parametros = req.body;

  slideX.titulo = parametros.titulo;
  slideX.descripcion = parametros.descripcion;
  //slideX._id = id;

  var cambioImagen = false;

  if(parametros.actualizarImagen == "0"){
    slideX.imagen = parametros.rutaImagenActual;
    cambioImagen = true;
  }
  else{
    if(req.files){
      var imagenRuta = req.files.imagen.path;
      var imgSplit = imagenRuta.split("\\");

      slideX.imagen = imgSplit[2];

      var antiguaImagen = parametros.rutaImagenActual;
      var rutaImagen = "./ficheros/slide/"+antiguaImagen;

      fs.unlink(rutaImagen, (error)=>{
        if(error){
          console.log("la imagen: " + rutaImagen + " ya no existe");
        }
      });
    }

    cambioImagen = true;
  }

  if(cambioImagen){
    if(slideX.titulo != null && slideX.descripcion != null && slideX.imagen != null){
      var actualizar = {
        "titulo": slideX.titulo,
        "descripcion": slideX.descripcion,
        "imagen": slideX.imagen
      }
      Slide.findByIdAndUpdate(id, actualizar, (error, slideActualizado) =>{
        if(error){
          res.status(500).send({mensaje: "Error al actualizar el slide"});
        }else{
          if(!slideActualizado){
            res.status(404).send({mensaje: "No se logro actualizar el slide"});
          }
          else{
            res.status(200).send({slideActualizado});
          }
        }
      });
    }
  }
}

function borrarSlide(req, res){
  var id = req.params.id;

  Slide.findOne({_id: id}, (error, capturarSlide)=>{
    if(error){
      res.status(500).send({mensaje: "Error al cargar el slide"});
    }
    else{
      if(!capturarSlide){
        res.status(404).send({mensaje: "No se logro cargar el slide"});
      }
      else{
        var imagen = capturarSlide.imagen;
        var rutaImagen = "./ficheros/slide/"+imagen;

        fs.unlink(rutaImagen, (error)=>{
          if(error){
            console.log("la imagen: " + rutaImagen + " ya no existe");
          }
        });
        //fs.unlink(rutaImagen);
      }
    }
  });

  setTimeout(()=>{
    Slide.findByIdAndRemove(id, (error, borrarSlide)=>{
      if(error){
        res.status(500).send({mensaje: "Error al eliminar el slide"});
      }
      else{
        if(!borrarSlide){
          res.status(404).send({mensaje: "No se logro eliminar el slide"});
        }
        else{
          res.status(200).send({borrarSlide});
        }
      }
    });
  }, 1000);
}

//ver imagen
function tomarImagenSlides(req, res){
  var imagen = req.params.imagen;
  var rutaImagen = "./ficheros/slide/"+imagen;

  //console.log(imagen, rutaImagen);

  fs.exists(rutaImagen, (exists)=>{
    console.log(rutaImagen);
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
  pruebaSlide,
  crearSlide,
  mostrarSlides,
  actualizarSlide,
  borrarSlide,
  tomarImagenSlides
}
