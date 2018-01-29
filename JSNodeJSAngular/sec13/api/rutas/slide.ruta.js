"use strict"

var express = require("express");

var md_aut = require("../token/aut.js");

//dependencia para subir archivos
var multipart = require("connect-multiparty");

//cargamos el modulo del controlador
var ControladorSlide = require("../controladores/slide.controlador.js");

//cargamos el router de express, para crear rutas para la api rest
var api = express.Router();

var fichero = multipart({
  //ruta donde se suben las imagenes
  uploadDir: "./ficheros/slide",
});

//creamos la ruta con el método get, para pasar el méto que va a cargar los datos
//solicitados por el cliente
api.get("/probando-controlador-slide", ControladorSlide.pruebaSlide);

//metodo para mostrar los slides
api.get("/mostrar-slides", ControladorSlide.mostrarSlides);

//ruta para subir slide, usando token de autenticación, y la ruta dode se suben las imagenes
api.post("/crear-slide", [md_aut.autenticacion, fichero], ControladorSlide.crearSlide);

//modificar un slide
api.put("/actualizar-slide/:id", [md_aut.autenticacion, fichero], ControladorSlide.actualizarSlide);

//borrar slides
api.delete("/borrar-slide/:id", md_aut.autenticacion, ControladorSlide.borrarSlide);

//exportamos el módulo
module.exports = api;
