var tiempo = document.querySelector("#tiempo");
var segundos = 0;

// SET INTERVAL (intervalo de tiempo)
// setInterval(function, tiempo)
var intervalo = setInterval(function() {
  segundos++;
  tiempo.innerHTML = segundos.toString();
  //console.log("segundos", segundos);
}, 1000);

// SET TIMEOUT (RETARDO DE TIEMPO)
//setTimeout(FUNCTION, TIEMPO)

setTimeout(function() {
  //alert("se cumplio el tiempo..");
  clearInterval(intervalo);
}, 5000);
