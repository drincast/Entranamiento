"use strict"

var express = require("express");

var md_aut = require("../token/aut.js");

var multipart = require("connect-multiparty");

//cargamos el modulo del controlador
var ControladorGaleria = require("../controladores/galeria.controlador.js");

//cargamos el router de express, para crear rutas para la api rest
var api = express.Router();

var fichero = multipart({
  //ruta donde se suben las imagenes
  uploadDir: "./ficheros/galeria",
})

//creamos la ruta con el método get, para pasar el méto que va a cargar los datos
//solicitados por el cliente
api.get("/probando-controlador-galeria", ControladorGaleria.pruebaGaleria);

api.get("/mostrar-galeria", ControladorGaleria.mostrarGaleria);

api.get("/tomar-imagen-galeria/:foto", ControladorGaleria.tomarImagenGaleria);

api.post("/crear-foto", [md_aut.autenticacion, fichero], ControladorGaleria.crearFoto);

//borrar foto
api.delete("/borrar-foto/:id", md_aut.autenticacion, ControladorGaleria.borrarFoto);

//exportamos el módulo
module.exports = api;
