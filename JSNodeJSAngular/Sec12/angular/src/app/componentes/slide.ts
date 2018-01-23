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
  public identificado:string = "ok";

  constructor(private _ServicioSlide:ServicioSlide){
    //prueba del servicios
    //console.log(this._ServicioSlide.prueba());

    //peticiones http para traer el archivo json
    //debemos utilizar el método subscribe() para capturar la respuesta del servicio y poder
    //imprimir el OBSERVABLE que es el resultado del mapeo.
    this._ServicioSlide.tomarJsonSlide().subscribe(
      resultado => {
        this.slideJson = resultado;
      },

      error => {
        var mensajeError = <any>error;
      }
    );
  }

  ngOnInit(){
    //this.saludo();
    //objeto con propiedades de slide

    var p = {
      paginacion: document.querySelectorAll("#paginacion li"),
      item: 0,
      cajaSlide: document.querySelectorAll("#slide ul"),
      animacionSlide: "slide",
      imgSlide: document.querySelectorAll('#slide ul li'),
      avanzar: document.querySelector('#slide #avanzar'),
      retroceder: document.querySelector('#slide #retroceder'),
      velocidadSlide: 3000,
      formatearLoop: false,
      intervaloVerificar: undefined
    }


    //objeto con los métodos del slide
    var m = {
      inicioSlide: function(){
        for(var i = 0; i < p.paginacion.length; i++){
          p.paginacion[i].addEventListener("click", m.paginacionSlide);
          p.imgSlide[""+i].style.width = (100/p.paginacion.length) + '%';
        }

        p.avanzar.addEventListener("click", m.avanzar);
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
      },

      iniciarPropEHTML: function() {
        //inicializa las propiedades que se cargan con elementos HTML
        let resp = false;

        //console.log(document.querySelectorAll("#paginacion li")[0]);
        if(document.querySelectorAll("#paginacion li")[0] !== undefined){
          p.paginacion= document.querySelectorAll("#paginacion li");
          //console.log(document.querySelectorAll("#paginacion li"));

          if(document.querySelectorAll("#slide ul")[0] !== undefined){
            p.cajaSlide= document.querySelectorAll("#slide ul");
            //console.log(document.querySelectorAll("#slide ul"));
          }
          else{ return resp;}

          if(document.querySelectorAll('#slide ul li')[0] !== undefined){
            p.imgSlide= document.querySelectorAll('#slide ul li');
            //console.log(document.querySelectorAll('#slide ul li'));
          }
          else{ return resp;}

          if(document.querySelector('#slide #avanzar') !== undefined){
            p.avanzar = document.querySelector('#slide #avanzar');
            //console.log(document.querySelectorAll('#slide #avanzar'));
          }
          else{ return resp;}

          if(document.querySelector('#slide #retroceder') !== undefined){
            p.retroceder = document.querySelector('#slide #retroceder');
            //console.log(document.querySelectorAll('#slide #retroceder'));
          }
          else{ return resp;}

          return true;
        }

        //console.log(resp);
        return resp;
      },

      intervalVEHTML: function() {
        //funcion de intervalo para verificar las propiedades que se cargan con elementos HTML
        p.intervaloVerificar = setInterval(()=> {
          //console.log(p.intervaloVerificar);
          if(m.iniciarPropEHTML()){
            clearInterval(p.intervaloVerificar);
            m.inicioSlide();
          }
        }, 2);
      }
    };


    //m.inicioSlide();
    m.intervalVEHTML();

    // setTimeout(() =>{
    // }, 90);
  }

  // saludo(){
  //   console.log("hola");
  // }
}

/*
  Corrección, se crea el método intervalVEHTML(), que emplea un setInterval que llamara al método iniciarPropEHTML() para que asigne a las propiedades de la clase que se inicializan con elementos HTML, su elemento correspondiente, el setInterval se usa para que este llamando a iniciarPropEHTML(), hasta que todas las propiedades queden inicializadas, cuando se cumpla se finaliza el setInterval.

  se reemplaza la inicializacion de m.inicioSlide() por m.intervalVEHTML()x|

  Funciona, pero en si la apllicación esta consumiento muchos recursos (CPU y se incrementa la memoria)
*/
