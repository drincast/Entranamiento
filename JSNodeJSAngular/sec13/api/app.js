"use strict"

var express = require("express");
//dependencia para convertir a objetos json los datos de las peticiones http que llegan
var bodyParser = require("body-parser");

//la var app es el objeto de express
//motor de la aplicación de la aplicación del backend, recibira las peticiones http
//para crear controladores y rutas
var app = express();



//convertir en json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cargar Rutas
var rutaUsuario = require("./rutas/usuario.ruta.js");
var rutaSlide = require("./rutas/slide.ruta.js");
var rutaGaleria = require("./rutas/galeria.ruta.js");

// Rutas base
//parametros primero la ruta, segundo funcion con parametros de solicitus y respuesta
// app.get("/pruebas", function(req, res){
  //Estados de respuesta
  // 200 ok
  // 404 perición no encontrada
  // 500 error del servidor
  // res.status(200).send({message: "Bienvenido"});
// });

app.use("/api", rutaUsuario);
app.use("/api", rutaSlide);
app.use("/api", rutaGaleria);

//la acción

//la accion module.exports para que el modulo pueda ser usado en otros archivos
module.exports = app;
