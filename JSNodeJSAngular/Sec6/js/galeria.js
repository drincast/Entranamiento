// PROPIEDADES
var pg = {
  imgGaleria: document.querySelectorAll('#galeria ul li img'),
};

//METODOS
var mg = {
  inicioGaleria: function(){
    for (var i = 0; i < pg.imgGaleria.length; i++) {
      pg.imgGaleria[i].addEventListener("click", mg.capturaImagen);
    }

  },

  capturaImagen: function(img){
    console.log('img', img.target);
  }

};

mg.inicioGaleria();
