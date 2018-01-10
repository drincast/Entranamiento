// objeto de propiedades boton btnMovil
var pb = {
  botonMovil: document.querySelector("#btnMovil span"),
  vistaBotones: false,
  botonera: document.querySelector("nav"),
  botones: document.querySelectorAll("nav ul li a"),
};

// objeto con los métodos del boton movil
var mb = {
  inicioMovil: function(){
    pb.botonMovil.addEventListener('click', mb.mostrarBotonera);

    for (var i = 0; i < pb.botones.length; i++) {
      pb.botones[i].addEventListener("click", mb.ocultarBotonera);
    }
  },

  mostrarBotonera: function(boton){

    if(!pb.vistaBotones){
      pb.vistaBotones = true;
      pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-12";
    }
    else{
      pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
      pb.vistaBotones = false;
    }
  },

  ocultarBotonera: function(){
    if(window.matchMedia("(max-width:767px)").matches){
      pb.vistaBotones = false;
      pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
    }
  }
};

mb.inicioMovil();
