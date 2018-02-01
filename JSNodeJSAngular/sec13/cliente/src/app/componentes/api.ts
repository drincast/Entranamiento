import { Component, OnInit } from '@angular/core';

import { ListaUsuarios } from '../modelos/usuario.modelo';

import { ItemSlides } from '../modelos/slide.modelo';

import { ItemGaleria } from '../modelos/galeria.modelo';

import { ServicioUsuarios } from '../servicios/usuarios.servicio';

import { ServicioSlide } from '../servicios/slide.servicio';

import { ServicioGaleria } from '../servicios/galeria.servicio';

import { RutaServidor } from '../ruta_servidor';

@Component({
  selector: "tag-api",
  templateUrl: "../vistas/api.html",
  providers: [ServicioUsuarios, ServicioSlide, ServicioGaleria]
})

export class ApiComponente {
  public identificado:string;
  public usuario:string;
  public listaUsuarios:ListaUsuarios;
  public itemSlides:ItemSlides;
  public validarIngreso:boolean = false;
  public mensaje;
  public subirImagen: Array<File>;
  public url:string;
  public itemGaleria:ItemGaleria;


  constructor(private _servicioUsuarios:ServicioUsuarios
              , private _servicioSlide:ServicioSlide
              , private _servicioGaleria:ServicioGaleria){
    this.listaUsuarios = new ListaUsuarios("", "");
    this.itemSlides = new ItemSlides("", "", "");
    //this.itemGaleria = new ItemGaleria("");
    this.url = RutaServidor.url;
  }

  ngOnInit(){
    this.identificado = sessionStorage.getItem("id");
    this.usuario = sessionStorage.getItem("usuario");
  }

  onSubmit(){
    this._servicioUsuarios.login(this.listaUsuarios, "true").subscribe(
      resultado => {
        this.identificado = resultado.token;
        this.usuario = resultado.seleccionUsuario.usuario;

        sessionStorage.setItem("id", this.identificado);
        sessionStorage.setItem("usuario", this.usuario);
        this.mensaje = null; //para limpiar el mensaje
      },
      error => {
        let errorMensaje = <any>error;
        let err = JSON.parse(error._body);
        // console.log(err);
        // console.log(err.mensaje);
        this.validarIngreso = true;
        this.mensaje = err.mensaje;
        //alert(err.mensaje);
      }
    );
    //console.log(this.listaUsuarios.usuario, this.listaUsuarios.password);
  }

  cerrarSesion(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('usuario');
    sessionStorage.clear();
    this.identificado = null;
    this.usuario = null;
  }

  cargarFichero(fileInput: any){
    this.subirImagen = <Array<File>>fileInput.target.files;
    console.log(this.subirImagen);

    if(this.subirImagen[0].size <= 2000000
      && (this.subirImagen[0].type === "image/jpeg" || this.subirImagen[0].type === "image/png")){
        this.mensaje = null;
        this.validarIngreso = false;
        return this.subirImagen;
    }
    else{
      this.validarIngreso = true;
      this.mensaje = "La extension o el peso del archivo no es valido";
      this.subirImagen = null;
      return this.subirImagen;
    }


  }

  nuevoSlide(){
    let recurso = this.url + 'crear-slide';
    this._servicioSlide.subirNuevoSlide(recurso, this.itemSlides, this.identificado, this.subirImagen).then(
      (resultado)=>{
        this.validarIngreso = false;
        this.mensaje = null;
        window.location.reload();
      },
      (error)=>{
        this.validarIngreso = true;
        this.mensaje = "no se logro subir el slide";
      }
    );
  }

  nuevaFotoGaleria(){
    let recurso = this.url + 'crear-foto';
    this._servicioGaleria.subirFotoGaleria(recurso, this.identificado, this.subirImagen).then(
      (resultado)=>{
        this.validarIngreso = false;
        this.mensaje = null;
        window.location.reload();
      },
      (error)=>{
        this.validarIngreso = true;
        this.mensaje = "no se logro subir el slide";
      }
    );
  }
}
