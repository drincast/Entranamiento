//objeto con las propiedades de la calculadora
var p = {
  teclas: document.querySelectorAll("#calculadora ul li"),
  accion: null,
  digito: null,
  operaciones: document.querySelector('#operaciones'),
  cantidadSignos: 0,
  cantidadDecimales: false,
  resultado: false
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
    p.digito = tecla.target.innerHTML;
    m.calculadora(p.accion, p.digito);
  },

  calculadora: function(accion, digito){
    console.log(accion, digito);
    switch (accion) {
      case "numero":
        p.cantidadSignos = 0;
        if(p.operaciones.innerHTML === '0'){
            p.operaciones.innerHTML = digito;
        }
        else{
          if(!p.resultado){
              p.operaciones.innerHTML += digito;
          }
          else{

            p.operaciones.innerHTML = digito;
            p.resultado = false;
          }
        }

        break;
      case "signo":
        p.cantidadSignos++;
        if(p.cantidadSignos === 1){
          if(p.operaciones.innerHTML === '0'){
            p.operaciones.innerHTML = '0';
          }
          else{
            p.operaciones.innerHTML += digito;
            p.cantidadDecimales = false;
            if(p.resultado){
              p.resultado = false;
            }
          }
        }
        break;
      case "decimal":
        if(p.cantidadDecimales === false){
          p.operaciones.innerHTML += digito;
          p.cantidadDecimales = true;
          p.resultado = false;
        }

        break;
      case "igual":
        p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
        p.resultado = true;
        break;
      default:

    }
  },

  borrarCalculadora: function(){
    p.operaciones.innerHTML = '0';
    p.cantidadDecimales = false;
  }
}

m.inicio();
