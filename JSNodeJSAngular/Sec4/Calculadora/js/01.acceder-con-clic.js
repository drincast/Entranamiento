//objeto con las propiedades de la calculadora
var p = {
  teclas: document.querySelectorAll("#calculadora ul li");
}

//objeto con las métodos de la calculadora
var m = {
  inicio: function() {
    for (var i = 0; i < p.teclas.length; i++) {
      p.teclas[i].addEventListener("click", m.oprimirTecla);
    }
  },

  oprimirTecla: function(tecla) {
    p.accion = tecla.target.getAttribute("class");
    m.calculadora(p.accion);
  },

  calculadora: function(accion){
    switch (accion) {
      case "numero":
        console.log("numero");
        break;
      case "signo":
        console.log("signo");
        break;
      case "decimal":
        console.log("decimal");
        break;
      case "igual":
        console.log("igual");
        break;
      default:

    }
  }
}

m.inicio();
