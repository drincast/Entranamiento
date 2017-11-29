var recuadro = document.querySelector("#recuadro")
var boton2 = document.querySelector("#boton2");

// EVENTO DESDE EL DOM
function cambiarColor() {
  recuadro.style.background = "red";
}

// EVENTO DESDE JAVASCRIPT
function moverCaja() {
  recuadro.style.width = "500px";
  recuadro.style.transition = "1s width ease";
}

boton2.addEventListener("click", moverCaja);
