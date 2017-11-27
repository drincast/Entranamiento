/*VARIABLE*/

// var numericas, vectores
var numeroDecimal = 55;
var colores = ["rojo", "amarrillo", 1];

// variables objeto
var jugo = {
  "ingrediente1": "fresa",
  "ingrediente2": "mandarina",
  "ingrediente3": "banano"
};

console.log("numeroDecimal", numeroDecimal);
console.log("colores", colores);
console.log("jugo", jugo);
console.log("jugo", jugo.ingrediente1);

// VARIABLES DOM (Modelo de Objetos del Documento)
var caja = document.querySelector("#caja");
console.log("caja", caja);

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";
