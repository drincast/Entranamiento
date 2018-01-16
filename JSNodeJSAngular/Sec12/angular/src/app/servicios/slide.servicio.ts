/*
  servicios en angular, clases con objetivo claro que facilita la reutilización de código, modulo que nos
  permite separar el trabajo con las apis, con httpm con base de datos; y a traves de inyección
  de dependencias podemos enviar la información y utilizarla en los principales componentes.
*/
import { Injectable } from '@angular/core';

//para realizar peticiones http
import { Http, Response, Headers } from '@angular/http'

//para mapear las respuestas http
import 'rxjs/add/operator/map';

//para permitir utilizar rxjs que es la respuesta del mapeo y poder utilizarla
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ServicioSlide{
  public ruta_foto = "assets/img/slide/slide01.jpg"

  prueba(){
    return this.ruta_foto;
  }
}
