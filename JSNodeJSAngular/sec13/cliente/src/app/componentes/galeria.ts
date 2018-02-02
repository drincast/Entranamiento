import { Component, OnInit } from '@angular/core';
import { ServicioGaleria } from '../servicios/galeria.servicio';
import { RutaServidor } from '../ruta_servidor';

@Component({
  selector: "tag-galeria",
  templateUrl: "../vistas/galeria.html",
  providers: [ServicioGaleria]
})

export class GaleriaComponente{
  public galeriaJson;
  public identificado:string = "ok";
  public url:string;

  constructor(private _ServicioGaleria:ServicioGaleria){
    //prueba del servicios
    //console.log(this._ServicioGaleria.prueba());

    this._ServicioGaleria.tomarJsonGaleria().subscribe(
      resultado => {
        this.url = RutaServidor.url;
        this.galeriaJson = resultado.mostrarGaleria;
        // console.log("this.galeriaJson: ", this.galeriaJson);
        // console.log("this.galeriaJson: ", this.galeriaJson[0]["foto"]);
      },

      error => {
        var mensajeError = <any>error;
      }
    );
  }

  ngOnInit(){
    // PROPIEDADES
    var pg = {
      imgGaleria: document.querySelectorAll('#galeria ul li img'),
      rutaImagen: null,
      cuerpoDOM: document.querySelector("body"),
      lightbox: null,
      modal: null,
      animacionGaleria: 'fade',
      intervaloVerificar: undefined
    };

    //METODOS
    var mg = {
      inicioGaleria: function(){
        for (var i = 0; i < pg.imgGaleria.length; i++) {
          pg.imgGaleria[i].addEventListener("click", mg.capturaImagen);
        }

      },

      capturaImagen: function(img){
        pg.rutaImagen = img.target;
        mg.lightbox(pg.rutaImagen);
      },

      lightbox: function(img){
        pg.cuerpoDOM.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
        pg.lightbox = document.querySelector("#lightbox");

        pg.lightbox.style.width = "100%";
        pg.lightbox.style.height = "100%";
        pg.lightbox.style.position = "fixed";
        pg.lightbox.style.zIndex = "10";
        pg.lightbox.style.background = "rgba(0,0,0,.8)";
        pg.lightbox.style.top = "0";
        pg.lightbox.style.left = "0";
        // pg.lightbox.style.textAlign = "center";

        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        pg.modal = document.querySelector("#modal");
        pg.modal.innerHTML = img.outerHTML+'<div>x</div>';

        pg.modal.style.display = "block";
        pg.modal.style.position = "relative";
        pg.modal.childNodes[0].style.width = '100%';
        pg.modal.childNodes[0].style.border = '15px solid white';

        if(window.matchMedia("(max-width:1000px)").matches){
          pg.modal.style.width = "90%";
        }
        else{
          pg.modal.style.width = "60%";
        }

        if(pg.animacionGaleria === 'slideLeft'){
          pg.modal.style.top = "50%";
          pg.modal.style.left = 0;
          pg.modal.style.opacity = 0;

          setTimeout(function(){
            pg.modal.style.transition = ".5s left ease";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 1;
            pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px";
            pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px";
          }, 50);
        }

        if(pg.animacionGaleria === 'slideTop'){
          pg.modal.style.top = "-100%";
          pg.modal.style.left = "50%";
          pg.modal.style.opacity = 0;

          setTimeout(function(){
            pg.modal.style.transition = ".5s top ease";
            pg.modal.style.top = "50%";
            pg.modal.style.opacity = 1;
            pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px";
            pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px";
          }, 50);
        }

        if(pg.animacionGaleria === 'fade'){
          pg.modal.style.top = "50%";
          pg.modal.style.left = "50%";
          pg.modal.style.opacity = 0;

          setTimeout(function(){
            pg.modal.style.transition = ".5s opacity ease";
            pg.modal.style.opacity = 1;
            pg.modal.style.marginLeft = -pg.modal.childNodes[0].width/2 + "px";
            pg.modal.style.marginTop = -pg.modal.childNodes[0].height/2 + "px";
          }, 50);
        }

        pg.modal.childNodes[1].style.position = 'absolute';
        pg.modal.childNodes[1].style.right = '5px';
        pg.modal.childNodes[1].style.top = '5px';
        pg.modal.childNodes[1].style.color = 'silver';
        pg.modal.childNodes[1].style.cursor = 'pointer';
        pg.modal.childNodes[1].style.fontSize = '30px';
        pg.modal.childNodes[1].style.width = '40px';
        pg.modal.childNodes[1].style.height = '40px';
        pg.modal.childNodes[1].style.textAlign = 'center';
        pg.modal.childNodes[1].style.background = 'white';
        pg.modal.childNodes[1].style.borderRadius = '0px 0px 0px 5px';

        pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria);
      },

      salirGaleria: function(){
        pg.lightbox.parentNode.removeChild(pg.lightbox);
      },

      iniciarPropEHTML: function() {
        //inicializa las propiedades que se cargan con elementos HTML
        let resp = false;

        if(document.querySelectorAll('#galeria ul li img')[0] !== undefined){
          pg.imgGaleria = document.querySelectorAll('#galeria ul li img');

          if(document.querySelector("body") !== undefined){
            pg.cuerpoDOM = document.querySelector("body");
          }
          else{ return resp;}

          return true;
        }

        return resp;
      },

      intervalVEHTML: function() {
        //funcion de intervalo para verificar las propiedades que se cargan con elementos HTML
        pg.intervaloVerificar = setInterval(()=> {
          if(mg.iniciarPropEHTML()){
            clearInterval(pg.intervaloVerificar);
            mg.inicioGaleria();
          }
        }, 2);
      }
    };

    //mg.inicioGaleria();
    mg.intervalVEHTML();

    // setTimeout(()=> {
    // }, 1);
  }

  borrarFoto(galeria){
    let id = galeria._id;

    this._ServicioGaleria.borrarItemFoto(id).subscribe(
      resultado=>{
        window.location.reload();
      },
      error => {
        console.log("error", error);
      }
    )
  }
}
