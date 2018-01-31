import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import { RutaServidor } from '../ruta_servidor';

@Injectable()

export class ServicioUsuarios{
  public ruta_foto = "assets/img/galeria/01.jpg";
  public url:string;

  constructor(private _http:Http){
    //ruta al recurso de la api rest
    this.url = RutaServidor.url + "login";
  }

  prueba(){
    return this.ruta_foto;
  }

  login(lstUsuarios, token){
    lstUsuarios.token = token; //se crea la propiedad aca, en el modelo solo hay dos definidas
    let parametros = JSON.stringify(lstUsuarios);

    //cuando se envian peticiones POST, se debe declarar el contenido que se va a envíar, en la cabecera Http
    let cabecera = new Headers({"Content-Type":"application/json"});
    return this._http.post(this.url, parametros, {headers: cabecera}).map(resultado => resultado.json());
  }
}
