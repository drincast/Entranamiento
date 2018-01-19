//OnInit sirve para identificar cuando se ha cargado todos los recursos de angular
import { Component, OnInit } from '@angular/core';

import { ServicioSlide } from '../servicios/slide.servicio';

@Component({
  selector: "tag-slide",
  templateUrl: "../vistas/slide.html",

  //para cargar el servicio en el componente, mediante el inyector de dependencias generar instancias
  //de los objetos de los servicios
  providers: [ServicioSlide]

})

export class SlideComponente{
  public slideJson;

  constructor(private _ServicioSlide:ServicioSlide){
    //prueba del servicios
    //console.log(this._ServicioSlide.prueba());



    //peticiones http para traer el archivo json
    //debemos utilizar el método subscribe() para capturar la respuesta del servicio y poder
    //imprimir el OBSERVABLE que es el resultado del mapeo.
    this._ServicioSlide.tomarJsonSlide().subscribe(
      resultado => {
        this.slideJson = resultado;
        console.log("this.slideJson: ", this.slideJson);
        console.log("this.slideJson: ", this.slideJson[0]["imagen"]);
        //console.log("this.slideJson: ", this.slideJson[0].indexOf());
      },

      error => {
        var mensajeError = <any>error;
      }
    );
  }

  ngOnInit(){
    //this.saludo();
    //objeto con propiedades de slide

    setTimeout(() =>{
      var p = {
        paginacion: document.querySelectorAll("#paginacion li"),
        item: 0,
        cajaSlide: document.querySelectorAll("#slide ul"),
        animacionSlide: "slide",
        imgSlide: document.querySelectorAll('#slide ul li'),
        avanzar: document.querySelectorAll('#slide #avanzar'),
        retroceder: document.querySelector('#slide #retroceder'),
        velocidadSlide: 3000,
        formatearLoop: false
      }


      //objeto con los métodos del slide
      var m = {
        inicioSlide: function(){
          for(var i = 0; i < p.paginacion.length; i++){
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide[""+i].style.width = (100/p.paginacion.length) + '%';
          }

          p.avanzar[0].addEventListener("click", m.avanzar);
          p.retroceder.addEventListener("click", m.retroceder);

          m.intervalo();

          p.cajaSlide[""+0].style.width = (p.paginacion.length*100) + "%";
        },

        paginacionSlide: function(item){
          //p.item = item.target.parentNode.getAttribute("data-item")-1;
          p.item = item.target.parentNode.getAttribute("value")-1;

          m.movimientoSlide(p.item);
        },

        avanzar: function(){
          if(p.item === (p.imgSlide.length-1)){
            p.item = 0;
          }
          else{
            p.item++;
          }

          m.movimientoSlide(p.item);
        },

        retroceder: function(){
          if(p.item === 0){
            p.item = p.imgSlide.length-1;
          }
          else{
            p.item--;
          }

          m.movimientoSlide(p.item);
        },

        movimientoSlide: function(item){
          p.formatearLoop = true;
          p.cajaSlide[""+0].style.left = -(item * 100) + "%";

          for(var i = 0; i < p.paginacion.length; i++){
            p.paginacion[""+i].style.opacity = .5;
          }

          p.paginacion[""+item].style.opacity = 1;

          if(p.animacionSlide === "slide"){
            p.cajaSlide[""+0].style.transition = ".7s left ease-in-out";
          }

          if(p.animacionSlide === "fade"){
            // for(var i = 0; i < p.paginacion.length; i++){
            //
            // }
            p.imgSlide[""+item].style.opacity = "0";
            p.imgSlide[""+item].style.transition = ".7s opacity ease-in-out";
            setTimeout(function(){
              p.imgSlide[""+item].style.opacity = "1";
            }, 500);

          }
        },

        intervalo: function(){
          setInterval(function(){
            if(p.formatearLoop){
              p.formatearLoop = false;
            }
            else{
              m.avanzar();
            }
          }, p.velocidadSlide)
        }
      }

      m.inicioSlide();
    }, 70);
  }

  // saludo(){
  //   console.log("hola");
  // }
}
