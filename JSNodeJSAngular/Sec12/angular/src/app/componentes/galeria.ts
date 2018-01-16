import { Component } from '@angular/core';
import { ServicioGaleria } from '../servicios/galeria.servicio';

@Component({
  selector: "tag-galeria",
  templateUrl: "../vistas/galeria.html",
  providers: [ServicioGaleria]
})

export class GaleriaComponente{
  constructor(private _ServicioGaleria:ServicioGaleria){
    //prueba del servicios
    console.log(this._ServicioGaleria.prueba());
  }
}
