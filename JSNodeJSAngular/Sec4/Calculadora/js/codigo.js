//objeto con las propiedades de la calculadora
var p = {
  teclas: document.querySelectorAll("#calculadora ul li")

}

//objeto con las métodos de la calculadora
var m = {
  inicio: function() {
    for (var i = 0; i < p.teclas.length; i++) {
      p.teclas[i].addEventListener("click", m.oprimirTecla);
    }
  },

  oprimirTecla: function(tecla) {
    console.log(tecla.target);
  }
}

m.inicio();
