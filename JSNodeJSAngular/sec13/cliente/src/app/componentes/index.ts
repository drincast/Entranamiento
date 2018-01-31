import { Component, OnInit } from '@angular/core';

@Component({
  selector: "index",
  templateUrl: "../vistas/index.html"
})

export class IndexComponente {
  ngOnInit(){
    // objeto de propiedades boton btnMovil
    var pb = {
      botonMovil: document.querySelector("#btnMovil span"),
      vistaBotones: false,
      botonera: document.querySelector("nav"),
      botones: document.querySelectorAll("nav ul li a"),
      intervaloVerificar: undefined
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
      },

      iniciarPropEHTML: function() {
        let resp = false;

        if(document.querySelector("#btnMovil span") !== undefined){
          pb.botonMovil = document.querySelector("#btnMovil span");

          if(document.querySelector("nav") !== undefined){
            pb.botonera = document.querySelector("nav");
          }
          else{ return resp;}

          if(document.querySelectorAll("nav ul li a") !== undefined){
            pb.botones = document.querySelectorAll("nav ul li a");
          }
          else{ return resp;}

          return true;
        }

        return resp;
      },

      intervalVEHTML: function() {
        //funcion de intervalo para verificar las propiedades que se cargan con elementos HTML
        pb.intervaloVerificar = setInterval(()=> {
          console.log("en intervalVEHTML", pb.intervaloVerificar);
          if(mb.iniciarPropEHTML()){
            clearInterval(pb.intervaloVerificar);
            mb.inicioMovil();
          }
        }, 2);
      }
    };

    mb.intervalVEHTML()
    //mb.inicioMovil();
  }
}
