import { Component } from '@angular/core';

import { ListaUsuarios } from '../modelos/usuario.modelo';

@Component({
  selector: "tag-api",
  templateUrl: "../vistas/api.html"
})

export class ApiComponente {
  public identificado:string;
  public listaUsuarios:ListaUsuarios;

  constructor(){
    this.listaUsuarios = new ListaUsuarios("", "");
  }

  onSubmit(){
    console.log(this.listaUsuarios.usuario, this.listaUsuarios.password);
  }

}
