var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

// NUMEROS aleatorios

//el objeto Math permite realizar tareas mátematicas en los números.
//Math.random num aleatorios entre 0 (inclusive), y 1 (exclusivo)
// Math.floor redondear al número menor del decimal
// Math.ceil redondear al número mayor del decimal
// Math.round devuelve el valor x redondeado a su número entero más próximo


numero = Math.round(Math.random() * 10);
//console.log("numero", numero);
numeroAleatorio.innerHTML = numero;
