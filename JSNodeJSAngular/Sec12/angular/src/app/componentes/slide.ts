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
  constructor(private _ServicioSlide:ServicioSlide){
    //prueba del servicios
    console.log(this._ServicioSlide.prueba());
  }
}
