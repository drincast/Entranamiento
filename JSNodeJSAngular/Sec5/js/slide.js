//objeto con propiedades de slide
var p = {
  paginacion: document.querySelectorAll("#paginacion li"),
  item: 0,
  cajaSlide: document.querySelector("#slide ul"),
  animacionSlide: "fade",
  imgSlide: document.querySelectorAll('#slide ul li')
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

    for(var i = 0; i < p.paginacion.length; i++){
      p.paginacion[i].style.opacity = .5;
    }

    p.paginacion[item].style.opacity = 1;

    if(p.animacionSlide === "slide"){
      p.cajaSlide.style.transition = ".7s left ease-in-out";
    }

    if(p.animacionSlide === "fade"){
      // for(var i = 0; i < p.paginacion.length; i++){
      //
      // }
      p.imgSlide[item].style.opacity = "0";
      p.imgSlide[item].style.transition = ".7s opacity ease-in-out";
      setTimeout(function(){
        p.imgSlide[item].style.opacity = "1";
      }, 500);

    }


    console.log('item', (item * 100));
  }
}

m.inicioSlide();
