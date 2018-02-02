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

//para permitir utilizar rxjs que es la respuesta del mapeo y poder utilizarla, mape de respuestas
import { Observable } from 'rxjs/Observable';

import { RutaServidor } from '../ruta_servidor';

@Injectable()

export class ServicioSlide{
  // public ruta_foto = "assets/img/slide/slide01.jpg"
  // prueba(){
  //   return this.ruta_foto;
  // }

  public url:string;

  //peticiones http para traer el archivo json
  //para utilizar el servicio HTTP debemos tener una propiedad HTTP en nuestra clase
  constructor(private _http:Http){

    //instalar el componente Allow-Control-Allo-Origin: *
    this.url = RutaServidor.url;
  }

  tomarJsonSlide(){
    //Hacer peticion get a la url, haciendo la llamada al objeto http que ya esta cargado en la
    //propiedad privada.
    //como parametro debemos pasar la url, capturamos la respuesta en el metodo map()
    //en callback con una función flecha recogemos la respuesta que viene en el primer parámetro
    //y lo convertimos en formato json

    // let resp;
    // setTimeout("resp = this.ejecutar();", 5000);
    let recurso = this.url +  "mostrar-slides";
    return this._http.get(recurso).map(resultado => resultado.json());
  }

  ejecutar(){
    return this._http.get(this.url).map(resultado => resultado.json());
  }

  subirNuevoSlide(recurso, items, token, imagen){
    if(!imagen){
      return new Promise((resolver, rechazar)=>{
        rechazar("No hay imagen para subir");
      });
    }
    else{
      return new Promise((resolver, rechazar)=>{
        var formData:any = new FormData();
        var xhr = new XMLHttpRequest();

        formData.append("imagen", imagen[0]);
        formData.append("titulo", items.titulo);
        formData.append("descripcion", items.descripcion);

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

  actualizarItemSlide(recurso, items, token, imagen){
    if(!imagen){
      return new Promise((resolver, rechazar)=>{
        let formData:any = new FormData();
        let xhr = new XMLHttpRequest();

        formData.append("titulo", items.titulo);
        formData.append("descripcion", items.descripcion);
        formData.append("actualizarImagen", 0);
        formData.append("rutaImagenActual", items.imagen);

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

        xhr.open("PUT", recurso, true);
        xhr.setRequestHeader("Authorization", token);
        xhr.send(formData);
      });
    }
    else{
      return new Promise((resolver, rechazar)=>{
        let formData:any = new FormData();
        let xhr = new XMLHttpRequest();

        formData.append("imagen", imagen[0]);
        formData.append("titulo", items.titulo);
        formData.append("descripcion", items.descripcion);
        formData.append("actualizarImagen", 1);
        formData.append("rutaImagenActual", items.imagen);

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

        xhr.open("PUT", recurso, true);
        xhr.setRequestHeader("Authorization", token);
        xhr.send(formData);
      });
    }
  }

  borrarItemSlide(id){
    let recurso = this.url + 'borrar-slide/' + id;
    let headers = new Headers({"Content-Type":"application/json"
                                ,"Authorization": sessionStorage.getItem("id")});
                                
    return this._http.delete(recurso, {headers: headers}).map(resultado=>resultado.json());
  }
}
