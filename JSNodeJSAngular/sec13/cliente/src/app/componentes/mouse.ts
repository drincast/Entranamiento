import { Component, OnInit } from '@angular/core';

@Component({
  selector: "tag-mouse",
  templateUrl: "../vistas/mouse.html"
})

export class MouseComponente{
  ngOnInit(){
    // OBJETO CON LAS PROPIEDADES DEL MOUSE
    var pm = {
      zona: document.querySelectorAll('#efectoMouse'),
      figuras: document.querySelectorAll('#efectoMouse figure'),
      mouseX: 0,
      mouseY: 0,
      horizontal: true,
      vertical: true,
      intervaloVerificar: undefined
    };

    // OBJETO CON LOS METODOS DEL MOUSE
    var mm = {
      inicioMouse: function(){
        //console.log(pm.zona[0]);
        pm.zona["0"].addEventListener("mousemove", mm.movimientoMouse);
        for (var i = 0; i < pm.figuras.length; i++) {
          pm.figuras[i].innerHTML = '<img src="assets/img/mouse/plano0' + i + '.png"/>';
          pm.figuras[""+i].style.zIndex = -i;
        }

        setTimeout(function(){
          pm.zona["0"].style.height = pm.figuras[0].childNodes["0"].height + "px";
        }, 100);
      },

      movimientoMouse: function(mouse){
        pm.mouseX = mouse.offsetX;
        pm.mouseY = mouse.offsetY;

        for (var i = 0; i < pm.figuras.length; i++) {
          if(pm.horizontal){
              pm.figuras[""+i].style.left = -pm.mouseX/(i*(100+50)) + "%";
          }

          if(pm.vertical){
            pm.figuras[""+i].style.top = -pm.mouseY/(i*(100+50)) + "%";
          }
        }
      },

      iniciarPropEHTML: function() {
        //inicializa las propiedades que se cargan con elementos HTML
        let resp = false;

        if(document.querySelectorAll('#efectoMouse')[0] !== undefined){
          pm.zona = document.querySelectorAll('#efectoMouse');

          if(document.querySelectorAll('#efectoMouse figure')[0] !== undefined){
            pm.figuras = document.querySelectorAll('#efectoMouse figure');
          }
          else{ return resp;}

          return true;
        }

        return resp;
      },

      intervalVEHTML: function() {
        //funcion de intervalo para verificar las propiedades que se cargan con elementos HTML
        pm.intervaloVerificar = setInterval(()=> {
          if(mm.iniciarPropEHTML()){
            clearInterval(pm.intervaloVerificar);
            mm.inicioMouse();
          }
        }, 2);
      }
    };

    //mm.inicioMouse();
    mm.iniciarPropEHTML();

    // setInterval(()=> {
    // }, 1);
  }
}
