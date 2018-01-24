"use strict"

var mongoose = require("mongoose");

//objetode tipo esquema, permite guardar en una colección concreta y en un documento concreto
var schema = mongoose.Schema;

//definición del esquema
var UsuariosSchema = schema({
  usuario: String,
  password: String
});

module.exports = mongoose.model("Usuario", UsuariosSchema);
