// OBJETO CON LAS PROPIEDADES DEL MOUSE
var pm = {
  zona: document.querySelector('#efectoMouse'),
  figuras: document.querySelectorAll('#efectoMouse figure'),
  mouseX: 0,
  mouseY: 0,
  horizontal: true,
  vertical: true,
};

// OBJETO CON LOS METODOS DEL MOUSE
var mm = {
  inicioMouse: function(){
    pm.zona.addEventListener("mousemove", mm.movimientoMouse);
    for (var i = 0; i < pm.figuras.length; i++) {
      pm.figuras[i].innerHTML = '<img src="img/mouse/plano0' + i + '.png"/>';
      pm.figuras[i].style.zIndex = -i;
    }

    setTimeout(function(){
      pm.zona.style.height = pm.figuras[0].childNodes[0].height + "px";
    }, 100);
  },

  movimientoMouse: function(mouse){
    pm.mouseX = mouse.offsetX;
    pm.mouseY = mouse.offsetY;

    for (var i = 0; i < pm.figuras.length; i++) {
      if(pm.horizontal){
          pm.figuras[i].style.left = -pm.mouseX/(i*(100+50)) + "%";
      }

      if(pm.vertical){
        pm.figuras[i].style.top = -pm.mouseY/(i*(100+50)) + "%";
      }
    }
  }
};

mm.inicioMouse();


/***************************************************************************************************/
// var lstVideos = ['nada', 'https://www.youtube.com/watch?v=kkx-7fsiWgg', 'https://www.youtube.com/watch?v=YG2p6XBuSKA', 'https://www.youtube.com/watch?v=CRN75ev73JY'];
// var nodo = document.getElementById('content');
// var nodoPadre = nodo.parentNode;
// var iframeVideo = document.createElement('iframe');
// iframeVideo.setAttribute('id', 'iframeVideoX');
// iframeVideo.setAttribute('style', 'width:100%; height: 800px');
// iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=OxxggwHFj7M');
//
// //nodo.parentNode.children.content
// nodo.parentNode.removeChild(nodo);
// nodoPadre.appendChild(iframeVideo);
//
// var varConteVideo = iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');
//
// function ActulizarNodoVideo(){
//   varConteVideo = iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');
//   varConteVideo[0].onended = SiguienteVideo;
// }
//
// function SiguienteVideo(){
//   lstVideos.shift();
//   //document.location.target = "_self";
//   //document.location.href=urlListaMusica[0];
//   //document.location.href = sigVideoUrl;
//   iframeVideo.setAttribute('src', lstVideos[0]);
//   setTimeout(ActulizarNodoVideo, 7000);
// }
// varConteVideo[0].onended = SiguienteVideo;
