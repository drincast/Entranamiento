// FUNCIONES SIN PARAMETROS
var varGlobal = 10;

function saludo() {
  console.log("hola");
}

saludo();


//FUNCIONES CON PARÁPARAMETROS

function operacion(digito1, digito2) {
  var resultado = digito1 + digito2;
  varGlobal = resultado;
  console.log("resultado", resultado);
  console.log("varGlobal des de operacion", varGlobal);
}

console.log("varGlobal ant de operacion", varGlobal);
operacion(5, 9);

// FUNCIONES CON RETORNO SIN PARAMETROS

function retorno1() {
  var numero = 5;
  return numero;
}

console.log("retorno1", retorno1());

// FUNCIONES CON RETORNO CON PARAMETROS

function retorno2(numero) {
  return numero;
}

console.log("retorno1", retorno2(7));
