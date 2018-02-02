  var app = require('./app'); // this is your express app
  var http = require('http'); // 3. HTTP server
  var mongoose = require("mongoose");

  /**
   * Get port from environment and store in Express.
   */
  var port = process.env.PORT; // 2. Using process.env.PORT
  app.set('port', port);

  /**
   * Create HTTP server.
   */
  var server = http.createServer(app);

  //conexión a base de datos
  //mongodb://<dbuser>:<dbpassword>@ds123728.mlab.com:23728/cursojavascript1
  mongoose.connect("mongodb://usuarioCursoJS1:usuarioCursoJS1@ds123728.mlab.com:23728/cursojavascript1", (error, respuesta) => {
    if(error){
      throw error;
    }else{
      console.log("se conecto a la base de datos ...");

      //referencia de expressjs para traer dos parametros, el puerto y la accion con el puerto.
      server.listen(port, function(){
        console.log("servidor APIREST funcionando");
      });
    }
  });

  /**
   * Listen on provided port, on all network interfaces.
   */
  //server.listen(port);
