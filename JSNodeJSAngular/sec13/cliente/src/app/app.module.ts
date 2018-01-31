/*
Las aplicaciones de angular son modulares y angular tiene su propio sistema de modularidad llamado NgModules.
Cada aplicación angular tiene al menos una clase NgModule, el módulo raíz se nombra convencionalmente AppModule.
*/

//para buscar modulos de angular
import { BrowserModule } from '@angular/platform-browser';
//NgModule para usar el modulo raíz
import { NgModule } from '@angular/core';
//HTTPModule para trabajar con cabeceras http
import { HttpModule } from '@angular/http'
//modulo para trabajar con formularios
import { FormsModule } from '@angular/forms';

//AppComponent es el componente donde estara el componente principal de la aplicación
import { AppComponent } from './app.component';

import { IndexComponente } from './componentes/index';

import { SlideComponente } from './componentes/slide';

import { GaleriaComponente } from './componentes/galeria';

import { MouseComponente } from './componentes/mouse';

import { ScrollComponente } from './componentes/scroll';

import { FormularioComponente } from './componentes/formulario';

import { ApiComponente } from './componentes/api';

import { routing, appRoutingProviders } from './app.rutas';

//los decoradores funciones que modifican clases de javascript, angular cuenta con muchos decoradores
//que adjuntan metadatos de las clases para que sepa lo que significan esas clases y como deben funcionar.
@NgModule({
  //las declaraciones son las clases de vista que pertenecen a este módulo. Angular tiene tres tipos de
  //clases de vista: components, directivas y pines (tubos)
  //donde se declaran los componentes de la aplicación
  declarations: [
    AppComponent,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    MouseComponente,
    ScrollComponente,
    FormularioComponente,
    ApiComponente
  ],
  //exports: [], coj de declaraciones que deben ser accesibles para templates de otros modulos
  //donde se importan otros modulos que son necesarios para el componente declarados en los modulos.
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule
  ],
  //creadores de servicios, queda en la colección global de servicios.
  providers: [
    //carga del servicio que nameja las rutas
    appRoutingProviders
  ],
  //??, el componente raíz, que crea angular y lo inserta en index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
