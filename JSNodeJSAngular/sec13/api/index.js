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
//mongodb://<dbuser>:<dbpassword>@ds123728.mlab.com:23728/cursojavascript1
mongoose.connect("mongodb://localhost:27017/cursoJavascript1", (error, respuesta) => {
  if(error){
    throw error;
  }else{
    let f = new Date();
    console.log("se conecto a la base de datos ...", f);

    // let v = './ficheros/slide/ZPedGNekp0SOmw9LE6ukxpnx.jpg'
    // let a = v.split('\/');
    //
    // console.log(a);
    // console.log(a.length);
    // a = v.split('\\');
    // console.log(a);
    // console.log(v);

    //referencia de expressjs para traer dos parametros, el puerto y la accion con el puerto.
    app.listen(port, function(){
      console.log("servidor APIREST, http://localhost:"+port);
    });
  }
});
