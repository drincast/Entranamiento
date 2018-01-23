import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http'

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class ServicioUsuarios{
  public ruta_foto = "assets/img/galeria/01.jpg";
  public url:string;

  constructor(private _http:Http){
    this.url = "http://tutorialesatualcance.com/usuarios.json";
  }

  prueba(){
    return this.ruta_foto;
  }

  login(){
    //cuando se envian peticiones POST, se debe declarar el contenido que se va a envíar, en la cabecera Http
    let cabecera = new Headers({"Content-Type":"application/x-www-form-urlencoded"});
    return this._http.post(this.url, {cabecera: cabecera}).map(resultado => resultado.json());
  }
}
