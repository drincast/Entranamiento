"use strict"

var express = require("express");

//cargamos el modulo del controlador
var ControladorSlide = require("../controladores/slide.controlador.js");

//cargamos el router de express, para crear rutas para la api rest
var api = express.Router();

//creamos la ruta con el método get, para pasar el méto que va a cargar los datos
//solicitados por el cliente
api.get("/probando-controlador-slide", ControladorSlide.pruebaSlide);

//exportamos el módulo
module.exports = api;