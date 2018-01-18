import { Component } from '@angular/core';

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
}
