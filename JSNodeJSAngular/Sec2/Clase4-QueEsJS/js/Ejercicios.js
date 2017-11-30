window.onload = function() { //indica que se esjecute cuando ya se ha cargado el body
  var divResultado = document.querySelector("#divResultado");
  var valorA = parseInt(prompt("Digite el primer número"));
  var valorB = parseInt(prompt("Digite el segundo número"));

  var resultados = valorA + valorB;
  var strResultado = "El valor  A es " + valorA + " y el valor B es " +
    valorB;

  divResultado.innerHTML = strResultado;

  strResultado = '<br>' + "La suma de " + valorA + " + " +
    valorB + " = " + resultados;

  divResultado.innerHTML = divResultado.innerHTML + strResultado;
  resultados = valorA - valorB;
  strResultado = '<br />' + "La resta de " + valorA + " - " + valorB + " = " +
    resultados;
  divResultado.innerHTML = divResultado.innerHTML + strResultado;

  resultados = valorA * valorB;
  strResultado = '<br />' + "La multiplicación de " + valorA + " * " + valorB +
    " = " + resultados;
  divResultado.innerHTML = divResultado.innerHTML + strResultado;

  resultados = valorA / valorB;
  strResultado = '<br />' + "La división de " + valorA + " / " + valorB +
    " = " + resultados;
  divResultado.innerHTML = divResultado.innerHTML + strResultado;

  resultados = (valorA + valorB) * 10;
  strResultado = '<br />' + "La suma de " + valorA + " + " + valorB +
    " multiplicado * 10 " + " = " + resultados;
  divResultado.innerHTML = divResultado.innerHTML + strResultado;
  console.log(strResultado);
}
