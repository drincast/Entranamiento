"use strict"

var express = require("express");

//cargamos el modulo del controlador
var ControladorUsuario = require("../controladores/usuario.controlador.js");

//cargamos el router de express, para crear rutas para la api rest
var api = express.Router();

//middelware
var md_aut = require("../token/aut.js");

//creamos la ruta con el método get, para pasar el méto que va a cargar los datos
//solicitados por el cliente
api.get("/probando-controlador-usuario", md_aut.autenticacion, ControladorUsuario.pruebaUsuarios);

//crear ruta para crear usuarios y utilizamos el método position
api.post("/crear-usuario", ControladorUsuario.crearUsuario);

//ruta para el ingreso del usuario
api.post("/login", ControladorUsuario.ingresoUsuario);

//put es para actualizar información en la base de datos
api.put("/actualizar-usuario/:id", md_aut.autenticacion, ControladorUsuario.actualizarUsuario);

//ruta para borrar usuarios
api.delete("/borrar-usuario/:id", md_aut.autenticacion, ControladorUsuario.borrarUsuario);

//exportamos el módulo
module.exports = api;
