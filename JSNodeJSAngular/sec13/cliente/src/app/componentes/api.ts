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

  constructor(private _servicioUsuarios:ServicioUsuarios){
    this.listaUsuarios = new ListaUsuarios("", "");
  }

  ngOnInit(){
    this.identificado = localStorage.getItem("id");
    this.usuario = localStorage.getItem("usuario");
  }

  onSubmit(){
    this._servicioUsuarios.login().subscribe(
      resultado => {
        for (let i = 0; i < resultado.length; i++) {
          if(resultado[i].usuario == this.listaUsuarios.usuario
             && resultado[i].password == this.listaUsuarios.password){
               this.identificado = resultado[i].id;
               this.usuario = resultado[i].usuario;

               localStorage.setItem("id", this.identificado);
               localStorage.setItem("usuario", this.usuario);
          }else{
            this.validarIngreso = true;
          }
        }
      },
      error => {
        let errorMensaje = <any>error;
        console.log(errorMensaje);
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
