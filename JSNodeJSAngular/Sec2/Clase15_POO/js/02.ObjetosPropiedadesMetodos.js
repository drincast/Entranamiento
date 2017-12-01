//Objetos propiedades y métodos
// objetos: colección de propiedades y métodos de una clase
//propiedad: asociación entre un nombre y un valor
//método: función que pertenece a una clase

var objeto = {
  nombre: "MaxPower",
  edad: 31,

  descripcion: function() {
    console.log("Su nombre es " + objeto.nombre + " y tiene " + objeto.edad +
      " años.");
  },

  saludar: function(saludo) {
    console.log(saludo + " " + objeto.nombre);
  }
};

console.log("nombre: " + objeto.nombre);
console.log("edad: " + objeto.edad);
objeto.descripcion();
objeto.saludar("Hola");

// OBJETOS PRIMITIVOS
var d = new Date();
console.log("d: ", d);
var y = d.getFullYear();
console.log("y: ", y);

//var m = new Math();
//var obj2 = new objeto;
//console.log("obj2: ", obj2);
