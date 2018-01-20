import { Component, OnInit } from '@angular/core';

@Component({
  selector: "tag-scroll",
  templateUrl: "../vistas/scroll.html"
})

export class ScrollComponente {
  ngOnInit(){
    setTimeout(()=>{
      // el objeto con propiedades del SCROLL
      var ps = {
        posicionScroll: 0,
        articulos: document.querySelectorAll('#scroll article'),
        cajaScroll: document.querySelectorAll('#scroll'),
        cabezote: document.querySelector("header"),
        botonera: document.querySelectorAll("nav ul li a"),
        ruta: null,
        intervalo: null,
        destinoScroll: 0,
        padding: 0,
      };

      // los métodos del SCROLL
      var ms = {
        inicioScroll: function(){
          document.addEventListener('scroll', ms.efectoParallax);

          for (var i = 0; i < ps.botonera.length-1; i++) {
            ps.botonera[i].addEventListener("click", ms.desplazamiento)
          }
        },

        efectoParallax: function(){
          ps.posicionScroll = window.pageYOffset;
          if(ps.posicionScroll > 100){
            ps.cabezote.style.position = "fixed";
            ps.cabezote.style.zIndex = "10";

            if(window.matchMedia("(min.width:768px)").matches){
              ps.padding = 80;
            }
            else{
              ps.padding = 140;
            }


          }
          else{
            ps.cabezote.style.position = "relative";
            ps.cabezote.style.zIndex = "0";

            if(window.matchMedia("(min.width:768px)").matches){
              ps.padding = 180;
            }
            else{
              ps.padding = 280;
            }
          }

          if(ps.posicionScroll > ps.cajaScroll["0"].offsetTop){
            //console.log('limite');
            for (var i = 0; i < ps.articulos.length; i++) {
              ps.articulos[""+i].style.marginLeft = "0%";
            }
          }
          else{
            for (var i = 0; i < ps.articulos.length; i++) {
              if(window.matchMedia("(min.width:768px)").matches){
                ps.articulos[""+i].style.marginLeft = ((ps.posicionScroll/22.7)-100) + "%";
              }
            }
          }
        },

        desplazamiento: function(ruta) {
          ruta.preventDefault();
          ps.ruta = ruta.target.getAttribute('href');
          ps.destinoScroll = document.querySelector(ps.ruta).offsetTop - ps.padding;

          ps.intervalo = setInterval(function(){
            if(ps.posicionScroll < ps.destinoScroll){
              ps.posicionScroll += 100;

              if(ps.posicionScroll >= ps.destinoScroll){
                ps.posicionScroll = ps.destinoScroll;
                clearInterval(ps.intervalo);
              }
            }
            else{
              ps.posicionScroll -= 100;

              if(ps.posicionScroll <= ps.destinoScroll){
                ps.posicionScroll = ps.destinoScroll;
                clearInterval(ps.intervalo);
              }
            }

            window.scrollTo(0, ps.posicionScroll);
          },50);

        }
      };

      ms.inicioScroll();
    }, 1);
  }
}
