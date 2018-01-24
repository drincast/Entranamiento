//javascript estricto, sirve tambien para usar los nuevos estandares de javascript
"use strict"

//Libreria mongodb
//se llama a la libreria de mongoose, para conectar con mongodb
var mongoose = require("mongoose");

//modulo de express
var app = require("./app");
//definir el puerto de la aplicación
var port = process.env.PORT || 1234;

//conexión a base de datos
mongoose.connect("mongodb://localhost:27017/cursoJavascript1", (error, respuesta) => {
  if(error){
    throw error;
  }else{
    console.log("se conecto a la base de datos ...");

    //referencia de expressjs para traer dos parametros, el puerto y la accion con el puerto.
    app.listen(port, function(){
      console.log("servidor APIREST, http://localhost:"+port);
    });
  }
});
