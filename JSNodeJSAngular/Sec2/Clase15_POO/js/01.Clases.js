// CLASES
// Funciones constructoras
//ejemplo: new Stirng()

// CLASES PRIMITIVAS
// Clase String
var objString = new String("Esto es un string");
console.log("objString: ", objString);

//Clase Number
var objNumber = new Number(12);
console.log("objNumber: ", objNumber);

//Clase Boolean
var objBol = new Boolean(false);
console.log("objBol: ", objBol);

//Clases compuestas
//Clases Array
var objArray = new Array("rojo", "amarillo", "verde");
console.log("objArray: ", objArray);

//Clases Object
var objObject = new Object({
  nombre: "Pedro",
  edad: 30
});
console.log("objObject: ", objObject);

// Clases personalizadas
//crear el prototipo
function Persona() {
  //propiedad publica
  this.nombre;
  this.edad;
}

var objPersona = new Persona();
objPersona.nombre = "Juan";
objPersona.edad = "21 años";
console.log("objPersona: ", objPersona);

//clases con parametros
function Animales(nombre, raza) {
  this.nombre = nombre;
  this.raza = raza;
};

var mascota = new Animales("perro", "pitbul");
console.log("mascota: ", mascota);
