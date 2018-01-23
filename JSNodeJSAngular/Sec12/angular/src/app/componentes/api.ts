import { Component } from '@angular/core';

import { ListaUsuarios } from '../modelos/usuario.modelo';

import { ServicioUsuarios } from '../servicios/usuarios.servicio';

@Component({
  selector: "tag-api",
  templateUrl: "../vistas/api.html",
  providers: [ServicioUsuarios]
})

export class ApiComponente {
  public identificado:string;
  public listaUsuarios:ListaUsuarios;
  public validarIngreso:boolean = false;

  constructor(private _servicioUsuarios:ServicioUsuarios){
    this.listaUsuarios = new ListaUsuarios("", "");
  }

  onSubmit(){
    this._servicioUsuarios.login().subscribe(
      resultado => {
        for (let i = 0; i < resultado.length; i++) {
          if(resultado[i].usuario == this.listaUsuarios.usuario
             && resultado[i].password == this.listaUsuarios.password){
               this.identificado = resultado[i].id;
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

}
