"use strict"

var mongoose = require("mongoose");

//objetode tipo esquema, permite guardar en una colección concreta y en un documento concreto
var schema = mongoose.Schema;

//definición del esquema
var SlidesSchema = schema({
  imagen: String,
  titulo: String,
  descripcion: String
});

module.exports = mongoose.model("Slide", SlidesSchema);
