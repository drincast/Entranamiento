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

import { RutaServidor } from '../ruta_servidor';

@Injectable()

export class ServicioGaleria{
  //public ruta_foto = "assets/img/galeria/01.jpg";
  //public ruta_foto = "assets/img/galeria/01.jpg";
  public url:string;

  constructor(private _http:Http){
    this.url = RutaServidor.url;
  }

  // prueba(){
  //   return this.ruta_foto;
  // }

  tomarJsonGaleria(){
    let recurso = this.url +  "mostrar-galeria";
    return this._http.get(recurso).map(resultado => resultado.json());
  }

  subirFotoGaleria(recurso, token, foto){
    if(!foto){
      return new Promise((resolver, rechazar)=>{
        rechazar("No hay imagen ara subir");
      });
    }
    else{
      return new Promise((resolver, rechazar)=>{
        var formData:any = new FormData();
        var xhr = new XMLHttpRequest();

        formData.append("foto", foto[0]);

        xhr.onreadystatechange = function(){
          if(xhr.readyState == 4){
            if(xhr.status === 200){
              resolver(JSON.parse(xhr.response));
            }
            else{
              rechazar(xhr.response);
            }
          }
        }

        xhr.open("POST", recurso, true);
        xhr.setRequestHeader("Authorization", token);
        xhr.send(formData);
      });
    }
  }

  borrarItemFoto(id){
    let recurso = this.url + 'borrar-foto/' + id;
    let headers = new Headers({"Content-Type":"application/json"
                                ,"Authorization": sessionStorage.getItem("id")});

    return this._http.delete(recurso, {headers: headers}).map(resultado=>resultado.json());
  }
}
