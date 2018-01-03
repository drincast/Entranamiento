//objeto con propiedades de slide
var p = {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide: document.querySelector("#slide ul")
}


//objeto con los métodos del slide
var m = {
  inicioSlide: function(){
    for(var i = 0; i < p.paginacion.length; i++){
      p.paginacion[i].addEventListener("click", m.paginacionSlide);
    }
  },

  paginacionSlide: function(item){
    p.item = item.target.parentNode.getAttribute("data-item")-1;

    m.movimientoSlide(p.item);
  },

  movimientoSlide: function(item){
    p.cajaSlide.style.left = -(item * 100) + "%";
    console.log('item', (item * 100));
  }
}

m.inicioSlide();
