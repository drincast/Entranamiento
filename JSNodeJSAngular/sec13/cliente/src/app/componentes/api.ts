import { Component, OnInit } from '@angular/core';

import { ListaUsuarios } from '../modelos/usuario.modelo';

import { ServicioUsuarios } from '../servicios/usuarios.servicio';

@Component({
  selector: "tag-api",
  templateUrl: "../vistas/api.html",
  providers: [ServicioUsuarios]
})

export class ApiComponente {
  public identificado:string;
  public usuario:string;
  public listaUsuarios:ListaUsuarios;
  public validarIngreso:boolean = false;
  public mensaje;

  constructor(private _servicioUsuarios:ServicioUsuarios){
    this.listaUsuarios = new ListaUsuarios("", "");
  }

  ngOnInit(){
    this.identificado = localStorage.getItem("id");
    this.usuario = localStorage.getItem("usuario");
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
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
    localStorage.clear();
    this.identificado = null;
    this.usuario = null;
  }



}
